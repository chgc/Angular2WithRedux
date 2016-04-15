"use strict";
var core_1 = require('angular2/core');
var bootstrap_1 = require('angular2/bootstrap');
var router_1 = require('angular2/router');
var main_app_1 = require('./containers/main-app');
if (__PRODUCTION__) {
    core_1.enableProdMode();
}
bootstrap_1.bootstrap(main_app_1.CkDemoApp, [
    router_1.ROUTER_PROVIDERS,
    core_1.provide(router_1.APP_BASE_HREF, { useValue: '/' })
]);
//# sourceMappingURL=index.js.map