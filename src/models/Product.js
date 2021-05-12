const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    productname: {
        type:String,
        req: true
    },
    productDescription:{
        type:String
    },
    productPrice:{
        type:Number,
        req: true
    },
    productQuantity:{
        type: Number,
        req: true
    },
    productImage:{
        type: String,
    },
    username: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Products', Schema)