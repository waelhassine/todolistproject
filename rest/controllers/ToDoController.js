const ToDo = require("../models/toDo")

class ToDoController{
    async getToDo(ctx){
        const data = await ToDo.find()
        const result = {
            code : 200,
            data
        }
        ctx.body = result
    }

    async createToDo(ctx){
        ctx.verifyParams({
            title: { type: "string", required: true},
            
        })
        const data = await new ToDo(ctx.request.body).save()
        const result = {
            code: 200,
            data
        }
        ctx.body = result
    }

    async deleteToDo(ctx){
        const data = await ToDo.findByIdAndRemove(ctx.params.id)
        if(!data){
            ctx.throw(404, "ToDo does not exist")
        }
        const result = {
            code: 200,
            data
        }
        ctx.body = result
    }
}

module.exports = new ToDoController();