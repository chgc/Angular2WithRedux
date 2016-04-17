"use strict";
var constants_1 = require('../constants');
require('rxjs/Rx');
require('whatwg-fetch');
var uuid = require('uuid');
function add(task) {
    task.id = uuid.v4();
    return {
        type: constants_1.TODO_ADD,
        payload: task
    };
}
exports.add = add;
function finish(task) {
    task.complete = !task.complete;
    return {
        type: constants_1.TODO_COMPLETE,
        payload: task
    };
}
exports.finish = finish;
function remove(task) {
    return {
        type: constants_1.TODO_REMOVE,
        payload: task
    };
}
exports.remove = remove;
function setFilter(filter) {
    return {
        type: constants_1.TODO_FILTER,
        filter: filter
    };
}
exports.setFilter = setFilter;
function reload() {
    fetch('api/Values')
        .then(function (response) {
        return response.json();
    })
        .then(function (data) {
        return {
            type: constants_1.TODO_INIT,
            payload: data
        };
    });
}
exports.reload = reload;
//# sourceMappingURL=ToDo.js.map