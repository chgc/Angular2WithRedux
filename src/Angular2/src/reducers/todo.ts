import { fromJS, List } from 'immutable';
import { TODO_ADD, TODO_REMOVE, TODO_INIT, TODO_COMPLETE } from '../constants';

const INITIAL_STATE = List<any>();

export function todo(state = INITIAL_STATE, action: any = { type: '' }) {
    switch (action.type) {
        case TODO_INIT:
            return List<any>(action.payload);
        case TODO_ADD:
            return state.push(action.payload);
        case TODO_COMPLETE:
            return state.map((item) => {
                if (item.id == action.payload.id) {
                    return Object.assign({}, item, { complete: action.payload.complete });
                } else {
                    return item;
                }
            });
        case TODO_REMOVE:
            return state.remove(state.indexOf(action.payload));
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