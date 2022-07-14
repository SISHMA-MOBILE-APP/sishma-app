// Apollo Client
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://sishmadev.azurewebsites.net/graphql",
  cache: new InMemoryCache(),
});

export default client