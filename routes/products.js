const express = require('express')
const router = express.Router()
const {getAlProducts , getAlProductsTesting} = require('../controllers/products')

router.route('/').get(getAlProducts)
router.route('/testing').get(getAlProductsTesting)


module.exports = router