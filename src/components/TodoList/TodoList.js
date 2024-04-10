import React from 'react';
import './TodoList.css';
import TodoItem from '../TodoItem/TodoItem';
import { todoContext } from '../../App';

function TodoList() {
  const { todoArray, setTodoArray, 
          todoFilteredArray, setTodoFilteredArray, 
          todoCount, setTodoCount } = React.useContext(todoContext);

  const completeTodo = (todoId) => {
    const newTodos = [...todoArray];
    const actualTodoIndex = newTodos.findIndex(x => x.id === todoId);
    newTodos[actualTodoIndex].completed = !newTodos[actualTodoIndex].completed;
    setTodoArray(newTodos);
    setTodoFilteredArray(newTodos);
  }

  const deleteTodo = (todoId) => {
    const newTodos = [...todoArray];
    const actualTodoIndex = newTodos.findIndex(x => x.id === todoId);
    newTodos.splice(actualTodoIndex, 1);
    setTodoArray(newTodos);
    setTodoFilteredArray(newTodos);
    setTodoCount(todoCount-1);
  }

  return (
    <div className='todo-list'>
      {todoFilteredArray.map(todoElement => (
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