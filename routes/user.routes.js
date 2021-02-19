const express = require('express')
const router = express.Router()
const User = require('../models/user.model')
const Favour = require('../models/favour.model')
const { checkLoggedIn, checkRole } = require('./../middleware')
const { isAdmin } = require('./../utils')
const path = require('path')
const hbs = require('hbs')
hbs.registerPartials(path.join(__dirname, '../views/partials'))


router.get('/admin-perfil', checkLoggedIn, checkRole('admin'), (req, res) => {
    let totalFavours
    Favour
        .find()
        .select('title description')
        .then(favours => {
            console.log(favours)
            totalFavours = favours
            return User.find()
        })
        .then(users => {
            res.render('auth/admin-profile', { user: req.user, isAdmin: isAdmin(req.user), favours: totalFavours, users: users })
        })
        .catch(err => console.log(err))

})
router.post('/admin-perfil/eliminar/:_id', (req, res) => {
    const _id = req.params._id
    Favour
        .findByIdAndRemove(_id)
        .then(() => res.redirect('/usuario/admin-perfil'))
        .catch(err => console.log(err))
})

 router.post('/admin-perfil/eliminar-usuario/:_id', (req, res) => {
     const _id = req.params._id
     User
         .findByIdAndRemove(_id)
         .then(() => res.redirect('/usuario/admin-perfil'))
         .catch(err => console.log(err))
 })

router.get('/perfil', (req, res) => {
    let userId = req.user._id, favoursR, numFavoursD
    Favour
        .findReceivers(userId)
        .then(favoursReceived => {
            favoursR = favoursReceived
            return Favour.countGivers(userId)
        })
        .then(favoursDoneN => {
            numFavoursD = favoursDoneN
            return Favour.findGivers(userId)
        })
        .then(favoursDone => res.render('./auth/profile', { user: req.user, listFavs: favoursR, numFavoursD: numFavoursD, favoursDone: favoursDone }))
        .catch(error => console.log(error))
})

router.get('/editar/:_id', (req, res) => {
    const user_id = req.params._id
    User
        .findById(user_id)
        .then(user => res.render('user/edit', user))
        .catch(err => console.log(err))
})

router.post('/editar/:_id', (req, res) => {
    const user_id = req.params._id
    const { username, avatar, description } = req.body
    User
        .findByIdAndUpdate(user_id, { username, avatar, description })
        .then(() => res.redirect('/usuario/perfil'))
        .catch(err => console.log(err))
})

router.post('/dar-de-baja/:_id', (req, res) => {
    const user_id = req.params._id
    const { username, avatar, description } = req.body
    User
        .findByIdAndRemove(user_id, { username, avatar, description })
        .then(() => res.redirect('/'))
        .catch(err => console.log(err))
})

module.exports = router
