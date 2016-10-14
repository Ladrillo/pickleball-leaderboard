process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 5000;


const express  = require('./server/config/express');
const mongoose = require('./server/config/mongoose');

const app = express();
const db  = mongoose();

app.listen(port, function () {
    console.log('listening on ' + port);
});