import React from 'react';
import './TodoCounter.css';

function TodoCounter({total, completed}) {
  return (
    <h1 className='todo-count'>{total} todos</h1>
  );
}

export default TodoCounter