const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()

// const port = 3055
const port = process.env.PORT || 3055;


const configureDB = require('./config/database')
const router = require('./config/routes')
app.use(express.json())
configureDB()
app.use(cors())

app.use('/',router)

app.get('/', (req,res) => {
    res.send('Welcome to the page')
})

app.use(express.static(path.join(__dirname,"client/build"))) 
app.get("*",(req,res) => { 
    res.sendFile(path.join(__dirname + "/client/build/index.html")) 
}) 


app.listen(port, () => {
    console.log('listening to the port,',port)
})