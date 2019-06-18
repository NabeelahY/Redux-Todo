import { ADD_TODO } from "../actions";

const initialState = [{ id: 12739879, todo: "Learn React", completed: false }];

export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    default:
      return state;
  }
}
