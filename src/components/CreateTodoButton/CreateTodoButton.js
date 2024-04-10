import React from 'react';
import './CreateTodoButton.css';
import { todoContext } from '../../App';

function CreateTodoButton() {
  const { todoArray, setTodoArray, 
          todoCount, setTodoCount,
          todoFilterArray, setTodoFilterArray,
          todoFilteredArray, setTodoFilteredArray,
          todoInput } = React.useContext(todoContext);

  const handleAddTodoButton = () => {
    if (todoInput.trim() !== '')
    {
      const lastTodo = todoArray[todoArray.length - 1];
      const formatedTodo = { id: lastTodo == undefined ? 1 : lastTodo.id+1, text: todoInput, completed: false }
      const newArray = [...todoArray, formatedTodo];
      setTodoArray(newArray);
      
      const selectedFilterElement = [...todoFilterArray].find(a => a.active == true);
      switch(selectedFilterElement.text){
        case 'All':
          setTodoFilteredArray(newArray);
          break;
        case 'Active':
          const newActiveArray = [...todoFilteredArray, formatedTodo]
          setTodoFilteredArray(newActiveArray);
          break;
      }

      setTodoCount(todoCount+1);
      setTodoFilterArray(todoFilterArray);
    }
  }

  return (
    <button
      className='add-todo-btn'
      type='submit'
      onClick={handleAddTodoButton}>Add</button>
  )
}

export default CreateTodoButton