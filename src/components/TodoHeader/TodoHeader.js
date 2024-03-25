import React from 'react';
import './TodoHeader.css'
import TodoCounter from '../TodoTools/TodoCounter/TodoCounter';
import TodoFilter from '../TodoTools/TodoFilter/TodoFilter';
import TodoSearch from '../TodoSearch/TodoSearch';

function TodoHeader() {
    return (
        <div className='todo-header'>
            <h1 className='todo-header-title'>Welcome, Juan David.</h1>
            <div className='todo-tools'>
                <TodoCounter />
                <TodoFilter />
            </div>
            <TodoSearch />
        </div>
    )
}

export default TodoHeader