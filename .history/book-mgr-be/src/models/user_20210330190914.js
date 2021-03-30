const mongoose = require('mongoose')

const { Schema, model } = mongoose

const UserSchema = new Schema({
    account: String,
    password: String,
    meta: {
        createdAt: {
            type: Number,
            default: (new Date()).getTime()
        },
        updatedAt: {
            type: Number,
            default: (new Date()).getTime()
        }
    }
})


module.exports = model('User', UserSchema)