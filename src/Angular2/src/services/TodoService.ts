import {Injectable,Inject } from 'angular2/core';

import {Http, Response} from 'angular2/http';
import 'rxjs/Rx';
import * as TodoAction from '../actions/ToDo';


@Injectable()
export class TodoService {
    constructor(
        @Inject('ngRedux') private ngRedux,
        private http: Http) { 
        
    }

    loadTodo() {
        return this.http.get('api/Values')
            .map((res) => { return res.json() }).subscribe((data) => {
                this.ngRedux.dispatch(TodoAction.init(data));
            })
    }
}