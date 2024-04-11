import './App.css';
import React, { useState } from 'react';
import TodoList from './components/TodoList/TodoList.js';
import TodoHeader from './components/TodoHeader/TodoHeader.js';

export const todoContext = React.createContext();
const defaultTodoArray = [
  { id: 1, text: 'Item de la lista num 1', completed: false },
  { id: 2, text: 'Item de la lista num 2', completed: true },
  { id: 3, text: 'Item de la lista num 3', completed: false }
]
const defaultFilterArray = [
  { id: 1, text: 'All', active: true },
  { id: 2, text: 'Active', active: false },
  { id: 3, text: 'Completed', active: false }
]

function App() {
  const [todoInput, setTodoInput] = useState('');
  const [todoArray, setTodoArray] = useState(defaultTodoArray);
  const [todoFilteredArray, setTodoFilteredArray] = useState(todoArray);
  const [todoCount, setTodoCount] = useState(defaultTodoArray.length);
  const [todoFilterArray, setTodoFilterArray] = useState(defaultFilterArray);

  return (
    <React.Fragment>
      <div className='todo-elements'>
        <todoContext.Provider value={
          {
            todoInput, setTodoInput, 
            todoArray, setTodoArray,
            todoFilteredArray, setTodoFilteredArray,
            todoCount, setTodoCount,
            todoFilterArray, setTodoFilterArray
          }
        }>
          <TodoHeader />
          <TodoList />
        </todoContext.Provider>
      </div>
    </React.Fragment>
  );
}

export default App;
