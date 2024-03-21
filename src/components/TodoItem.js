import React from 'react'

function TodoItem({id, text, completed}) {
  return (
    <li>
        <span>V</span>
        <label>{text}</label>
        <span>X</span>
    </li>
  )
}

export default TodoItem