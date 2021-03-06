var Ctrl = require('./lock.controller');

module.exports = app => {

    app.route('/api/lock')
        .post(Ctrl.lockPlayer);

    app.route('/api/unlock')
        .post(Ctrl.unlockPlayer);

    // unprotected
    app.route('/api/unlock_all')
        .get(Ctrl.unlockAll);
};