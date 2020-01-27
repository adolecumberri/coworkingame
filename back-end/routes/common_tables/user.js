var { Router } = require("express");
var router = Router();

const {
  showAll,
  showById,
  insert,
  updateById,
  deleteById,
  login
} = require("../../controllers/common_tables_controller/user");

router.get("/", showAll);
router.get("/:id", showById);
router.post("/", insert);
router.put("/:id", updateById);
router.delete("/:id", deleteById);
router.post("/login", login);

module.exports = router;
