const path = require('path')

const express = require('express') 

const rootDir = require('../util/path')


const router = express.Router()



// use would be okay to but we only want to hanlde get requests here
// GET will do an exact match for '/'
router.get('/', (req, res, next) => {
    // path.join will build a path that works on both linux and windows os
    res.sendFile(path.join(rootDir, 'views', 'shop.html'))    // sending html file 

})



module.exports = router
