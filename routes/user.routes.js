const express = require('express')
const router = express.Router()
const User = require('../models/user.model')
const Favour = require('../models/favour.model')


router.get('/perfil', (req, res) => {
    let userId = req.user._id
    let favoursR
    console.log(req.user)
    Favour        
        .findReceivers(userId)
        .then(favoursReceived => {
            favoursR = favoursReceived
            return Favour.countGivers(userId)
        })        
        .then(favoursDone => {
            console.log('favores recibidos', favoursR, favoursDone)
            res.render('./auth/profile', { user: req.user, listFavs: favoursR, favoursDone: favoursDone })
        })
        .catch(error => console.log(error))
        // .countGivers(userId)
        // .then(favoursbyUser => {
        //     console.log('favores recibidos', favoursbyUser)
        //     res.render('./auth/profile', { user: req.user, numfavs: favoursbyUser })
        // })
        // .catch(error => console.log(error))
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
