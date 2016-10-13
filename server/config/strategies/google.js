const passport       = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const googleSettings = require('../config').google;


const _callback = (accessToken, refreshToken, profile, done) => {
    // TO-DO: db operations
    console.log(profile);
    return done(null, { id: profile.id, displayName: profile.displayName });
};


module.exports = () => {
    passport.use(
        new GoogleStrategy(
            googleSettings,
            _callback
        )
    );
};