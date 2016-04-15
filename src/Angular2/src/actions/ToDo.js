"use strict";
var constants_1 = require('../constants');
function add(task) {
    return {
        type: constants_1.TODO_ADD,
        data: task
    };
}
exports.add = add;
function remove(task) {
    return {
        type: constants_1.TODO_REMOVE,
        data: task
    };
}
exports.remove = remove;
//# sourceMappingURL=ToDo.js.map