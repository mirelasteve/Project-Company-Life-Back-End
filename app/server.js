const passport = require('passport');
const express = require('express');
const expressValidator = require('express-validator');
const bodyParser = require('body-parser');
const data = require('./data');
const app = express();
const cors = require('cors');
const strategy = require('./config/auth');


app.use(bodyParser.json({ limit: '50mb' }));
app.use(expressValidator());
app.use(cors());

passport.use('jwt', strategy.init(app, data));

require('./config/express').init(app);

app.use((req, res, next) => {
    res.locals.user = req.user || null;
    return next();
});

require('./routes').init(app, data);

app.listen(3001);
