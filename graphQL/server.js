
// const { ApolloServer } = require('apollo-server');
// const { ApolloGateway } = require('@apollo/gateway');
// const waitOn = require('wait-on');
// const fs = require('fs');
// const supergraphSdl = fs.readFileSync('./supergraph.graphql').toString();
// const options = {
//     resources: ['tcp:4000'],
//   }

// // Initialize an ApolloGateway instance and pass it
// // the supergraph schema
// const gateway = new ApolloGateway({
//   supergraphSdl,
//     serviceList: [
//         { name: 'todos', url: 'http://localhost:4000/graphql' },
//         // ...additional subgraphs...
//       ]
// });

// waitOn(options)
//   .then(() => {
//     const server = new ApolloServer({ gateway, subscriptions: false })
//     server.listen(4004).then(({ url }) => {
//       console.log(`🚀 Server ready at ${url}`)
//     })
//   })
//   .catch((err) => console.log(err))


//const { ApolloGateway } = require("@apollo/gateway");
//const { ApolloServer } = require("apollo-server-koa");
//const Koa = require("koa")

// const port = 4000;
// const app = new Koa();

// const gateway = new ApolloGateway({
//   serviceList: [{ name: "accounts", url: "http://localhost:4000" }]
// });

// const server = new ApolloServer({
//   gateway,
//   subscriptions: false
// });

// server.applyMiddleware({ app });

// app.listen({ port }, () =>
//   console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`)
// );


// async function startApolloServer() {
//   const gateway = new ApolloGateway({
//     serviceList: [{ name: "todos", url: "http://localhost:4000" }]
//   });
//   const server = new ApolloServer({
//     gateway,
//     subscriptions: false
//   });
//   await server.start();

//   const app = new Koa();
//   server.applyMiddleware({ app });
//   // alternatively you can get a composed middleware from the apollo server
//   // app.use(server.getMiddleware());

//   await new Promise(resolve => app.listen({ port: 4000 }, resolve));
//   console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
//   return { server, app };
// }
// startApolloServer();



const { ApolloGateway } = require("@apollo/gateway");
const { ApolloServer } = require("apollo-server");

const port = 4000;

const gateway = new ApolloGateway({
  serviceList: [
    { name: "todos", url: "http://localhost:4002/graphql" },
  ],
});

const server = new ApolloServer({
  gateway,
  subscriptions: false,
});

server.listen({ port }).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
