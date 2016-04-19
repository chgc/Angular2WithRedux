"use strict";
var is_promise_1 = require('../utils/is-promise');
function promiseMiddleware(_a) {
    var dispatch = _a.dispatch;
    return function (next) { return function (action) {
        if (!is_promise_1.default(action.payload)) {
            return next(action);
        }
        var types = action.types, payload = action.payload, meta = action.meta;
        var promise = payload.promise, data = payload.data;
        var PENDING = types[0], FULFILLED = types[1], REJECTED = types[2];
        /**
         * Dispatch the pending action
         */
        var pendingAction = { type: PENDING, payload: null, meta: null };
        if (_.isEmpty(data)) {
            pendingAction.payload = data;
        }
        if (_.isEmpty(meta)) {
            pendingAction.meta = meta;
        }
        dispatch(pendingAction);
        /**
         * If successful, dispatch the fulfilled action, otherwise dispatch
         * rejected action.
         */
        return promise.then(function (result) {
            dispatch({
                type: FULFILLED,
                payload: result,
                meta: meta,
            });
        }, function (error) {
            dispatch({
                type: REJECTED,
                payload: error,
                meta: meta,
            });
        });
    }; };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = promiseMiddleware;
//# sourceMappingURL=promise-middleware.js.map