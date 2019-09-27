const {
    BaseSql,
} = require('../models');

class SystemCtrl {
    constructor() {
        this.baseSql = new BaseSql();
    }

    async ping(req, res, next) {
        try {
            const sql_connected = await this.baseSql.ping();
            res.status(200).json({
                "sqlStatus": sql_connected ? "ok" : "ng",
            })
        } catch (e) {
            next(e);
        }
    }
}

module.exports = SystemCtrl;
