module.exports = app => {
    app.route('/')
        .get((req, res) => {
            if (!req.user) res.redirect('/login');
            else {
                res.render('index', {
                    userStr: JSON.stringify(req.user)
                });
            }
        });
};