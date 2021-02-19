const express = require('express')
const router = express.Router()
const Favour = require('../models/favour.model')

// Endpoints

router.get('/favores/detalles/:_id', (req, res) => {
  let favourId = req.params._id
  console.log(favourId)
  Favour
    .findById(favourId)
    .then(response => res.json(response))
    .catch(err => console.log(err))
})

router.get('/favores', (req, res) => {
  Favour
    .find()
    .then(response => res.json(response))
    .catch(err => console.log(err))
})


module.exports = router
