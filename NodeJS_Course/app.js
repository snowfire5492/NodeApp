const path = require('path')

const express = require('express')
const bodyParser = require('body-parser')
const expressHbs = require('express-handlebars')

const app = express() 



app.engine('handlebars', expressHbs())

app.set('view engine', 'handlebars')
app.set('views', 'views') // unnecessary as views is the default for this

const adminData = require('./routes/admin')   // valid middleware function 
const shopRoutes = require('./routes/shop')


app.use(bodyParser.urlencoded({extended: false}))   

app.use(express.static(path.join(__dirname, 'public')))     // used so we can access css files in public path

app.use('/admin', adminData.routes)    // so use the middle ware. (OREDER MATTERS)
app.use(shopRoutes)     // order matters here. shop should be second. It would work other way but only because we have get inside shop
                        // if we had use then it would not work if we switched the order here.  


// to make a 404 request take advantage of middleware 
// if we dont hit the page thru our middleware we end 
// up down at the bottom here

app.use((req, res, next) => {
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
    res.render('404', {pageTitle: 'Page Not Found'})
})



app.listen(3000)