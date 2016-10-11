var Ctrl = require('./bootstrap.controller');


module.exports = app => {
    app.route('/api/bootstrap')
        .get(Ctrl.bootstrap);
};