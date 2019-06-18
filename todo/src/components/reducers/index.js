import * as types from "../actions";

export function todoReducer(
  state = [{ todo: "Learn React", done: false }],
  action
) {
  switch (action.type) {
    case types.ADD_TODO:
      return [...state, action.payload];
    default:
      return state;
  }
}
