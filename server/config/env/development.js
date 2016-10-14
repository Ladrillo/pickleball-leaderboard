module.exports = {
    siteUrl: "http://localhost:5000",
    db: "mongodb://user:password@ds161495.mlab.com:61495/pickleball-leaderboard",
    sessionSecret: 'developmentSessionSecret',
    google: {
        clientID: '341326874781-c40gvehhb15c3rcovfd57mtpqb9vatpr.apps.googleusercontent.com',
        clientSecret: 'hwQv2aoi0_V-qwicFiOPgBle',
        callbackURL: 'http://localhost:5000/auth/callback',
    }
};