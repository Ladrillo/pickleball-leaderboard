let Player = require('./player.model');


exports.getPlayers = (req, res, next) => {

    Player.find({})
        .exec((err, players) => {

            if (err) res.status(500).send(err);
            else res.status(200).json(players);
        });
};


exports.getOnePlayer = (req, res, next) => {

    Player.findById(req.params.id)
        .exec((err, player) => {

            if (err) res.status(500).send(err);
            else res.status(200).json(player);
        });
};


exports.postPlayer = function (req, res, next) {

    let player = new Player(req.body);
    player.save((err, player) => {

        if (err) res.status(500).send(err);
        else res.status(200).json(player);
    });
};


exports.deletePlayer = (req, res, next) => {

    Player.findById(req.params.id)
        .exec((err, player) => {

            if (err) res.status(500).send(err);
            else {
                player.remove(err => {
                    if (err) res.status(500).send(err);
                    else res.status(204).send('deleted');
                });
            }
        });
};