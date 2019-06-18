import React from "react";
import { createStore, combineReducers } from 'redux';
import { todoReducer } from "./components/reducers";
import "./App.css";
import TodoList from "./components/TodoList";


const combinedReducer = combineReducers({
  todos: todoReducer
});

export const store = createStore(
  combinedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log('#########', store.getState())
function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
