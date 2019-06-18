import { ADD_TODO } from "../actions";

export function todoReducer(
  state = [{ todo: "Learn React", done: false }],
  action
) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    default:
      return state;
  }
}
