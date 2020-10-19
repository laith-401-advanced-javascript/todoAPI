const router = require("express").Router();

const bearerAuth = require("../../../middleware/bearerAuth");
const aclPermission = require("../../../middleware/acl");
const todosController = require("./controllers");



router.get("/todos",  todosController.listTodo);

router.get("/todos/:userId" ,bearerAuth,aclPermission("todos", "read"), todosController.getTodo);

router.post("/todos",bearerAuth,aclPermission("todos", "create"), todosController.createTodo);

router.put("/todos/:userId",bearerAuth,aclPermission("todos", "update"),todosController.updateTodo);

router.delete("/todos/:userId",bearerAuth,aclPermission("todos", "delete"), todosController.deleteTodo);

module.exports = router;
