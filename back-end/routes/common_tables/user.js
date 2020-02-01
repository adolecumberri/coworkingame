var { Router } = require("express");
var router = Router();

const {
  showAll,
  showById,
  insert,
  updateById,
  deleteById,
  login,
  getDevInfo,
  checkPassword
} = require("../../controllers/common_tables_controller/user");

router.get("/", showAll);
router.get("/:id", showById);
router.post("/", insert);
router.post("/check_password", checkPassword);
router.put("/:id", updateById);
router.delete("/:id", deleteById);

router.post("/login", login);
router.post("/dev_info", getDevInfo);

module.exports = router;
