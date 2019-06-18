import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo, toggleTodo } from "../components/actions";

class TodoList extends Component {
  render() {
    console.log(this.props)
    const todos = this.props.todos || [];
    return (
      <div>
        <h3>My Todo List</h3>
        <ul>
          {todos.map(todo => (
            <li key={todo.id} onClick={() => this.props.toggleTodo(todo.id)}>{todo.todo}</li>
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
  { addTodo, toggleTodo }
)(TodoList);
