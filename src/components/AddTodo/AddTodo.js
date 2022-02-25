import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import { add} from "../../store/todoActions";

const AddTodo = () => {
    const [newTodo, setNewTodo] = useState("");
    const dispatch = useDispatch();

    const handleChange = (e) => {
       
        setNewTodo(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(add(newTodo));
    }
    return(
        <form onSubmit={handleSubmit}> 
            <input type="text" value={newTodo} onChange={handleChange}/>
            <button type="submit">Add</button>
        </form>
    )
}

export default AddTodo;