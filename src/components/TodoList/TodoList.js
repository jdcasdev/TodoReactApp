import React, { useState } from 'react';
import './TodoList.css';
import TodoItem from '../TodoItem/TodoItem';

const defaultTodoArray = [
  { id: 1, text: 'Item de la lista num 1', completed: false },
  { id: 2, text: 'Item de la lista num 2', completed: true },
  { id: 3, text: 'Item de la lista num 3', completed: false }
]

function TodoList() {
  const [todoArray, setTodoArray] = useState(defaultTodoArray);

  const completeTodo = (todoId) => {
    const newTodos = [...todoArray];
    const actualTodoIndex = newTodos.findIndex(x => x.id === todoId);
    newTodos[actualTodoIndex].completed = !newTodos[actualTodoIndex].completed;
    setTodoArray(newTodos);
  }

  const deleteTodo = (todoId) => {
    const newTodos = [...todoArray];
    const actualTodoIndex = newTodos.findIndex(x => x.id === todoId);
    newTodos.splice(actualTodoIndex, 1);
    setTodoArray(newTodos);
  }

  return (
    <div className='todo-list'>
      {todoArray.map(todoElement => (
        <TodoItem
          key={todoElement.id}
          id={todoElement.id}
          completed={todoElement.completed}
          text={todoElement.text}
          onComplete={() => completeTodo(todoElement.id)}
          onDelete={() => deleteTodo(todoElement.id)} />
      ))}
    </div>
  )
}

export default TodoList