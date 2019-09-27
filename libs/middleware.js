const {
    DatabaseError,
    NotFoundError,
    BadParameterError
} = require('../utils');

function errorHandler(err, req, res, next) {
    if (err instanceof BadParameterError) {
        return res.status(400).json({"message": err.message});
    }
    if (err instanceof NotFoundError) {
        return res.status(404).json({"message": err.message});
    }
    if (err instanceof DatabaseError) {
        return res.status(503).json({"message": err.message});
    }
    res.status(500).json({"message": err.toString()});
}

module.exports = {
    errorHandler
};