import {
    Component,
    ViewEncapsulation,
    Inject
} from 'angular2/core';

import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import { CkTodoPage } from './todo-page';
import { CkBookPage } from './book-page';

@Component({
    selector: 'ck-sample-app',
    directives: [
        ROUTER_DIRECTIVES
    ],
    // Global styles imported in the app component.
    encapsulation: ViewEncapsulation.None,
    styles: [require('../styles/index.css')],
    template: `
    <div>
        <h1>
            Hello there. this is asp.net with angular2. build by webpack.
      </h1>
        <h3>Style test</h3>
      <a [routerLink]="['BOOK']"
                class="text-decoration-none">BOOK</a>
      <a [routerLink]="['TODO']"
                class="text-decoration-none">TODO</a>
      <br />
      <main>
           <router-outlet></router-outlet>
      </main>
    </div>
  `
})
@RouteConfig([
    {
        path: '/',
        name: 'TODO',
        component: CkTodoPage
        },
    {
        path: '/book',
        name: 'BOOK',
        component: CkBookPage
    }
])
export class CkDemoApp {
};
