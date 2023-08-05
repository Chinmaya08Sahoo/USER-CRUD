const express = require('express');
const clc = require('cli-color');
const compose = require('compose-middleware').compose;

const router = express.Router();
const endPointConfig = require('../config/routeConfig.json');
const { successResponse, failureResponse } = require("../utils/services/response.service")
const validator = require('../utils/validator');
const { fileOp } = require('../utils/services/fileOperation');

const jsonErrorHandler = async (err, req, res, next) => {
    failureResponse(err, req, res)
}

for (let i = 0; i < endPointConfig.length; i++) {
    const config = endPointConfig[i];
    const middlewareArray = config.middlewares
    let arr = []

    if (config.isAuth) {
        arr.push(authorization.run);
    }

    for (let j = 0; j < middlewareArray.length; j++) {
        const middleware = require(`../middlewares/${middlewareArray[j]}`);
        arr.push(middleware.run);
    }
    let fileuploader;

    if (config.multipart) {
        if (!config.acceptingFiles) {
            throw new Error(`acceptingFiles are not defined in ${config.endPoint}`);
        } else if (!Array.isArray(config.acceptingFiles)) {
            throw new Error("accepting files should be an Array");
        } else {
            fileuploader = fileOp(config.acceptingFiles[0])
        }
    } else {
        fileuploader = (req, res, next) => { next() }
    }
    try {
        router[config.method](config.endPoint,
            fileuploader,
            (req, res, next) => {
                res.locals.config = config;
                res.locals.ref = {};
                next()
            },
            validator.run,
            compose(arr),
            successResponse
        )
    } catch (error) {
        console.log('error----', error)
        console.log(config, "error::::::")
        throw error
    }


    console.log(clc.yellow(config.method.toUpperCase()), clc.cyan(config.endPoint))

}
router.use(jsonErrorHandler)


module.exports = router