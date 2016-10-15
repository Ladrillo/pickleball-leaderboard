let Player = require('../players/player.model');


exports.lockPlayer = (req, res, next) => {

    Player.findById(req.body.id1)
        .exec((err, player) => {

            if (err) res.status(500).send(err);

            else {
                player.stats.locked.id = req.body.id2;
                player.save();

                Player.findById(req.body.id2, (err, player) => {

                    if (err) res.status(500).send(err);
                    player.stats.locked.id = req.body.id1;
                    player.save();

                    res.status(200).json('successful lock');
                });
            }
        });
};


exports.unlockPlayer = (req, res, next) => {

    try {
        Player.findById(req.body.id1)
        .then(player1 => {
            player1.stats.locked.id = '';
            player1.save();
        })
        .then(() => Player.findById(req.body.id2))
        .then(player2 => {
            player2.stats.locked.id = '';
            player2.save();
            res.status(200).json('successful unlock');
        });
    }
    catch (e) {
        res.status(500).json('unlock failed');
    }
};