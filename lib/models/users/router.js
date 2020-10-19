const router = require("express").Router();

const basicAuth = require("../../../middleware/basicAuth");
const bearerAuth = require("../../../middleware/bearerAuth");
const aclPermission = require("../../../middleware/acl");
const usersContoller = require("./controllers");


router.get("/", bearerAuth, aclPermission("users","list"), usersContoller.listUsers);

router.get("/secret", bearerAuth, usersContoller.getSecret);

router.get("/signout",usersContoller.signout);

router.get("/:userId",bearerAuth, aclPermission("users","read"), usersContoller.getUser);

router.post("/", bearerAuth, aclPermission("users","create"), usersContoller.createUser);

router.post("/signup",usersContoller.singup);

router.post("/signin", basicAuth ,usersContoller.signin);

router.put("/:userId",bearerAuth, aclPermission("users","update"), usersContoller.updateUser);

router.delete("/:userId",bearerAuth, aclPermission("users","delete"), usersContoller.deleteUser);


module.exports = router;
