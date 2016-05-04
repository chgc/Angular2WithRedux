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
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var todo_page_1 = require('./todo-page');
var book_page_1 = require('./book-page');
var CkDemoApp = (function () {
    function CkDemoApp() {
    }
    CkDemoApp = __decorate([
        core_1.Component({
            selector: 'ck-sample-app',
            directives: [
                router_deprecated_1.ROUTER_DIRECTIVES
            ],
            // Global styles imported in the app component.
            encapsulation: core_1.ViewEncapsulation.None,
            styles: [require('../styles/index.css')],
            template: "\n    <div>\n        <h1>\n            Hello there. this is asp.net with angular2. build by webpack.\n      </h1>\n        <h3>Style test</h3>\n      <a [routerLink]=\"['BOOK']\"\n                class=\"text-decoration-none\">BOOK</a>\n      <a [routerLink]=\"['TODO']\"\n                class=\"text-decoration-none\">TODO</a>\n      <br />\n      <main>\n           <router-outlet></router-outlet>\n      </main>\n    </div>\n  "
        }),
        router_deprecated_1.RouteConfig([
            {
                path: '/',
                name: 'TODO',
                component: todo_page_1.CkTodoPage
            },
            {
                path: '/book',
                name: 'BOOK',
                component: book_page_1.CkBookPage
            }
        ]), 
        __metadata('design:paramtypes', [])
    ], CkDemoApp);
    return CkDemoApp;
}());
exports.CkDemoApp = CkDemoApp;
;
//# sourceMappingURL=main-app.js.map