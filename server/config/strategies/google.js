const passport       = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const googleSettings = require('../config').google;
const Player         = require('../../apis/players/player.model');


const _callback = (accessToken, refreshToken, profile, done) => {

    let query = { 'google.id': profile.id };

    Player.findOne(query, (error, player) => {
        if (player) {
            console.log('player found in database');
            return done(null, player);
        }
        else {
            console.log('player NOT found in database');

            var player = new Player;

            player.displayName  = profile.displayName;
            // player.imageURL     = profile.image.url;
            player.google.id    = profile.id;
            player.google.token = accessToken;

            console.log('about to save player in database: ', player);

            player.save();
            return done(null, player); // this goes to all req.user
        }
    });
};


module.exports = () => {
    passport.use(
        new GoogleStrategy(
            googleSettings,
            _callback
        )
    );
};