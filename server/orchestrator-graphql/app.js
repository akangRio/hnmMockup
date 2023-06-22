const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const userTypeDefs = require("./schemas/userScheme");
const { userResolver, productResolver } = require("./resolvers/resolvers");
const appTypeDef = require("./schemas/productScheme");

const server = new ApolloServer({
  typeDefs: [userTypeDefs, appTypeDef],
  resolvers: [userResolver, productResolver],
  introspection: true,
});
(async () => {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  console.log(`🚀  Server ready at: ${url}`);
})();
