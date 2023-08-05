const BaseError = require('./baseError')
class ValidationError extends BaseError {
    constructor(
        message,
        errObj = {},
        name = "ValidationError",
        displayMessage = "Request validation failed",
        statusCode = 400,
        description = '-5001',
    ) {
        super(message, errObj, name, displayMessage, statusCode, description)

        if (this.message == "") {
            this.message = "Validation Failed"
        }
        this.errObj = errObj;
    }
}

class UserNotFoundError extends BaseError {
    constructor(
        message,
        errObj = {},
        name = "User not Found",
        displayMessage = "Requested user details not found, please check with correct details...",
        statusCode = 400,
        description = '5001',
    ) {
        super(message, errObj, name, displayMessage, statusCode, description)

        if (this.message == "") {
            this.message = "User Not Found..."
        }
        this.errObj = errObj;
    }
}


class FileUploadError extends BaseError {
    constructor(
        message,
        errObj = {},
        name = "FileUploadError",
        displayMessage = "Error in uploading file",
        statusCode = 400,
        description = 'MT-5003',
    ) {
        super(message, errObj, name, displayMessage, statusCode, description)
    }
}

module.exports = { 
    ValidationError,
    UserNotFoundError,
    FileUploadError
}