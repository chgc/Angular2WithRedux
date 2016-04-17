import { fromJS, List } from 'immutable';
import { TODO_ADD, TODO_REMOVE, TODO_INIT, TODO_COMPLETE, TODO_FILTER } from '../constants';

const INITIAL_STATE = {
    todos: List<any>(),
    current_filter: ""
};

export function todo(state = INITIAL_STATE, action: any = { type: '' }) {
    switch (action.type) {
        case TODO_INIT:
            return {
                todos: List<any>(action.payload),
                current_filter: ""
            }
        case TODO_ADD:
            return {
                todos: state.todos.push(action.payload),
                current_filter: state.current_filter
            };
        case TODO_COMPLETE:
            return {
                todos: state.todos.map((item) => {
                    if (item.id == action.payload.id) {
                        return Object.assign({}, item, { complete: action.payload.complete });
                    } else {
                        return item;
                    }
                }),
                current_filter: state.current_filter
            };
        case TODO_REMOVE:
            return {
                todos: state.todos.remove(state.todos.indexOf(action.payload)),
                current_filter: state.current_filter
            };
        case TODO_FILTER:
            return {
                todos: state.todos.map(todo => todo),
                current_filter: action.filter
            }
        default:
            return state;
    }
}
export function newtodo(state = { content: '' }, action: any = { type: '' }) {
    switch (action.type) {
        case TODO_ADD:
            return { content: '' };
        default:
            return state;
    }
}