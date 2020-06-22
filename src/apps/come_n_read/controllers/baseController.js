const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const models = require('./../models');
const ErrorHandler = require('../lib/handlers/errorHandler');
const config = require('../config/app');

class BaseController {
    constructor() {
        this.models = models;
        this.bcrypt = bcrypt;
        this.config = config;
    }

    /**
     * Abstracts error handling.
     * @param {ResponseObject} res - the response object
     * @param {Error} error - error object
     * @return {Response} - Returns a handled error response.
     */
    handleError(res, error) {
        const errorHandler = new ErrorHandler(error);
        
        return res.status(errorHandler.status).send(errorHandler.errorResponse);
    }
}

module.exports = BaseController;
