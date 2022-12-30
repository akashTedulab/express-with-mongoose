const multer = require('multer')

const upload = multer({
    storage: multer.diskStorage({
        destination: function(req, file, cb){
            cb(null, "./public/uploads")
        },
        filename: function(req, file, cb){
            cb(null, file.fieldname + Date.now() + ".jpg")
        }
    })
}).array("files-upload", 3)

module.exports = upload

