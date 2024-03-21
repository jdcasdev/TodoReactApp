import './App.css';
import React from 'react';
import CreateTodoButton from './components/CreateTodoButton';
import TodoCounter from './components/TodoCounter';
import TodoItem from './components/TodoItem';
import TodoList from './components/TodoList';
import TodoSearch from './components/TodoSearch';

const defaultTodoArray = [
  { id: 1, text: 'Item de la lista num 1', completed: false },
  { id: 2, text: 'Item de la lista num 2', completed: true },
  { id: 3, text: 'Item de la lista num 3', completed: false }
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={10} total={20} />
      <TodoSearch />
      <TodoList>
        {defaultTodoArray.map(todoElement => (
          <TodoItem 
            key={ todoElement.id } 
            completed={ todoElement.completed }
            id={ todoElement.id }
            text={ todoElement.text }/>
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
