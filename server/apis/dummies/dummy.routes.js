var Ctrl = require('./dummy.controller');

module.exports = app => {

    app.route('/api/dummy')
        .get(Ctrl.dummyPlayer);
};