var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development',
    port = 5000;

var config = {
    development: {
        root: rootPath,
        app: {
            name: 'mock-server'
        },
        port: port
    },

    production: {
        root: rootPath,
        app: {
            name: 'mock-server'
        },
        port: port
    }
};

module.exports = config[env];
