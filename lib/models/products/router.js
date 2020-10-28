const router = require("express").Router();

// const bearerAuth = require("../../../middleware/bearerAuth");
// const aclPermission = require("../../../middleware/acl");
const productController = require("./controllers");


router.get("/products",  productController.listProduct);

router.get("/products/:userId" , productController.getProduct);

router.post("/products", productController.createProduct);

router.put("/products/:userId",productController.updateProduct);

router.delete("/products/:userId", productController.deleteProduct);

module.exports = router;
