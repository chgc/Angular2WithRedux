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
var lang_1 = require('@angular/core/src/facade/lang');
var exceptions_1 = require('@angular/core/src/facade/exceptions');
var core_1 = require('@angular/core');
var visibleFilter = (function () {
    function visibleFilter() {
    }
    visibleFilter.prototype.transform = function (todos, args) {
        var data = [];
        if (lang_1.isBlank(args) || args.length == 0) {
            throw new exceptions_1.BaseException('VisibleTodos pipe requires one argument');
        }
        if (todos) {
            data = todos.toArray();
        }
        if (lang_1.isPresent(data) && !lang_1.isArray(data)) {
            throw new exceptions_1.BaseException('VisibleTodos pipe requires an Array as input');
        }
        return this.getVisibleTodos(data, args[0]);
    };
    visibleFilter.prototype.getVisibleTodos = function (todos, filter) {
        switch (filter) {
            case 'SHOW_ACTIVE':
                return todos.filter(function (t) { return !t.complete; });
            case 'SHOW_COMPLETE':
                return todos.filter(function (t) { return t.complete; });
            default:
                return todos;
        }
    };
    visibleFilter = __decorate([
        core_1.Pipe({
            name: 'visibleFilter'
        }), 
        __metadata('design:paramtypes', [])
    ], visibleFilter);
    return visibleFilter;
}());
exports.visibleFilter = visibleFilter;
//# sourceMappingURL=visiblefilter.js.map