const path = require('path')

const express = require('express') 

const rootDir = require('../util/path')
const adminData = require('./admin')


const router = express.Router()



// use would be okay to but we only want to hanlde get requests here
// GET will do an exact match for '/'
router.get('/', (req, res, next) => {
    const products = adminData.products
    res.render('shop', { products: products, pageTitle: 'Shop', path: '/', hasProducts: products.length > 0 })
})



module.exports = router
