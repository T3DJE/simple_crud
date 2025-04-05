const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const user = require('./route/user')

dotenv.config()
const app = express()

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('-> Database Connected'))
    .catch((error) => console.log(error))

app.use(express.json())
app.use(cors())
app.use(user)
app.use('/simple_crud', user)
app.listen(5000, () =>{
    console.log('-> Server Running!')
})