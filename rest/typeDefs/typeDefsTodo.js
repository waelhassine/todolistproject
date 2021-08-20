const { gql } = require('apollo-server-koa');
const typeDefs = gql`
type Todo {
  id: ID!
  title: String
 
}

extend type Query {
  todo(title: String!): [Todo]
  todos: [Todo]
}
extend type Mutation {
  createTodo(title: String): Todo
  deleteTodo(id: ID!): String
}

`;
module.exports = typeDefs;