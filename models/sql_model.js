const { SqlClient } = require('../infras');

class BaseSqlModel {
    constructor(tableName) {
        this.tableName = tableName;
    }

    getSession() {
        return SqlClient.getConnection();
    }

    ping() {
        return new Promise((resolve, reject) => {
            this.getSession().select(1)
                .then(d => resolve(d))
                .catch(e => reject(e));
        })
    }

    get(id) {
        return new Promise((resolve, reject) => {
            this.getSession().from(this.tableName)
                .select('*').where({id}).first()
                .then(res => resolve(res))
                .catch( e => reject(e));
        })
    }

    update(data) {
        return new Promise( (resolve, reject) => {
            this.getSession().from(this.tableName)
                .update(data).where({id: data.id})
                .then( res => resolve(res))
                .catch( err => reject(err));
        })
    }

    count() {
        return new Promise( (resolve, reject) => {
            this.getSession().from(this.tableName).count('id')
                .then( res => resolve(res[0]['count(`id`)']))
                .catch( err => reject(err));
        })
    }
}

module.exports = BaseSqlModel;
