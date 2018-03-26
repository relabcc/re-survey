import { fromJS } from 'immutable';

export const SET_ANSWER = 'App/Quiz/SET_ANSWER';

export function setAnswer(idPath, answer) {
  return {
    type: SET_ANSWER,
    idPath,
    answer,
  };
}

const initialState = fromJS({});

export default function quizReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ANSWER:
      return state.setIn(action.idPath, action.answer);
    default:
      return state;
  }
}
