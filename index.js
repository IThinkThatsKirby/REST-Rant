require('dotenv').config()
const express = require('express')
// const res = require('express/lib/response')
const app = express()


// route that defines the view engine (JSX)
app.set('view engine','jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/places', require('./controllers/places'))


// it already knows to look for the folder called views when using render
app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.render('error404')
})

app.listen(process.env.PORT)