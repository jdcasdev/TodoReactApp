import React from 'react';
import './TodoSearch.css';
import TodoCreateButton from '../CreateTodoButton/CreateTodoButton';
import { todoContext } from '../../App';

function TodoSearch() {
  const { todoInput, setTodoInput, 
          todoArray, setTodoArray, 
          todoCount, setTodoCount} = React.useContext(todoContext);

  const handleInputChange = (event) => {
    setTodoInput(event.target.value);
  };

  const handleEnterKeyDown = (event) => {
    if (event.key === 'Enter' && todoInput.trim() !== '')
    {
      const lastTodo = todoArray[todoArray.length - 1];
      const formatedTodo = { id: lastTodo == undefined ? 1 : lastTodo.id+1, text: todoInput, completed: false }
      const newArray = [...todoArray, formatedTodo];
      setTodoArray(newArray);
      setTodoCount(todoCount+1);
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