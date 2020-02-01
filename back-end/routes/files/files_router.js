const { Router } = require("express");
const router = Router();
const multer = require("multer");
const {
  uploadUserAvatar,
  uploadUserHeader
} = require("../../controllers/files_controller/files");

/* viene en el req un objeto "file" o "files"
 - Necesito en el front un:
        <form action="/profile" method="post" enctype="multipart/form-data">
            <input type="file" name="avatar" />
        </form>
*/

const AvatarStorage = multer.diskStorage({
  destination: "public/multimedia/avatar",
  filename: (_req, file, cb) => {
    const extension = file.originalname.slice(
      file.originalname.lastIndexOf(".")
    );
    cb(null, new Date().valueOf() + extension);
  }
});

/* INPUT FILE es el input del front */
const uploadAvatar = multer({ AvatarStorage }).single("avatar");


router.post("/user", uploadAvatar, uploadUserAvatar);
router.post("/user/header", uploadAvatar, uploadUserHeader);

module.exports = router;
