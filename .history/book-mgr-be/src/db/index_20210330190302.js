const mongoose = require('mongoose')
const { Schema, model } = mongoose

const userSchema = new Schema({
    nickname: String, 
    password: String,
    age: Number   
})

const userModel = new model('User', userSchema)



mongoose.connect('mongodb://127.0.0.1:27017/book-mgr', {
    useNewUrlParser: true,
    useUnifiedTopology: true
},() => {
    console.log('成功连接数据库!!')
    const user = new userModel({
        nickname: '小红',
        password: '123456',
        age: 16
    })
    user.save()
})