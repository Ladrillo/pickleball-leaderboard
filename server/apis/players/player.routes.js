var Ctrl = require('./player.controller');

module.exports = app => {

    app.route('/api/players')
        .get(Ctrl.getPlayers)
        .post(Ctrl.postPlayer);

    app.route('/api/players/:id')
        .get(Ctrl.getOnePlayer)
        .delete(Ctrl.deletePlayer);
};