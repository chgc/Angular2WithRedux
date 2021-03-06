﻿///<reference path="./dev-types.d.ts"/>

import {createStore, applyMiddleware, compose} from 'redux';
import {fromJS} from 'immutable';
import ReduxThunk from 'redux-thunk';
import rootReducer from '../reducers';
import promiseMiddleware from '../middleware/promise-middleware';

const persistState = require('redux-localstorage');

function configureStore(initialState) {

    // const store = compose(
    //     _getMiddleware(),
    //     ..._getEnhancers()
    // )(createStore)(rootReducer, initialState);

    const store = compose(
        _getMiddleware()
    )(createStore)(rootReducer, initialState);

    return store;
}

function _getMiddleware() {
    let middleware = [
        promiseMiddleware,
        ReduxThunk
    ];

    if (__DEV__) {
        middleware = [...middleware];
    }

    return applyMiddleware(...middleware);
}

function _getEnhancers() {
    let enhancers = [
        persistState('session', _getStorageConfig())
    ];

    if (__DEV__ && window.devToolsExtension) {
        enhancers = [...enhancers, window.devToolsExtension()];
    }

    return enhancers;
}

function _getStorageConfig() {
    return {
        key: 'angular2-redux-seed',
        serialize: (store) => {
            return store && store.session ?
                JSON.stringify(store.session.toJS()) : store;
        },
        deserialize: (state) => ({
            session: state ? fromJS(JSON.parse(state)) : fromJS({}),
        }),
    };
}

export default configureStore;
