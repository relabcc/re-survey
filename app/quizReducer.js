import { fromJS } from 'immutable';

export const SET_ANSWER = 'App/SET_ANSWER';

export function setAnswer(id, answer) {
  return {
    type: SET_ANSWER,
    id,
    answer,
  };
}

export const scoreBase = {
  story: 0,
  info: 0,
  design: 0,
};

const initialState = fromJS([]);

export default function quizReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ANSWER:
      return state.set(action.id, action.answer);
    default:
      return state;
  }
}
