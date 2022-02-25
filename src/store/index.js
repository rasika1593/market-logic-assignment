import { combineReducers, createStore } from "redux";
import todos from './todos';
/*
currently we dont have multiple reducer so havent use combinereducer otherwise we can use combineReducers

*/
export default createStore(todos);