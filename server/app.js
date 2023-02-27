// require npm
const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()

// let our server know that the dbService is require, and where to find it
const dbService = require('./dbService')

app.use(cors())
app.use(express.json())


// Now for CRUD...

// Create
app.post('/insert', (req, res) => {

})


// Read
app.get('/getNames', (req, res) => {
    console.log('We got it!')
})


// Update



// Delete



// Set up the server port
app.listen(process.env.PORT, () => {console.log('Listening on port ' + process.env.PORT)})