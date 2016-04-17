"use strict";
var immutable_1 = require('immutable');
var constants_1 = require('../constants');
var INITIAL_STATE = {
    todos: immutable_1.List(),
    current_filter: ""
};
function todo(state, action) {
    if (state === void 0) { state = INITIAL_STATE; }
    if (action === void 0) { action = { type: '' }; }
    switch (action.type) {
        case constants_1.TODO_INIT:
            return {
                todos: immutable_1.List(action.payload),
                current_filter: ""
            };
        case constants_1.TODO_ADD:
            return {
                todos: state.todos.push(action.payload),
                current_filter: state.current_filter
            };
        case constants_1.TODO_COMPLETE:
            return {
                todos: state.todos.map(function (item) {
                    if (item.id == action.payload.id) {
                        return Object.assign({}, item, { complete: action.payload.complete });
                    }
                    else {
                        return item;
                    }
                }),
                current_filter: state.current_filter
            };
        case constants_1.TODO_REMOVE:
            return {
                todos: state.todos.remove(state.todos.indexOf(action.payload)),
                current_filter: state.current_filter
            };
        case constants_1.TODO_FILTER:
            return {
                todos: state.todos.map(function (todo) { return todo; }),
                current_filter: action.filter
            };
        default:
            return state;
    }
}
exports.todo = todo;
function newtodo(state, action) {
    if (state === void 0) { state = { content: '' }; }
    if (action === void 0) { action = { type: '' }; }
    switch (action.type) {
        case constants_1.TODO_ADD:
            return { content: '' };
        default:
            return state;
    }
}
exports.newtodo = newtodo;
//# sourceMappingURL=todo.js.map