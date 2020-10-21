const router = require("express").Router();

// const bearerAuth = require("../../../middleware/bearerAuth");
const aclPermission = require("../../../middleware/acl");
const todosController = require("./controllers");



router.get("/todos",  todosController.listTodo);

router.get("/todos/:userId" ,aclPermission("todos", "read"), todosController.getTodo);

router.post("/todos",aclPermission("todos", "create"), todosController.createTodo);

router.put("/todos/:userId",aclPermission("todos", "update"),todosController.updateTodo);

router.delete("/todos/:userId",aclPermission("todos", "delete"), todosController.deleteTodo);

module.exports = router;
