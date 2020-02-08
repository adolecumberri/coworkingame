var {
  Router
} = require("express");
var router = Router();

const {
  showAll,
  showByUserId,
  insert,
  showHeader,
  deleteById
} = require("../../controllers/common_tables_controller/portfolio");

router.get("/", showAll);
router.get("/user/:id_user", showByUserId);
router.post("/", insert);
router.post("/header/:id_portfolio", showHeader);
router.delete("/:id", deleteById);


module.exports = router;