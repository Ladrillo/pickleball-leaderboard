module.exports = app => {
    app.route('/about')
        .get((req, res) => {
            if (!req.user) res.redirect('/login');
            else {
                res.render('about', {
                    userStr: JSON.stringify(req.user)
                });
            }
        });
};