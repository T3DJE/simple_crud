const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    nama:{
        type: String,
        required: true
    }, 
    email:{
        type: String, 
        required: true
    },
    image:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("user", userSchema)