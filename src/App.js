import React from 'react';
import AddTodo from './components/AddTodo/AddTodo';
import TodoFilter from './components/TodoFilter/TodoFilter';
import TodoList from './components/TodoList/TodoList';

const App =()=>{
    return(
        <div className="form">
            <AddTodo/>
            <TodoFilter/>
            <TodoList/>
        </div>
    )
};
export default App;