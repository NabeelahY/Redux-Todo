import uuid from 'uuid';
export const ADD_TODO = 'ADD_TODO';

export function addTodo (todo) {
    return {
        type: ADD_TODO,
        payload: {
            id: uuid(),
            todo,
            done: false
        }
    }
}