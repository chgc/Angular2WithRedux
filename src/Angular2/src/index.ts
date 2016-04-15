import { enableProdMode, provide } from 'angular2/core';
import { bootstrap} from 'angular2/bootstrap';
import { ROUTER_PROVIDERS, APP_BASE_HREF } from 'angular2/router';
import { CkDemoApp } from './containers/main-app';

declare let __PRODUCTION__: any;

if (__PRODUCTION__) {
    enableProdMode();
}

bootstrap(CkDemoApp, [
    ROUTER_PROVIDERS,
    provide(APP_BASE_HREF, { useValue: '/' })
]);

