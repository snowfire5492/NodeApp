const path = require('path')

// refers to mainModule we started the app in
// gives us path to file that makes our app run
module.exports = path.dirname(process.mainModule.filename)