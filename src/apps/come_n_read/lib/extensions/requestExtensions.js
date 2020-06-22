const _ = require('lodash/core');

module.exports = (app) => {
    /**
     * Extends the request object with method to pick specific attributes
     * from a request.
     */
    app.request.pick = function(...args) {
        return _.pick(this.body, args);
    }
}
