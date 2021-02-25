"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = exports.getError = void 0;
const getError = (req, res, next) => {
    // * : First way
    //   const error = new Error('Not found')
    //   const errorResponse: ResponseError = {
    //     ...error,
    //     status: 404,
    //   }
    // * : Second way
    const errorResponse = new Error('Not found !');
    errorResponse.status = 404;
    next(errorResponse);
    return;
};
exports.getError = getError;
const handleError = (err, req, res, next) => {
    return res.status(err.status || 500).json({
        error: {
            code: err.status || 500,
            message: err.message || 'Internal server error ',
            environment: process.env.NODE_ENV || 'Development',
        },
    });
};
exports.handleError = handleError;
