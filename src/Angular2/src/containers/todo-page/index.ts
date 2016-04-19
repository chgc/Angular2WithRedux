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
    selector: 'ck-todo-page',
    providers: [TodoService],
    directives: [],
    pipes: [visibleFilter],
    template: require('./Todo.html')
})
export class CkTodoPage {
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
        // this.ngRedux.dispatch(TodoAction.loadTodo());
    }
    setFilter(filter) {
        this.ngRedux.dispatch(TodoAction.setFilter(filter));
    }

    ngOnInit() {
        this.disconnect = this.ngRedux.connect(
            this.mapStateToThis,
            this.mapDispatchToThis)(this);

        this.unsubscribe = this.ngRedux.subscribe(() => {
            this.applicationRef.tick();
        });
    }

    ngOnDestroy() {
        this.unsubscribe();
        this.disconnect();
    }

    mapStateToThis(state) {
        return {
            items: state.todo.todos,
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
