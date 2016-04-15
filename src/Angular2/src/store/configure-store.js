///<reference path="./dev-types.d.ts"/>
"use strict";
var redux_1 = require('redux');
var immutable_1 = require('immutable');
var redux_thunk_1 = require('redux-thunk');
var reducers_1 = require('../reducers');
var persistState = require('redux-localstorage');
function configureStore(initialState) {
    var store = redux_1.compose.apply(void 0, [_getMiddleware()].concat(_getEnhancers()))(redux_1.createStore)(reducers_1.default, initialState);
    return store;
}
function _getMiddleware() {
    var middleware = [
        redux_thunk_1.default
    ];
    if (__DEV__) {
        middleware = middleware.slice();
    }
    return redux_1.applyMiddleware.apply(void 0, middleware);
}
function _getEnhancers() {
    var enhancers = [
        persistState('session', _getStorageConfig())
    ];
    if (__DEV__ && window.devToolsExtension) {
        enhancers = enhancers.concat([window.devToolsExtension()]);
    }
    return enhancers;
}
function _getStorageConfig() {
    return {
        key: 'angular2-redux-seed',
        serialize: function (store) {
            return store && store.session ?
                JSON.stringify(store.session.toJS()) : store;
        },
        deserialize: function (state) { return ({
            session: state ? immutable_1.fromJS(JSON.parse(state)) : immutable_1.fromJS({}),
        }); },
    };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = configureStore;
//# sourceMappingURL=configure-store.js.map