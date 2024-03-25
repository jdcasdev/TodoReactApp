import './App.css';
import React from 'react';
import TodoList from './components/TodoList/TodoList.js';
import TodoHeader from './components/TodoHeader/TodoHeader.js';

function App() {
  return (
    <React.Fragment>
      <div className='todo-elements'>
        <TodoHeader />
        <TodoList />
      </div>
    </React.Fragment>
  );
}

export default App;
