import {isBlank, isPresent, isArray} from '@angular/core/src/facade/lang';
import {BaseException} from '@angular/core/src/facade/exceptions';
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'visibleFilter'
})
export class visibleFilter {
    transform(todos, args) {        
        let data = [];                
        if(todos){
            data = todos.toArray();
        }
        if (isPresent(data) && !isArray(data)) {
            throw new BaseException('VisibleTodos pipe requires an Array as input');
        }
        return this.getVisibleTodos(data, args);
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

