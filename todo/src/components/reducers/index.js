import { ADD_TODO, TOGGLE_TODO } from "../actions";

const initialState = [{ id: 12739879, todo: "Learn React", completed: false }];

export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    case TOGGLE_TODO:
      return state.map(todo => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo)
    default:
      return state;
  }
}
