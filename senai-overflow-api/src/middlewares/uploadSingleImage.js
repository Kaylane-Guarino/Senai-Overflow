const Multer = require("multer");

const uploadSingleImage = Multer({
    storage: Multer.diskStorage({
        destination: function(req, file, cb) {
            cb(null, "./uploads");
        },
        filename: function(req, file, cb) {
            const fileName = Date.now() + "." + file.originalname.split(".").pop();
            cb(null, fileName);
        },
        limits: {
            fileSize: 1024 * 1024 * 2, //2MB
        }
    })
});

module.exports = uploadSingleImage.single("image");