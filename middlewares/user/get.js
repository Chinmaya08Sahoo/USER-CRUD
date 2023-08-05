const commonService = require("../../utils/db/mongodb/services/common.service");
const { Types: { ObjectId } } = require('mongoose');
const { UserNotFoundError } = require("../../utils/handler/error");

module.exports.run = async (req, res, next) => {
    try {
        const userId = req.params.userId
        const user = await commonService.getById('user', userId);
        if (user) {
            res.locals.message = "successfully fetched user details..."
            res.locals.rootData = user
            next()
        } else {
            throw new UserNotFoundError()
        }
    } catch (error) {
        next(error)
    }
}