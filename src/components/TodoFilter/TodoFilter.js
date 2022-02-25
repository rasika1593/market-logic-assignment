import React from 'react';
import {useDispatch} from 'react-redux';
import {filterList } from "../../shared/constant"; 
import { filter} from "../../store/todoActions";

const TodoFilter = () => {
    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch(filter(e.target.value));
    }
    
    return(
        <div className='filter_list'>
            <select onChange={handleChange}>
                {filterList.map((option, index) =>
                    <option key={index} value={option.value}>{option.label}</option>
                )}
            </select>
        </div>
    )
}

export default TodoFilter;