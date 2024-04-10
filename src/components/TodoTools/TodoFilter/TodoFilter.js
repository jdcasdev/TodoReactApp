import React from 'react';
import './TodoFilter.css'
import { todoContext } from '../../../App';

function TodoFilter() {
    const { setTodoFilteredArray,
            todoFilterArray, setTodoFilterArray, 
            todoArray } = React.useContext(todoContext);

    const handleFilterChange = (id) => {
        const newFilterArray = [...todoFilterArray];
        newFilterArray.forEach(a => a.active = false);
        const selectedFilterIndex = newFilterArray.findIndex(x => x.id === id);
        newFilterArray[selectedFilterIndex].active = true;
        setTodoFilterArray(newFilterArray);

        switch(newFilterArray[selectedFilterIndex].text)
        {
            case 'All':
                setTodoFilteredArray(todoArray);
                break;
            case 'Active':
                const newTodoArray = [...todoArray].filter(a => !a.completed);
                setTodoFilteredArray(newTodoArray);
                break;
            case 'Completed':
                const completedTodoArray = [...todoArray].filter(a => a.completed);
                setTodoFilteredArray(completedTodoArray);
        }
    }

    return (
        <div>
            {todoFilterArray.map((item) => (
                <button
                    id={item.id}
                    className={
                        item.active
                            ? 'todo-filter is-active'
                            : 'todo-filter'
                    }
                    onClick={() => handleFilterChange(item.id)}
                >
                    {item.text}
                </button>
            ))}
        </div>
    )
}

export default TodoFilter