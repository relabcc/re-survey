import { fromJS } from 'immutable';

export const SET_ANSWER = 'App/Survey/SET_ANSWER';

export function setAnswer(key, answer) {
  return {
    type: SET_ANSWER,
    key,
    answer,
  };
}

const initialState = fromJS({
  price: null,
  wantTo: [],
  mail: null,
});

export default function surveyReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ANSWER:
      return state.set(action.key, action.answer);
    default:
      return state;
  }
}
