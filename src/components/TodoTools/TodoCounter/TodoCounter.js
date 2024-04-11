import React from 'react';
import './TodoCounter.css';
import { todoContext } from '../../../App';

function TodoCounter() {
  const { todoCount } = React.useContext(todoContext);
  return (
    <h1 className='todo-count'>{todoCount} todos</h1>
  );
}

export default TodoCounter