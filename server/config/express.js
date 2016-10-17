const config         = require('./config');
const environment    = process.env.NODE_ENV || 'development';

// middleware
const express        = require('express');
const cors           = require('cors');
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');
const webpack        = require('webpack');
const session        = require('express-session');

// middleware that is required later, depending on environment
let webpackConfig, webpackMiddleware, morgan, compress;


module.exports = () => {
    const app = express();

    // here we set our templating engine
    // route is relative to server.js
    app.set('views', ['./client']);
    app.set('view engine', 'ejs');

    // this middleware will run no matter the environment
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(methodOverride());
    
    // session
    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: config.sessionSecret
    }));

    // environment dependant middleware
    if (environment === 'development') {
        webpackMiddleware = require('webpack-dev-middleware');
        webpackConfig = require('../../webpack.config');
        app.use(webpackMiddleware(webpack(webpackConfig), {
            inline: true,
            publicPath: '/bundle/',
            stats: { colors: true },
        }));
        morgan = require('morgan');
        app.use(morgan('dev'));
    }
    else if ((environment === 'production')) {
        webpackConfig = require('../../webpack.config');
    }

    // auth
    require('./passport')(app);

    // routes
    require('../apis/authentication/auth')(app);
    require('../apis/players/player.routes')(app);
    require('../apis/lock/lock.routes')(app);
    require('../apis/dummies/dummy.routes')(app);

    // static assets
    app.use(express.static('./client'));

    return app;
};