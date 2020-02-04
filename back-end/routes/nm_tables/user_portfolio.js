var {
  Router
} = require("express");
var router = Router();

const {
  showAll,
  countUserPorfolio,
  insert,
  updateById,
  deleteById
} = require("../../controllers/nm_tables_controller/user_portfolio");

// router.get("/", showAll);
router.get("/user/:id", countUserPorfolio);
router.post("/", insert);
// router.put("/:id", updateById);
// router.delete("/:id", deleteById);

module.exports = router;