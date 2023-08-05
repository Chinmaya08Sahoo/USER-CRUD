const commonService = require("../db/mongodb/services/common.service");

const insertData = async (data) => {
    for (let i = 0; i < data.length; i++) {
        const singleSet = data[i]
        let pushData = [];
        for (let j = 0; j < singleSet.length; j++) {
            const obj = singleSet[j]
            if (obj['Applicant ID']) {
                obj['Applicant_ID'] = obj['Applicant ID']
            }
            if (obj['hasActive ClientPolicy']) {
                obj['hasActive_ClientPolicy'] = obj['hasActive ClientPolicy']
            }
            pushData.push(obj)
        }
        await commonService.insertMany('user', pushData)
    }

}

module.exports = { insertData }