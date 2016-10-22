module.exports = app => {
    app.route('/login')
        .get((req, res) => {
            res.render('login');
        });
};