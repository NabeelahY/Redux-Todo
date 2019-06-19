import React from "react";
import { createStore, combineReducers } from "redux";
import { todoReducer } from "./components/reducers";
import styled from "styled-components";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const StyledTodo = styled.div`
  text-align: center;
  margin: 0 auto;
  width: 50%;

  form {
    margin: 1rem 0;

    input{
      padding: 0.5rem;
    }

    button {
      padding: 0.5rem;
    }
  }
`;

const combinedReducer = combineReducers({
  todos: todoReducer
});

export const store = createStore(
  combinedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <StyledTodo>
      <TodoForm />
      <TodoList />
    </StyledTodo>
  );
}

export default App;
