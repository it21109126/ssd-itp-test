const express = require('express')

const {
    insert} = require('../controllers/incomeHistoryControllers')

const router = express.Router()



// GET From Buy now button
router.post('/insert',insert)


module.exports = router