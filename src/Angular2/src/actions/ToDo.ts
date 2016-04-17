import { TODO_ADD, TODO_REMOVE, TODO_INIT, TODO_COMPLETE, TODO_FILTER } from '../constants';
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