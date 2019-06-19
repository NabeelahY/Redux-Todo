import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../components/actions";

class TodoForm extends Component {
  todoRef = React.createRef();

  addTodo = e => {
    e.preventDefault();
    this.props.addTodo(this.todoRef.current.value);
    this.todoRef.current.value = "";
  };
  render() {
    return (
      <form onSubmit={this.addTodo}>
        <input ref={this.todoRef} type="text" />
        <button type="submit">Add Todo</button>
      </form>
    );
  }
}

export default connect(
  null,
  { addTodo }
)(TodoForm);
