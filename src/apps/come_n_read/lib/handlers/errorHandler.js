const SequelizeValidationError = require('sequelize').ValidationError;

const ERROR_CODES = {
    INTERNAL_SERVER_ERROR: 1,
    NOT_FOUND_ERROR: 2,
    VALIDATION_ERROR: 3,
}

class ErrorHandler {
    constructor(error) {
        this.error = error;
        this.status = 500;
        this.errorType = 'Internal Server Error';
        this.message = 'We apologise. An error occured. We are working to fix this';
        this.errorCode = 1;
        this.errorResponse = {};

        this.setUp();
    }

    /**
     * Generates the error report and response.
     */
    setUp() {
        this.generateErrorReport();
        this.generateErrorResponse();
    }

    /**
     * Adds custom information for an error.
     */
    generateErrorReport() {
        if (this.error instanceof SequelizeValidationError) {
            this.status = 400;
            this.message = this.formatValidationErrors();
            this.errorType = 'Validation Error';
            this.errorCode = ERROR_CODES.VALIDATION_ERROR;
        }
    }

    /**
     * Formats validation error messages.
     */
    formatValidationErrors() {
        let messages = {};
        this.error.errors.forEach((error) => {
            messages[error.path] = error.message.split(' ').slice(1).join(' ');
        });
        return messages;
    }

    /**
     * Generates an error response to be sent back to the client
     */
    generateErrorResponse() {
        console.log(this.error);
        return this.errorResponse = {
            error: true,
            message: this.message,
            type: this.errorType,
            code: this.errorCode,
        }
    }
}

module.exports = ErrorHandler;
