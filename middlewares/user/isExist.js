const commonService = require("../../utils/db/mongodb/services/common.service");
const { Types: { ObjectId } } = require('mongoose');
const { UserNotFoundError } = require("../../utils/handler/error");

module.exports.run = async (req, res, next) => {
    try {
        const userId = req.body.id
        const user = await commonService.getById('user', new ObjectId(userId));
        if(user)
            next()
        else
            throw new UserNotFoundError()
    } catch (error) {
        next(error)
    }
}