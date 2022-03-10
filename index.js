require('dotenv').config()
const express = require('express')
const app = express()

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.send('Howdy world!')
})


//Leave at the bottom
app.get('*', (req, res) => {
    res.send('<h1>404 nothings here<h1>')
})

app.listen(process.env.PORT)