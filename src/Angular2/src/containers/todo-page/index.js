"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var TodoAction = require('../../actions/ToDo');
var TodoService_ts_1 = require('../../services/TodoService.ts');
var visiblefilter_1 = require('../../pipes/visiblefilter');
var CkTodoPage = (function () {
    function CkTodoPage(ngRedux, applicationRef, todoService) {
        this.ngRedux = ngRedux;
        this.applicationRef = applicationRef;
        this.todoService = todoService;
        this.currentFilter = "";
        this.todoService.loadTodo();
        // this.ngRedux.dispatch(TodoAction.loadTodo());
    }
    CkTodoPage.prototype.setFilter = function (filter) {
        this.ngRedux.dispatch(TodoAction.setFilter(filter));
    };
    CkTodoPage.prototype.ngOnInit = function () {
        var _this = this;
        this.disconnect = this.ngRedux.connect(this.mapStateToThis, this.mapDispatchToThis)(this);
        this.unsubscribe = this.ngRedux.subscribe(function () {
            _this.applicationRef.tick();
        });
    };
    CkTodoPage.prototype.ngOnDestroy = function () {
        this.unsubscribe();
        this.disconnect();
    };
    CkTodoPage.prototype.mapStateToThis = function (state) {
        return {
            items: state.todo.todos,
            currentFilter: state.todo.current_filter,
            task: state.newtodo
        };
    };
    CkTodoPage.prototype.mapDispatchToThis = function (dispatch) {
        return {
            add: function (task) { return dispatch(TodoAction.add(Object.assign({}, task))); },
            finish: function (task) { return dispatch(TodoAction.finish(task)); },
            remove: function (task) { return dispatch(TodoAction.remove(task)); }
        };
    };
    CkTodoPage = __decorate([
        core_1.Component({
            selector: 'ck-todo-page',
            providers: [TodoService_ts_1.TodoService],
            directives: [],
            pipes: [visiblefilter_1.visibleFilter],
            template: require('./Todo.html')
        }),
        __param(0, core_1.Inject('ngRedux')), 
        __metadata('design:paramtypes', [Object, core_1.ApplicationRef, TodoService_ts_1.TodoService])
    ], CkTodoPage);
    return CkTodoPage;
}());
exports.CkTodoPage = CkTodoPage;
;
//# sourceMappingURL=index.js.map