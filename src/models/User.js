const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    username: {
        type:String,
        req: true
    }
})

module.exports = mongoose.model('User', Schema)