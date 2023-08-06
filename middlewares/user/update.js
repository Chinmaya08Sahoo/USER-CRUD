const commonService = require("../../utils/db/mongodb/services/common.service");

module.exports.run = async (req, res, next) => {
    try {
        const updateUser = req.body
        const userId = updateUser.id;
        delete updateUser.id
        const result = await commonService.updateDataById('user', userId, updateUser);
        res.locals.message = "successfully updated the user..."
        res.locals.rootData = result
        next()
    } catch (error) {
        next(error)
    }
}