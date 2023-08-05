const commonService = require("../../utils/db/mongodb/services/common.service");

module.exports.run = async (req, res, next) => {
    try {
        const allRecords = await commonService.getAll('user', {});
        res.locals.message = "successfully fetched all user"
        res.locals.rootData = allRecords
        next()
    } catch (error) {
        next(error)
    }
}