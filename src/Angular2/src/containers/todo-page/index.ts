import {
    Component,
    ViewEncapsulation,
    Inject,
    ApplicationRef
} from 'angular2/core';

import * as TodoAction from '../../actions/ToDo';
import {TodoService} from '../../services/TodoService.ts';


@Component({
    selector: 'ck-todo-app',
    providers: [TodoService],
    directives: [],
    template: require('./TodoPage.html')
})
export class CkTodoApp {
    private disconnect: Function;
    private unsubscribe: Function;

    private items: any;
    private task: any;

    constructor(
        @Inject('ngRedux') private ngRedux,
        private applicationRef: ApplicationRef,
        private todoService: TodoService) {
        
        this.todoService.loadTodo();
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
            items: state.todo,
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
