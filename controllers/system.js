const {
    System,
} = require('../models');

class SystemCtrl {
    constructor() {
        this.systemModel = new System();
    }

    async ping(req, res, next) {
        try {
            const sql_connected = await this.systemModel.ping();
            res.status(200).json({
                "sqlStatus": sql_connected ? "ok" : "ng",
            })
        } catch (e) {
            next(e);
        }
    }
}

module.exports = SystemCtrl;
