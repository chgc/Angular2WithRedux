import { enableProdMode, provide } from 'angular2/core';
import { bootstrap} from 'angular2/bootstrap';
import { ROUTER_PROVIDERS, APP_BASE_HREF } from 'angular2/router';
import configureStore from './store/configure-store';
import { CkDemoApp } from './containers/main-app';

const provider = require('ng2-redux').provider;
const store = configureStore({});

declare let __PRODUCTION__: any;

if (__PRODUCTION__) {
    enableProdMode();
}

bootstrap(CkDemoApp, [
    provider(store),
    ROUTER_PROVIDERS,
    provide(APP_BASE_HREF, { useValue: '/' })
]);

