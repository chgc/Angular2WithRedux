import {Injectable, Inject } from 'angular2/core';

import {Http, Response} from 'angular2/http';
import 'rxjs/Rx';
import {TODO_INIT} from '../constants';
import * as TodoAction from '../actions/ToDo';


@Injectable()
export class TodoService {
    constructor(
        @Inject('ngRedux') private store,
        private http: Http) {

    }
    loadTodo() {
        return this.http.get('api/Values')
            .map((res) => { return res.json() })
            .map((d) => ({
                type: TODO_INIT,
                payload: d
            }))
            .subscribe((action) => {
                this.store.dispatch(action);
            })
    }

}