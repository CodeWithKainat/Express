const express = require('express')
const router = express.Router()
const {getAllProducts, addProduct} = require('./Controller')

// get all product

router.get('/products',getAllProducts)

// add products
router.post('/addProduct',addProduct)

module.exports = router 