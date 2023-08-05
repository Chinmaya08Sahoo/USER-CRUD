const commonService = require("../../utils/db/mongodb/services/common.service");

module.exports.run = async (req, res, next) => {
    try {
        const newUser = req.body
        const result = await commonService.saveData('user', newUser);
        res.locals.message = 'Successfully Created new user...'
        res.locals.rootData = result
        next()
    } catch (error) {
        next(error)
    }
}