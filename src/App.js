import './App.css';
import React, { useState } from 'react';
import TodoList from './components/TodoList/TodoList.js';
import TodoHeader from './components/TodoHeader/TodoHeader.js';

export const UserContext = React.createContext();

function App() {
  const [todoInput, setTodoInput] = useState('');


  return (
    <React.Fragment>
      <div className='todo-elements'>
        <UserContext.Provider value={{todoInput, setTodoInput}}>
          <TodoHeader />
          <TodoList />
        </UserContext.Provider>
      </div>
    </React.Fragment>
  );
}

export default App;
