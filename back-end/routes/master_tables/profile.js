var { Router } = require("express");
var router = Router();

const controller = require("../../controllers/master_tables_controller/profile");

router.get('/', controller.showAll);
router.get('/:id', controller.showById);
router.post('/', controller.insert);
router.put('/:id', controller.updateById);
router.delete('/:id', controller.deleteById);


module.exports = router;