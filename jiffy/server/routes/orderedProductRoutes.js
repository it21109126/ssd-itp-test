const express = require('express')

const {
    Create,
    } = require('../controllers/orderedProductController')

const router = express.Router()



// GET From Buy now button
router.post('/create', Create)

module.exports = router