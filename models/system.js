const BaseSqlModel = require('./sql_model');

class System extends BaseSqlModel {
    constructor() {
        super(''); // tend to pass table_name here to enable model map with table in your database
    }

    pingDatabase() {
        this.ping()
    }
}

module.exports = System;
