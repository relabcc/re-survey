import { fromJS } from 'immutable';

export const SET_ANSWER = 'App/SET_ANSWER';

export function setAnswer(idPath, answer) {
  return {
    type: SET_ANSWER,
    idPath,
    answer,
  };
}

export const scoreBase = {
  story: 0,
  info: 0,
  design: 0,
};

const initialState = fromJS({});

export default function quizReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ANSWER:
      return state.setIn(action.idPath, action.answer);
    default:
      return state;
  }
}
