let Player = require('../players/player.model');


// unprotected
exports.dummyPlayer = (req, res, next) => {

    const player = new Player;

    player.displayName  = randomName();
    player.google.id    = randomNum(1000000);
    player.stats        = {
        locked: ''
    };
    player.stats.score  = randomNum(12);
    player.stats.locked = '';

    player.save();
    res.status(200).json(player);
};


const randomNum = max => Math.floor(Math.random() * max);

const randomName = () => {
    const first = ['Alex', 'Stephen', 'Darien', 'Rosy', 'Landon', 'Joe'];
    const last  = ['Akhtyrskiy', 'Felt', 'Hess', 'Grimaud', 'Young', 'Larsen'];
    return `${first[randomNum(first.length)]} ${last[randomNum(last.length)]}`;
};