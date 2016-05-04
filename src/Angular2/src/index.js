"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var router_deprecated_1 = require('@angular/router-deprecated');
var common_1 = require('@angular/common');
var configure_store_1 = require('./store/configure-store');
var main_app_1 = require('./containers/main-app');
var provider = require('ng2-redux').provider;
var store = configure_store_1.default({});
if (__PRODUCTION__) {
    core_1.enableProdMode();
}
var requestOption = (function (_super) {
    __extends(requestOption, _super);
    function requestOption() {
        _super.apply(this, arguments);
        this.headers = new http_1.Headers({ 'X-Custom-Header': 'api' });
    }
    return requestOption;
}(http_1.BaseRequestOptions));
platform_browser_dynamic_1.bootstrap(main_app_1.CkDemoApp, [
    provider(store),
    router_deprecated_1.ROUTER_PROVIDERS,
    http_1.HTTP_PROVIDERS,
    core_1.provide(common_1.APP_BASE_HREF, { useValue: '/' }),
    core_1.provide(http_1.RequestOptions, { useClass: requestOption })
]);
//# sourceMappingURL=index.js.map