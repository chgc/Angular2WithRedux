import { List } from 'immutable';

export class TodoService {
    public Todo: any = List<any>();

    add(task) {
        this.Todo = this.Todo.push(task);
        return this.Todo;
    }

    remove(item) {
        this.Todo = this.Todo.remove(this.Todo.indexOf(item));
        return this.Todo;
    }
    list() {
        return this.Todo;
    }
}