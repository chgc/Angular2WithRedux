import { TODO_ADD, TODO_REMOVE } from '../constants';
export function add(task) {
    return {
        type: TODO_ADD,
        data: task
    }
}

export function remove(task) {
    return {
        type: TODO_REMOVE,
        data: task
    }
}