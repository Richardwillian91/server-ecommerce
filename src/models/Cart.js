const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    products:[{
        type: mongoose.Schema.Types.ObjectId,
        references: 'Product'
    }
    ],
    username: {
        type:mongoose.Schema.Types.ObjectId,
        references: 'User'
    },
    addres:{
        street:{
            type: String,
            required: true
        },
        city:{
            type: String,
            required: true
        },
        payment:{
            card:{
                number:{
                    type: String,
                },
                cvc: {
                    type: String
                }
            }
        }
    }
})
    module.exports = mongoose.model('Cart',Schema)