const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('./config/env.config.js');
const Router = require('./Router.js');
const router = new Router();
const Database = require('./Database.js');
global.__db__ = new Database();
global.__db__.connect();



app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Expose-Headers', 'Content-Length');
    res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
    if (req.method === 'OPTIONS') {
        return res.send(200);
    } else {
        return next();
    }
});

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })


// POST 
app.post('*', jsonParser, function (req, res) {
    router.route(app, 'POST', req, res);
})

// GET 
app.get('*', jsonParser, function (req, res) {
    router.route(app, 'GET', req, res);
})

// PUT 
app.put('*', jsonParser, function (req, res) {
    router.route(app, 'PUT', req, res);
})

// DELETE 
app.delete('*', jsonParser, function (req, res) {
    router.route(app, 'DELETE', req, res);
})

app.listen(config.port, function () {
    console.log('app listening at port %s', config.port);
});


