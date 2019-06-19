import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo, toggleTodo, deleteTodo } from "../components/actions";
import styled from "styled-components";

const StyledList = styled.div`
  ul {
    li {
      list-style: none;
      margin: 0.5rem 0;

      span{
        text-align: left;
        margin: 0 1rem;
      }
      button {
        border: none;
        font-size: 1rem;
        font-weight: bold;
      }

      &.toggle {
        text-decoration: line-through;
      }
    }
  }
`;

class TodoList extends Component {
  render() {
    console.log(this.props);
    const todos = this.props.todos || [];
    return (
      <StyledList>
        <ul>
          <h3>My Todo List</h3>
          {todos.map(todo => (
            <div key={todo.id}>
              <li className={todo.completed ? "toggle" : ""}>
                <span onClick={() => this.props.toggleTodo(todo.id)}>
                  {todo.todo}
                </span>
          <button onClick={() => this.props.deleteTodo(todo.id)}>&times;</button>
              </li>
            </div>
          ))}
        </ul>
      </StyledList>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { addTodo, toggleTodo, deleteTodo }
)(TodoList);
