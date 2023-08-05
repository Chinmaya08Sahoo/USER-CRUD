const fs = require('fs')
const csv = require('csvtojson')
const commonService = require("../../utils/db/mongodb/services/common.service");
const { chunks } = require('../../utils/helper/chunks');
const xlreader = require('xlsx');
const { insertData } = require('../../utils/helper/insertData');

module.exports.run = async (req, res, next) => {
    try {
        const fileExt = req.file.originalname.split(".")[1]
        if (fileExt == 'csv') {
            await csv()
                .fromFile(req.file.path)
                .then(async (response) => {
                    const chunksdata = chunks(response);
                    await insertData(chunksdata)
                })
        } else {
            const file = xlreader.readFile(req.file.path);
            let data = []
            const sheets = file.SheetNames

            for (let i = 0; i < sheets.length; i++) {
                const temp = xlreader.utils.sheet_to_json(
                    file.Sheets[file.SheetNames[i]])
                temp.forEach((res) => {
                    data.push(res)
                })
            }
            const chunksdata = chunks(data);
            await insertData(chunksdata)
        }
        res.locals.rootData = "All data uploaded to mongodb";
        next()
    } catch (error) {
        next(error)
    }
}