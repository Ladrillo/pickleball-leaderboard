var Ctrl = require('./dummy.controller');

module.exports = app => {

    // unprotected
    app.route('/api/dummy')
        .get(Ctrl.dummyPlayer);
};