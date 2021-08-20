const ToDo = require("../models/toDo")
const resolvers = {
  
    Query: {
        async todo(_, { title }) {
        return await  ToDo.find({title: title});
      },
      async todos() {
        return await ToDo.find();
      },
    },
    Mutation :{
     
      async deleteTodo (_, {id}) {
        await ToDo.findByIdAndDelete(id);
        return id;
      },
     async createTodo (_, {title}) {
        return await new ToDo({title:title}).save();
      },
    }
  };
  module.exports = resolvers;