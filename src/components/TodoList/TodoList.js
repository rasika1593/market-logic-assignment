import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { toggle} from "../../store/todoActions";

const TodoList = () => {
    const [todoList, setTodoList] = useState([])
    const { todos,filter } = useSelector(state => state)

    const dispatch = useDispatch();

    useEffect(()=>{
        let filterTodos=[]
      if(filter === 'showAll'){
        filterTodos = todos;
      }else if(filter === 'completed'){
        filterTodos = todos.filter(todo => {
            return todo.completed === true;
        })  
      } else if(filter === 'notCompleted'){
        filterTodos = todos.filter(todo => {
            return todo.completed === false;
        })  
      }
      setTodoList(filterTodos);
    },[filter,todos])

    const handleClick = (id) => {
        dispatch(toggle(id));
    }

    return(
        <ul className="todos">
            {todoList.map(todo => {
                return (<li key={todo.id} className={"todos__item " + (todo.completed&&'todos__item_checked')} >
                    <input type="checkbox" checked={todo.completed} onChange={(e) => handleClick(todo.id)}></input>
                    {todo.title}
                </li>)
            })}
        </ul>
    )
}

export default TodoList;