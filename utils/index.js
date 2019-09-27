const errors = require('./errors');

module.exports = {
    DatabaseError: errors.DatabaseError,
    NotFoundError: errors.NotFoundError,
    BadParameterError: errors.BadParameterError,
};