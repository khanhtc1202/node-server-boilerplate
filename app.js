const express = require('express');
const router = require('./router');
const { errorHandler } = require('./libs');

// create app
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

app.use(router);
app.use(errorHandler);

app.listen(port, () => console.log(`App listening on port ${port}!`));
