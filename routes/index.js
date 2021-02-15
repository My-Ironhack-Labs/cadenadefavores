module.exports = app => {

    // Base URLS
    app.use('/', require('./base.routes.js'))
    app.use('/inicio', require('./auth.routes.js'))
    app.use('/usuario', require('./user.routes.js'))
    app.use('/favores', require('./favour.routes.js'))

}