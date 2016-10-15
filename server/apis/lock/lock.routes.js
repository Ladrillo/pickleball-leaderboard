var Ctrl = require('./lock.controller');

module.exports = app => {

    app.route('/api/players/lock')
        .post(Ctrl.lockPlayer);

    app.route('/api/players/unlock')
        .post(Ctrl.unlockPlayer);

};