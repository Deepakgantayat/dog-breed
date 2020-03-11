const express = require('express')
const cors = require('cors')

const app = express()

// const port = 3055
const port = process.env.PORT || 3055;
const path = require('path')

const configureDB = require('./config/database')
const router = require('./config/routes')
app.use(express.json())
configureDB()
app.use(cors())

app.use(express.static(path.join(__dirname,"client/build"))) 
app.get("*",(req,res) => { 
    res.sendFile(path.join(__dirname + "/client/build/index.js")) 
})

app.use('/',router)

app.get('/', (req,res) => {
    res.send('Welcome to the page')
})



app.listen(port, () => {
    console.log('listening to the port,',port)
})