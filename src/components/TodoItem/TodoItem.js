import React from 'react';
import './TodoItem.css'

function TodoItem(props) {
  return (
    <div className={
      props.completed
        ? 'todo-item is-completed'
        : 'todo-item'
    }>
      <input
        type='checkbox'
        className='todo-item-status'
        checked={props.completed}
        onChange={props.onComplete}
      />
      <label className='todo-item-name'>{props.text}</label>
      <button
        className='todo-item-delete'
        onClick={props.onDelete} />
    </div>
  )
}

export default TodoItem