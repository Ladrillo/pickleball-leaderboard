const config         = require('./config');
const environment    = 'development';

// middleware
const express        = require('express');
const cors           = require('cors');
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');
const webpack        = require('webpack');

// middleware that is required later, depending on environment
let webpackConfig, webpackMiddleware, morgan, compress;


module.exports = function () {
    const app = express();

    // here we set our templating engine
    // route is relative to server.js
    app.set('views', ['./core/client']);
    app.set('view engine', 'ejs');

    // this middleware will run no matter the environment
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(methodOverride());

    // environment dependant middleware
    if (environment === 'development') {
        webpackMiddleware = require('webpack-dev-middleware');
        webpackConfig = require('../../webpack.config');
        app.use(webpackMiddleware(webpack(webpackConfig), {
            inline: true,
            publicPath: '/bundle/',
            stats: { colors: true },
            noInfo: true
        }));
        morgan = require('morgan');
        app.use(morgan('dev'));
    }
    else if ((environment === 'production')) {
        webpackConfig = require('../../webpack.config');
    }

    // routes
    require('../apis/evaluate/bootstrap.routes')(app);

    // static assets
    app.use(express.static('./client'));

    return app;
};