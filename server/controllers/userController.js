const ApiError = require('../error/ApiError');
const {Users} = require('../models/models')


class UserController {
    async getUsers(req, res, next) {
        try {
            const usersInfo = await Users.findAll()
            return res.render('pages/index', {usersInfo});

        } catch (e) {
            next(ApiError).badRequest(e.message)
        }
    }
}


module.exports = new UserController()

