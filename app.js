const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors());


// ROUTES

const userRoute = require('./api/routes/user');
app.use('/user',userRoute);

module.exports = app;