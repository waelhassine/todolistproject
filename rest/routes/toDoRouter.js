const Router = require("koa-router")
const ToDoController = require("../controllers/TodoController")

const router = new Router({
        prefix: "/todos"
})
router.get("/", ToDoController.getToDo)
router.post("/create", ToDoController.createToDo)
router.get("/delete/:id", ToDoController.deleteToDo)

module.exports = router