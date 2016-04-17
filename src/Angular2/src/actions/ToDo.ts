import { TODO_ADD, TODO_REMOVE, TODO_INIT, TODO_COMPLETE, TODO_FILTER } from '../constants';
import 'rxjs/Rx';
import 'whatwg-fetch';

var uuid = require('uuid');

export function add(task) {
    task.id = uuid.v4();
    return {
        type: TODO_ADD,
        payload: task
    }
}
export function finish(task) {
    task.complete = !task.complete;
    return {
        type: TODO_COMPLETE,
        payload: task
    }
}

export function remove(task) {
    return {
        type: TODO_REMOVE,
        payload: task
    }
}

export function setFilter(filter) {
    return {
        type: TODO_FILTER,
        filter: filter
    }
}

export function loadTodo() {
    return dispatch => {
        return fetch('api/Values')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                return ({
                    type: TODO_INIT,
                    payload: data
                });
            })
            .then((action) => {
                dispatch(action);
            })
    }

}