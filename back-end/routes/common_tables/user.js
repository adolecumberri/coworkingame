var {
  Router
} = require("express");
var router = Router();

const {
  showAll,
  showById,
  insert,
  updateById,
  deleteById,
  login,
  getDevInfo,
  getUserByPortfolioId,
  getImages,
  getNameById,
  checkPassword
} = require("../../controllers/common_tables_controller/user");

router.get("/", showAll);
router.get("/:id", showById);
router.get("/name/:id", getNameById);

router.post("/", insert);
router.post("/login", login);
router.post("/dev_info", getDevInfo);
router.post("/img/:id", getImages)
router.post("/check_password", checkPassword);
// router.post("/portfolio/:id_portfolio", getUserByPortfolioId);

router.put("/:id", updateById);

router.delete("/:id", deleteById);
module.exports = router;