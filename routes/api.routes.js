const { response } = require('express')
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Favour = require('../models/favour.model')

// Endpoints
router.get('/favores', (req, res) => {
  Favour
    .find()
    .then(response => res.json(response))
    .catch(err => console.log(err))
})

router.get('/favores/detalles/:_id', (req, res) => {
  Favour
    .find()
    .then(response => res.json(response))
    .catch(err => console.log(err))
})
module.exports = router