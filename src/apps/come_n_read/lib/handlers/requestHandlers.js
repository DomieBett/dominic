const ErrorHandler = require('./errorHandler');

module.exports = {
    /**
     * Handles not found errors caused by invalid urls.
     */
    notFoundHandler: (req, res, next) => {
        return res.status(404).send({
            message: `Route ${req.url} was not found on the server.`,
        });
    },

    serverErrorHandler: (err, req, res, next) => {
        const errorHandler = new ErrorHandler(err);

        return res.status(errorHandler.status).send(errorHandler.errorResponse);
    }
}
