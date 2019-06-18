import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionDispatchers from '../components/actions';

export class TodoList extends Component {
    render() {
        return (
            <div>
                <h3>My Todo List</h3>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todos,
    }
}

export default connect(mapStateToProps, actionDispatchers)(TodoList);
