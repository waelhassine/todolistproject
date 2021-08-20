const Koa = require("koa")
const mongoose = require("mongoose")
const parameter = require("koa-parameter")
const bodyParser = require('koa-bodyparser');
const resolvers = require("./resolvers/toDoResolvers");
const typeDefs = require("./typeDefs/typeDefsTodo");
const { ApolloServer, gql } = require('apollo-server-koa');
const { buildFederatedSchema } = require("@apollo/federation");
const router = require("./routes/toDoRouter")
const { mongoURI } = require("./config")

mongoose.connect(mongoURI, {
    useUnifiedTopology: true, 
    useNewUrlParser: true
}).then(()=>{
    console.log("✅  MongoDb connected");
}).catch((err)=>{
    console.error("Error: ", err)
})


async function startApolloServer() {
  

  const server = new ApolloServer({
    schema: buildFederatedSchema([{ typeDefs, resolvers }]),
  });
  await server.start();
  const app = new Koa();
  app.use(parameter(app))
  app.use(router.routes()).use(router.allowedMethods())
  server.applyMiddleware({ app });
 
  await new Promise(resolve => app.listen({ port: 4002 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4002${server.graphqlPath}`);
  return { server, app };
}
startApolloServer();


