import React from 'react';
import './TodoSearch.css';
import TodoCreateButton from '../CreateTodoButton/CreateTodoButton';

function TodoSearch() {
  return (
    <div className='todo-search-form'>
      <input className='todo-input' placeholder='Add a new task...' autoFocus={true}/>
      <TodoCreateButton />
    </div>
  )
}

export default TodoSearch