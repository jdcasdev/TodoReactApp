import React, { useState } from 'react';
import './TodoSearch.css';
import TodoCreateButton from '../CreateTodoButton/CreateTodoButton';

function TodoSearch() {
  const [todoInput, setTodoInput] = useState('');
  return (
    <div className='todo-search-form'>
      <input
        className='todo-input'
        placeholder='Add a new task...'
        autoFocus={true}
        onChange={(event) => setTodoInput(event.target.value)} />
      <TodoCreateButton />
    </div>
  )
}

export default TodoSearch