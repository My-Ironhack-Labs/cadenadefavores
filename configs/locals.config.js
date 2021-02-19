module.exports = app => {
    app.locals.title = 'Cadena de favores',
    app.locals.apikey= process.env.APIKEY
}
