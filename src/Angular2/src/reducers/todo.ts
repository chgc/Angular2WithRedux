import { fromJS, List } from 'immutable';
import { TODO_ADD, TODO_REMOVE, TODO_INIT } from '../constants';

const INITIAL_STATE = List<any>();

export function todo(state = INITIAL_STATE, action: any = { type: '' }) {
    switch (action.type) {
        case TODO_INIT:
            return List<any>(action.data);
        case TODO_ADD:
            return state.push(action.data);
        case TODO_REMOVE:
            return state.remove(state.indexOf(action.data));
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