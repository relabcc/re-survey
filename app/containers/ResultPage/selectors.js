import { fromJS } from 'immutable';
import { createSelector } from 'reselect';
import isArray from 'lodash/isArray';
import isNil from 'lodash/isNil';

import quizQuestions from '../QuizPage/questions';

const scoreBase = fromJS({
  story: 0,
  info: 0,
  design: 0,
});

const incrementAtKey = (scores, key, amount = 1) => scores.set(key, scores.get(key) + Number(amount));

const selectQuiz = (state) => state.get('quiz');
const selectSurvey = (state) => state.get('survey');

const makeSelectQuizScore = () => createSelector(
  selectQuiz,
  (quizState) => quizQuestions.reduce((finalSum, questions, qIndex) => questions.reduce((scoreSum, question, subQIndex) => {
    if (question.type === 'Checkbox') {
      return question.options.reduce((subSum, { scores }, index) => {
        // not checked or no score related
        if (!quizState.getIn([qIndex, subQIndex, index]) || !isArray(scores)) return subSum;
        return scores.reduce((subScoreSum, scoreKey) => incrementAtKey(subScoreSum, scoreKey), subSum);
      }, scoreSum);
    }

    if (question.type === 'Radar') {
      return question.axes.reduce((subSum, { scores }, index) => {
        const axisScore = quizState.getIn([qIndex, subQIndex, index]);
        // no score or no score related
        if (axisScore === 1 || !isArray(scores)) return subSum;
        return scores.reduce((subScoreSum, scoreKey) => incrementAtKey(subScoreSum, scoreKey, axisScore / 4), subSum);
      }, scoreSum);
    }

    return scoreSum;
  }, finalSum), scoreBase).toJS()
);


const makeSelectSurveyTaken = () => createSelector(
  selectSurvey,
  (surveyState) => !isNil(surveyState.get('price')) && surveyState.get('wantTo').some(Boolean),
);

const makeSelectSurveyEmail = () => createSelector(
  selectSurvey,
  (surveyState) => surveyState.get('email')
);

export {
  selectQuiz,
  makeSelectSurveyTaken,
  makeSelectSurveyEmail,
  makeSelectQuizScore,
};
