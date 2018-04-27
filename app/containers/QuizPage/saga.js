import isArray from 'lodash/isArray';
import compact from 'lodash/compact';
import { all, call, put, select, takeEvery } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import fetch from 'utils/fetch';
import firebase from 'services/firebase';
import basename from 'basename';
import { SET_ANSWER, SET_SCORE, receivedDBKey } from './reducer';
import { SET_ANSWER as SET_SURVEY_ANSWER } from '../SurveyPage/reducer';

const logRef = firebase.database().ref('logs');

// some answers are written in immutable
const tryToJS = (answer) => {
  try {
    return answer.toJS();
  } catch (error) {
    return answer;
  }
};

function* getKey() {
  let key = yield select((state) => state.getIn(['quiz', 'key']));

  // if no key stored in redux, get a new one
  if (!key) {
    key = logRef.push().key;
    yield all([
      call(fetch, `${basename}data/userAgent?key=${key}&tz=${-new Date().getTimezoneOffset() / 60}`),
      put(receivedDBKey(key)),
    ]);
  }
  return key;
}

function* handleArrayAnswer(target, answer) {
  const answerTasks = answer.map((ans, index) => {
    if (!ans) return null;
    const subTarget = target.child(index);
    // eslint-disable-next-line redux-saga/yield-effects
    return call([subTarget, subTarget.set], ans);
  });
  // use compact to leave only checked results
  return yield all(compact(answerTasks));
}

function* handleAnswer(answer, target) {
  const ans = tryToJS(answer);
  if (isArray(ans)) {
    yield call(handleArrayAnswer, target, ans);
  } else {
    yield call([target, target.set], ans);
  }
}

function* postQuizToFirebase({ idPath, answer }) {
  const dbKey = yield call(getKey);
  const target = logRef.child(`/${dbKey}/quiz/${idPath.join('/')}`);
  yield call(handleAnswer, answer, target);
}

function* postSurveyToFirebase({ key, answer }) {
  const dbKey = yield call(getKey);
  const target = logRef.child(`/${dbKey}/survey/${key}`);
  yield call(handleAnswer, answer, target);
}

function* postScoreFirebase({ score }) {
  const dbKey = yield call(getKey);
  const target = logRef.child(`/${dbKey}/score`);
  yield call([target, target.set], score);
}

function* onLocationChange({ payload: { pathname } }) {
  const key = yield call(getKey);
  const target = logRef.child(`/${key}/pageview`);
  yield call([target, target.push], {
    pathname,
    timestamp: firebase.database.ServerValue.TIMESTAMP,
  });
}

export default function* quizSaga() {
  yield all([
    takeEvery(SET_ANSWER, postQuizToFirebase),
    takeEvery(SET_SURVEY_ANSWER, postSurveyToFirebase),
    takeEvery(SET_SCORE, postScoreFirebase),
    takeEvery(LOCATION_CHANGE, onLocationChange),
  ]);
}
