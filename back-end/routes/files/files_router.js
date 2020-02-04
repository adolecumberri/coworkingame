const {
  Router
} = require("express");
const router = Router();
const multer = require("multer");

const {
  uploadUserAvatar,
  uploadUserHeader
} = require("../../controllers/files_controller/files");

const storage = multer.diskStorage({
  destination: "public/multimedia",
  filename: (req, file, cb) => {
    const extension = file.originalname.slice(
      file.originalname.lastIndexOf(".")
    );
    let newName = new Date().valueOf() + req.params.id + extension;
    file.newName = newName;
    cb(null, newName);
  }
});

const uploadAvatar = multer({
  storage
});

router.put("/user/:id", uploadAvatar.single("file"), uploadUserAvatar);
router.put("/header/:id", uploadAvatar.single("file"), uploadUserHeader);

module.exports = router;