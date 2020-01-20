var { Router } = require("express");
var router = Router();

const {
  showAll,
  showById,
  insert,
  updateById,
  deleteById
} = require("../../controllers/common_tables_controller/project");

router.get("/", showAll);
router.get("/:id", showById);
router.post("/", insert);
router.put("/:id", updateById);
router.delete("/:id", deleteById);

module.exports = router;
