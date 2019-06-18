import React from "react";
import { createStore, combineReducers } from "redux";
import { todoReducer } from "./components/reducers";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const combinedReducer = combineReducers({
  todos: todoReducer
});

export const store = createStore(
  combinedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <div className="App">
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
