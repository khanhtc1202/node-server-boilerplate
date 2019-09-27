const express = require('express');
const {
    SystemCtrl,
    GreetingCtrl
} = require('./controllers');

const systemCtrl = new SystemCtrl();
const greetingCtrl = new GreetingCtrl();

// new router object
const router = express.Router();

// Endpoint: http://localhost:3000/ping
router.get('/ping', systemCtrl.ping.bind(systemCtrl));

// Endpoint: http://localhost:3000/greeting?name=khanhtc
router.get('/greeting', greetingCtrl.view.bind(greetingCtrl));

// catch all informal cases
router.get('*', (req, res) => { res.status(404).contentType("text/plain").end('Invalid GET request') });
router.post('*', (req, res) => { res.status(404).contentType("text/plain").end('Invalid POST request') });
router.delete('*', (req, res) => { res.status(404).contentType("text/plain").end('Invalid DELETE request') });

module.exports = router;
