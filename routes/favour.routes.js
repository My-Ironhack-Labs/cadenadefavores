const express = require('express')
const router = express.Router()
const Favour = require('../models/favour.model')
const User = require('../models/user.model')


router.get('/', (req, res) => {

    const user = req.user
    Favour
        .find()
        .then(favours => res.render('./favours/list', { favours, user }))
        .catch(error => next(new Error(error)))
})

router.get('/nuevo', (req, res) => {

    const user_id = req.user._id
    const user = req.user
    User
        .findById(user_id)
        .then(elm => res.render('favours/new', { elm, user }))
        .catch(error => next(new Error(error)))
})

router.post('/nuevo', (req, res) => {

    const { title, description, receive, address, latitude, longitude } = req.body
    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }
    Favour
        .create({ title, description, address, receive, location })
        .then(() => res.redirect('/favores'))
        .catch(error => next(new Error(error)))
})

router.get('/detalles/:_id', (req, res) => {
    const user = req.user, _id = req.params._id, user_id = req.user._id
    Favour
        .findById(_id)
        .then(favour => res.render('favours/details', { favour, id: user_id, user }))
        .catch(error => next(new Error(error)))
})

router.post('/detalles/:_id', (req, res) => {

    const { status, started, give } = req.body, _id = req.params._id

    Favour
        .findByIdAndUpdate(_id, { status, started, give })
        .then(() => res.redirect(`/favores/detalles/${_id}`))
        .catch(error => next(new Error(error)))
})

router.post('/detalles/terminar/:_id', (req, res) => {

    const { status, finished } = req.body, _id = req.params._id

    Favour
        .findByIdAndUpdate(_id, { status, finished })
        .then(() => res.redirect(`/favores/detalles/${_id}`))
        .catch(error => next(new Error(error)))
})

router.get('/editar/:_id', (req, res) => {

    const _id = req.params._id, user = req.user

    Favour
        .findById(_id)
        .then(favour => res.render('favours/edit', { favour, user }))
        .catch(error => next(new Error(error)))
})

router.post('/editar/:_id', (req, res) => {

    const { title, description, address, latitude, longitude } = req.body, _id = req.params._id
    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }

    Favour
        .findByIdAndUpdate(_id, { title, description, address, location })
        .then(() => res.redirect(`/favores/detalles/${_id}`))
        .catch(error => next(new Error(error)))
})

router.post('/eliminar/:_id', (req, res) => {

    const _id = req.params._id

    Favour
        .findByIdAndRemove(_id)
        .then(() => res.redirect('/favores'))
        .catch(error => next(new Error(error)))
})

module.exports = router