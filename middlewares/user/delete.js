const commonService = require("../../utils/db/mongodb/services/common.service");
const { Types: { ObjectId } } = require('mongoose')

module.exports.run = async (req, res, next) => {
    try {
        const userId = req.body.id
        const result = await commonService.deleteById('user', {_id: new ObjectId(userId)})
        
        if(result.deletedCount > 0) {
            res.locals.message = 'Successfully deleted'
            res.locals.rootData = 'Successfully deleted'
        } else {
            throw new Error('failed')
        }
        next()
    } catch (error) {
        next(error)
    }
}