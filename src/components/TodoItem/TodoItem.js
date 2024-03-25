import React, { useState } from 'react';
import './TodoItem.css'

function TodoItem({ text, completed }) {
  const [checked, setCheck] = useState(completed);

  return (
    <div className={
      checked
        ? 'todo-item is-completed'
        : 'todo-item'
    }>
      <input
        type='checkbox'
        className='todo-item-status'
        checked={checked}
        onChange={e => setCheck(e.target.checked) }
      />
      <label className='todo-item-name'>{text}</label>
      <button className='todo-item-delete' />
    </div>
  )
}

export default TodoItem