var express = require("express");
var routerCountry = express.Router();

const controller = require("../../controllers/master_tables_controller/country");

routerCountry.get('/', controller.showAll);
routerCountry.get('/:id', controller.showById);
routerCountry.post('/', controller.insert);
routerCountry.put('/:id', controller.updateById);
routerCountry.delete('/:id', controller.deleteById);


module.exports = routerCountry;
