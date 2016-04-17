import {isBlank, isPresent, isArray} from 'angular2/src/facade/lang';
import {BaseException} from 'angular2/src/facade/exceptions';
import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({
    name: 'visibleFilter'
})
export class visibleFilter {
    transform(todos, args) {
        let data = [];
        if (isBlank(args) || args.length == 0) {
            throw new BaseException('VisibleTodos pipe requires one argument');
        }
        if(todos){
            data = todos.toArray();
        }
        if (isPresent(data) && !isArray(data)) {
            throw new BaseException('VisibleTodos pipe requires an Array as input');
        }
        return this.getVisibleTodos(data, args[0]);
    }

    getVisibleTodos(todos, filter) {
        switch (filter) {
            case 'SHOW_ACTIVE':
                return todos.filter(t => !t.complete);
            case 'SHOW_COMPLETE':
                return todos.filter(t => t.complete);
            default:
                return todos;
        }
    }
}

