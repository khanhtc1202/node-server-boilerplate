const options = {
    client: 'mysql2',
    connection: process.env.DATABASE_SQL_URL,
    pool: { min: 0, max: 7 }
};

const connect = () => {
    return require('knex')(options);
};

class SqlClient {
    constructor() {
        this.connection = null;
    }

    getConnection() {
        if (!this.connection)
            this.connection = connect();
        return this.connection;
    }
}

module.exports = SqlClient;
