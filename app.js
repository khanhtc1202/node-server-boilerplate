const express = require('express');
const router = require('./router');
const { errorHandler } = require('./libs');

// create app
const app = express();

// Set server for serve view
app.engine('html', require('ejs').renderFile);
app.set('views', './views');
app.set('view engine', 'html');

// Set middle ware app
app.use(express.json());
app.use(router);
app.use(errorHandler);

// Start node server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App listening on port ${port}!`));
