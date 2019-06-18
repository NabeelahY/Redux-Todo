import React from 'react';
import { createStore, combinedReducers } from 'react-redux';
import { todoReducer } from './components/reducers';
import './App.css';



const combinedReducer = combinedReducers({
  todos: todoReducer
});

export const store = createStore(
  combinedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

function App() {
  return (
    <div className="App">
  
    </div>
  );
}

export default App;
