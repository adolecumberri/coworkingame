var { Router } = require("express");
var router = Router();

const {
  showAll,
  showById,
  insert,
  updateById,
  deleteById
}= require("../../controllers/master_tables_controller/state");

router.get("/", showAll);
router.get("/:id", showById);
router.post("/", insert);
router.put("/:id", updateById);
router.delete("/:id", deleteById);

module.exports = router;
