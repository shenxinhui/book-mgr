const User = require('../models/user')

class UserController {
    async create(ctx) {
        const { account, password, meta } = ctx.request.body
        const user = await new User({
            account, password, meta
        }).create()
    }

    async delete(ctx){

    }

    async update(ctx){

    }

    async find(ctx){
        
        const user = await User.find()
        ctx.body = user
    }

    async findOne(ctx){

    }
}

module.exports = new UserController()