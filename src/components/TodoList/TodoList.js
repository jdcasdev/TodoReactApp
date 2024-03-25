import React from 'react';
import './TodoList.css';
import TodoItem from '../TodoItem/TodoItem';

const defaultTodoArray = [
  { id: 1, text: 'Item de la lista num 1', completed: false },
  { id: 2, text: 'Item de la lista num 2', completed: true },
  { id: 3, text: 'Item de la lista num 3', completed: false }
]

function TodoList() {
  return (
    <div className='todo-list'>
      {defaultTodoArray.map(todoElement => (
        <TodoItem
          key={todoElement.id}
          completed={todoElement.completed}
          text={todoElement.text} />
      ))}
    </div>
  )
}

export default TodoList