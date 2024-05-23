import { ApolloClient, InMemoryCache, HttpLink, ApolloProvider } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import React from "react";

const STRAPI_URL = "http://localhost:1337";

const httpLink = new HttpLink({
  uri: `${STRAPI_URL}/graphql`,
});

const authLink = setContext((_, { headers }) => {
  const token = '893fcfbc5d86410ea96160dd442b636dfd91e918ea6a48c915eb46024b0e0d4e171df5d9f93b1f65779a4f88b03bc1aaea07bdfbf8e00f598621de767b6130f6e7e302d53be451b4ee5a0b2097c9dc9daae2e600a77fb03d7740b4d4386acde87f5d0dc11855a0850786cc84a72808b08d584b54a963205352682770d3b7fd62';
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
