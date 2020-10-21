const router = require("express").Router();

// const bearerAuth = require("../../../middleware/bearerAuth");
const aclPermission = require("../../../middleware/acl");
const todosController = require("./controllers");



router.get("/todos",  todosController.listTodo);

router.get("/todos/:userId" , todosController.getTodo);

router.post("/todos", todosController.createTodo);

router.put("/todos/:userId",todosController.updateTodo);

router.delete("/todos/:userId", todosController.deleteTodo);

module.exports = router;
