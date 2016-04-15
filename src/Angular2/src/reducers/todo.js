"use strict";
var immutable_1 = require('immutable');
var constants_1 = require('../constants');
var INITIAL_STATE = immutable_1.List();
function todoReducer(state, action) {
    if (state === void 0) { state = INITIAL_STATE; }
    if (action === void 0) { action = { type: '' }; }
    switch (action.type) {
        case constants_1.TODO_ADD:
            return state.push(action.data);
        case constants_1.TODO_REMOVE:
            return state.remove(this.Todo.indexOf(action.data));
        default:
            return state;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = todoReducer;
//# sourceMappingURL=todo.js.map