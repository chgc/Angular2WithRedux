import {
    Component,
    ViewEncapsulation,
    Inject,
    ApplicationRef
} from 'angular2/core';

import * as TodoAction from '../../actions/ToDo';
import {TodoService} from '../../services/TodoService.ts';
import {visibleFilter} from '../../pipes/visiblefilter';

@Component({
    selector: 'ck-todo-app',
    providers: [TodoService],
    directives: [],
    pipes: [visibleFilter],
    template: require('./TodoPage.html')
})
export class CkTodoApp {
    private disconnect: Function;
    private unsubscribe: Function;

    private items: any;
    private task: any;
    private currentFilter: string = "";

    constructor(
        @Inject('ngRedux') private ngRedux,
        private applicationRef: ApplicationRef,
        private todoService: TodoService) {

        this.todoService.loadTodo();
    }
    setFilter(filter) {
        this.ngRedux.dispatch(TodoAction.setFilter(filter));
    }

    ngOnInit() {
        this.disconnect = this.ngRedux.connect(
            this.mapStateToThis,
            this.mapDispatchToThis)(this);

        this.unsubscribe = this.ngRedux.subscribe(() => {
            let state = this.ngRedux.getState();
            this.applicationRef.tick();
            this.items = state.todo.todos;
        });
    }

    ngOnDestroy() {
        this.unsubscribe();
        this.disconnect();
    }

    mapStateToThis(state) {
        return {
            currentFilter: state.todo.current_filter,
            task: state.newtodo
        };
    }

    mapDispatchToThis(dispatch) {
        return {
            add: (task) => dispatch(TodoAction.add(Object.assign({}, task))),
            finish: (task) => dispatch(TodoAction.finish(task)),
            remove: (task) => dispatch(TodoAction.remove(task))
        };
    }
};
