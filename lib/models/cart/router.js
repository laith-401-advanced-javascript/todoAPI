const router = require("express").Router();

// const bearerAuth = require("../../../middleware/bearerAuth");
// const aclPermission = require("../../../middleware/acl");
const cartController = require("./controllers");


router.get("/carts",  cartController.listCart);

router.get("/carts/:userId" , cartController.getCart);

router.post("/carts", cartController.createCart);

router.put("/carts/:userId",cartController.updateCart);

router.delete("/carts/:userId", cartController.deleteCart);

module.exports = router;
