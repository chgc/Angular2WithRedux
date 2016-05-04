import { enableProdMode, provide } from '@angular/core';
import { bootstrap }    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS, BaseRequestOptions, RequestOptions, Headers } from '@angular/http';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { APP_BASE_HREF } from '@angular/common';
import configureStore from './store/configure-store';
import { CkDemoApp } from './containers/main-app';

const provider = require('ng2-redux').provider;
const store = configureStore({});

declare let __PRODUCTION__: any;

if (__PRODUCTION__) {
    enableProdMode();
}

class requestOption extends BaseRequestOptions {
    headers: Headers = new Headers({ 'X-Custom-Header': 'api' });
}



bootstrap(CkDemoApp, [
    provider(store),
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    provide(APP_BASE_HREF, { useValue: '/' }),
    provide(RequestOptions, { useClass: requestOption })
]);

