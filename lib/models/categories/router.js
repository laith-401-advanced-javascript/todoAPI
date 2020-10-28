const router = require("express").Router();

// const bearerAuth = require("../../../middleware/bearerAuth");
// const aclPermission = require("../../../middleware/acl");
const categorieController = require("./controllers");


router.get("/categories",  categorieController.listCategorie);

router.get("/categories/:userId" , categorieController.getCategorie);

router.post("/categories", categorieController.createCategorie);

router.put("/categories/:userId",categorieController.updateCategorie);

router.delete("/categories/:userId", categorieController.deleteCategorie);

module.exports = router;
