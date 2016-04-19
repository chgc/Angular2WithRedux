"use strict";
/**
 * Returns whether the provided value is a promise
 *
 * @param {object} value Potential promise
 * @return {Boolean}
 */
function isPromise(value) {
    if (value !== null && typeof value === 'object') {
        return value.promise && typeof value.promise.then === 'function';
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = isPromise;
//# sourceMappingURL=is-promise.js.map