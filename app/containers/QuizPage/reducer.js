import { fromJS } from 'immutable';

export const SET_ANSWER = 'App/Quiz/SET_ANSWER';
export const SET_SCORE = 'App/Quiz/SET_SCORE';
export const RECEIVED_DB_KEY = 'App/Quiz/RECEIVED_DB_KEY';

export function setAnswer(idPath, answer) {
  return {
    type: SET_ANSWER,
    idPath,
    answer,
  };
}

export function receivedDBKey(key) {
  return {
    type: RECEIVED_DB_KEY,
    key,
  };
}

export function setScore(score) {
  return {
    type: SET_SCORE,
    score,
  };
}

const initialState = fromJS({});

export default function quizReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ANSWER:
      return state.setIn(action.idPath, action.answer);
    case RECEIVED_DB_KEY:
      return state.set('key', action.key);
    default:
      return state;
  }
}
