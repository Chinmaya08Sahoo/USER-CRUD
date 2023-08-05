const multer = require('multer');
const { failureResponse } = require('./response.service');
const { FileUploadError } = require('../handler/error');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});

const fileOp = (fileName) => {
    return (req, res, next) => {
        const upload = multer({
            storage: storage,
            fileFilter: (req, file, callback) => {
                const fileExt = file.originalname.split(".")[1]
                if (fileExt == 'csv' || fileExt == 'xlsx') {
                    callback(null, true)

                } else {
                    callback(new FileUploadError({ _ErrCode: 'FILE_UPLOAD_ERROR', message: 'Upload either csv or xlsx file format...' }), false)
                }
            },
        })
        let uploading = upload.single(fileName);

        uploading(req, res, (err) => {
            if (err) {
                failureResponse(err, req, res);
            } else {
                next();
            }
        });
    };
}


module.exports = { fileOp }