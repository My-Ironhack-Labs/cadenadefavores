const express = require('express')
const router = express.Router()
const User = require('../models/user.model')
const Favour = require('../models/favour.model')
const { checkLoggedIn, checkRole } = require('./../middleware')
const { isAdmin } = require('./../utils')


router.get('/admin-perfil', checkLoggedIn, checkRole('admin'),(req, res) => {
   let totalFavours
   
    Favour
    .find()
    .select('title description')
    .then(favours=>{
        console.log(favours)
        totalFavours=favours
        return User.find()
    })
    .then(users=>{
        res.render('auth/admin-profile', { user: req.user, isAdmin:isAdmin(req.user),favours:totalFavours, user:users })
    })
  
})
router.post('/admin-perfil/eliminar/:_id', (req, res) => {
    const _id = req.params._id
    Favour
        .findByIdAndRemove(_id)
        .then(() => res.redirect('/usuario/admin-perfil'))
        .catch(err => console.log(err))
})

router.get('/admin-perfil', checkLoggedIn, checkRole('admin'),(req, res) => {
    let totalUsers
    
     User
     .find()
     .then(users=>{
         totalUsers=users
         return User.find()
     })
     .then(users=>{
         res.render('auth/admin-profile', { user: req.user, isAdmin:isAdmin(req.user), user:users })
     })
   
 })
 router.post('/admin-perfil/eliminar/:_id', (req, res) => {
     const _id = req.params._id
     User
         .findByIdAndRemove(_id)
         .then(() => res.redirect('/usuario/admin-perfil'))
         .catch(err => console.log(err))
 })

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
