const express = require('express');
const {
    SystemCtrl,
} = require('./controllers');

const systemCtrl = new SystemCtrl();

// new router object
const router = express.Router();

router.get('/ping', systemCtrl.ping.bind(systemCtrl));

module.exports = router;
