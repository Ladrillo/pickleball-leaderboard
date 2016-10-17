let Player = require('../players/player.model');


exports.lockPlayer = (req, res, next) => {

    Player.findById(req.body.id1)
        .exec((err, player1) => {

            if (err) {
                res.status(500).json(err);
            }

            else if (!req.user) {
                res.status(200).json({ warning: 'authenticate' });
            }

            else {
                Player.findById(req.body.id2, (err, player2) => {

                    if (err) {
                        res.status(500).json(err);
                    }

                    else if (player1.stats.locked.id || player2.stats.locked.id) {
                        res.status(200).json({ warning: 'refresh' });
                    }

                    else {
                        player1.stats.locked.id = req.body.id2;
                        player1.save();

                        player2.stats.locked.id = req.body.id1;
                        player2.save();

                        res.status(200).json('successful lock');
                    }
                });
            }
        });
};


exports.unlockPlayer = (req, res, next) => {

    Player.findById(req.body.id1)
        .exec((err, player1) => {

            if (err) {
                res.status(500).json(err);
            }

            else if (!req.user) {
                res.status(200).json({ warning: 'authenticate' });
            }

            else {
                Player.findById(req.body.id2, (err, player2) => {

                    if (err) {
                        res.status(500).json(err);
                    }

                    else if (!player1.stats.locked.id || !player2.stats.locked.id) {
                        res.status(200).json({ warning: 'refresh' });
                    }

                    else {
                        player1.stats.locked.id = '';
                        if (req.body.result === 'won') {
                            player1.stats.score += 1;
                        }
                        player1.save();

                        player2.stats.locked.id = '';
                        if (req.body.result === 'lost') {
                            player2.stats.score += 1;
                        }
                        player2.save();

                        res.status(200).json('successful lock');
                    }
                });
            }
        });
};


// unprotected
exports.unlockAll = (req, res, next) => {

    Player.find({})
        .then(players => {
            players.forEach(pl => {
                pl.stats.locked = '';
                pl.save();
            });
        })
        .then(() => res.status(200).json('successful unlock ALL'));
};