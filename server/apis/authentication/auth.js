const passport = require('passport');

module.exports = app => {

    app.get(
        '/auth/google',
        passport.authenticate(
            'google',
            { scope: ['profile'] }
        )
    );

    app.get(
        '/auth/callback',
        passport.authenticate(
            'google',
            { failureRedirect: '/login' }
        ),
        (req, res) => res.redirect(`/?user=${req.user}`)
    );

    app.route('/login')
        .get((req, res) => {
            res.render('login');
        });

    app.route('/')
        .get((req, res) => {
            if (!req.user) res.redirect('/login');
            res.render('index', {
                userStr: JSON.stringify(req.user)
            });
        });

    app.route('/auth/checklogin')
        .get((req, res) => {
            if (req.user) {
                res.send(req.user);
            }
            else res.send(false);
        });
};