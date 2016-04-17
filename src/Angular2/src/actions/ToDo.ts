import { TODO_ADD, TODO_REMOVE, TODO_INIT } from '../constants';

export function init(data) {
    
    return {
        type: TODO_INIT,
        data: data
    }

}
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