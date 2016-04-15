import { combineReducers } from 'redux';
import {todo, newtodo} from './todo';

export default combineReducers({
    todo,
    newtodo
});
