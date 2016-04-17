import {Injectable} from 'angular2/core';

import {Http, Response} from 'angular2/http';
import 'rxjs/Rx';


@Injectable()
export class TodoService {
    constructor(private http: Http) { }

    getTodo() {
        return this.http.get('api/Values')
            .map((res) => { return res.json() });
    }
}