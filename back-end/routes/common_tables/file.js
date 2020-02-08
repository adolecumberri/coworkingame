var {
  Router
} = require("express");
var router = Router();

const {
  showAll,
  showByPorfolioId,
  insert,
  updateById,
  deleteById
} = require("../../controllers/common_tables_controller/file");

router.get("/", showAll);
router.get("/:id_portfolio", showByPorfolioId);
router.post("/", insert);
router.put("/:id", updateById);
router.delete("/:id", deleteById);

module.exports = router;