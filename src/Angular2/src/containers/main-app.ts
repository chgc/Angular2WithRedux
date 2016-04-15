import {
    Component,
    ViewEncapsulation,
    Inject
} from 'angular2/core';

import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import {CkTodoApp} from './todo-page';

@Component({
    selector: 'rio-sample-app',
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
        component: CkTodoApp,
        useAsDefault: true
    }
])
export class CkDemoApp {
};
