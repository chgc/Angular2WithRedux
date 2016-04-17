"use strict";
var redux_1 = require('redux');
var todo_1 = require('./todo');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = redux_1.combineReducers({
    todo: todo_1.todo,
    newtodo: todo_1.newtodo
});
//# sourceMappingURL=index.js.map