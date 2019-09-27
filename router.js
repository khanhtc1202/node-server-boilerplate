const express = require('express');
const {
    SystemCtrl,
} = require('./controllers');

const systemCtrl = new SystemCtrl();

// new router object
const router = express.Router();

router.get('/ping', systemCtrl.ping.bind(systemCtrl));

router.get('*', (req, res) => { res.status(404).contentType("text/plain").end('Invalid GET request') });
router.post('*', (req, res) => { res.status(404).contentType("text/plain").end('Invalid POST request') });
router.delete('*', (req, res) => { res.status(404).contentType("text/plain").end('Invalid DELETE request') });

module.exports = router;
