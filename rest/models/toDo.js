const { Schema, model } = require("mongoose")
const ToDoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
   
})

const ToDo = model("ToDo", ToDoSchema);
module.exports = ToDo;