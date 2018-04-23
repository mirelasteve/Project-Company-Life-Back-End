const express = require('express');
const expressValidator = require('express-validator');
const bodyParser = require('body-parser');
const data = require('./data');
const app = express();
var cors = require('cors');
app.use(bodyParser.urlencoded({
    extended: true,
}));
app.use(expressValidator());
app.use(cors());
require('./config/express').init(app);

app.use((req, res, next) => {
    res.locals.user = req.user || null;
    return next();

});

require('./routes').init(app, data);

app.listen(3001);