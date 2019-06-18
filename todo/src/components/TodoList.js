import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../components/actions";

class TodoList extends Component {
  render() {
    const todos = this.props.todos || [];
    return (
      <div>
        <h3>My Todo List</h3>
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>{todo.todo}</li>
          ))}
        </ul>
      </div>
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
  { addTodo }
)(TodoList);
