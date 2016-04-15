import { Component } from 'angular2/core';

import { TodoService } from "../../services/ToDoService";


@Component({
    selector: 'ck-todo-app',
    providers: [TodoService],
    directives: [],
    template: require('./TodoPage.html')
})
export class CkTodoApp {
    task: any = { content: "" };
    items: any;

    constructor(private _service: TodoService) {
        this.items = _service.list();
    }
    add() {
        this.items = this._service.add(this.task);
        this.task = { content: "" };
    }
    remove(item) {
        this.items = this._service.remove(item);
    }
};
