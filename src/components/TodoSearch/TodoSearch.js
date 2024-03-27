import React, { useState } from 'react';
import './TodoSearch.css';
import TodoCreateButton from '../CreateTodoButton/CreateTodoButton';
import { UserContext } from '../../App';

function TodoSearch() {
  const { todoInput, setTodoInput } = React.useContext(UserContext);

  const handleInputChange = (event) => {
    setTodoInput(event.target.value);
  };

  const handleEnterKeyDown = (event) => {
    if (event.key === 'Enter' && todoInput.trim() !== '')
    {
      setTodoInput('');
    }
  }

  return (
    <div className='todo-search-form'>
      <input
        className='todo-input'
        placeholder='Add a new task...'
        autoFocus={true}
        onChange={handleInputChange}
        onKeyDown={handleEnterKeyDown} />
      <TodoCreateButton />
    </div>
  )
}

export default TodoSearch