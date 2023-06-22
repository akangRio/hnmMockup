import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://hnmbebe.manisberkendara.com/",
  cache: new InMemoryCache(),
});

export default client;
