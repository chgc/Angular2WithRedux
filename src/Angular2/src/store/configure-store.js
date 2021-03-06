///<reference path="./dev-types.d.ts"/>
"use strict";
var redux_1 = require('redux');
var immutable_1 = require('immutable');
var redux_thunk_1 = require('redux-thunk');
var reducers_1 = require('../reducers');
var promise_middleware_1 = require('../middleware/promise-middleware');
var persistState = require('redux-localstorage');
function configureStore(initialState) {
    // const store = compose(
    //     _getMiddleware(),
    //     ..._getEnhancers()
    // )(createStore)(rootReducer, initialState);
    var store = redux_1.compose(_getMiddleware())(redux_1.createStore)(reducers_1.default, initialState);
    return store;
}
function _getMiddleware() {
    var middleware = [
        promise_middleware_1.default,
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