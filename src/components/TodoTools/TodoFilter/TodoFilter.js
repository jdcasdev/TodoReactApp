import React, { useState } from 'react';
import './TodoFilter.css'

const availableFilterArray = [
    { id: 1, text: 'All' },
    { id: 2, text: 'Active' },
    { id: 3, text: 'Completed' }
]

function TodoFilter() {
    const [selected, setSelected] = useState(0);

    const clickHandler = (index) => {
        setSelected(index);
    };

    return (
        <div>
            {availableFilterArray.map((item, index) => (
                <button
                    id={item.id}
                    className={
                        selected === index
                            ? 'todo-filter is-active'
                            : 'todo-filter'
                    }
                    onClick={() => clickHandler(index)}
                >
                    {item.text}
                </button>
            ))}
        </div>
    )
}

export default TodoFilter