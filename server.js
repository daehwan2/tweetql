import { ApolloServer, gql } from "apollo-server";

// Graphql Query Language - graphql 클라이언트가 사용하는 언어

// SDL Schema Definition Language
const typeDefs = gql`
  type Query {
    text: String
    hello: String
  }
`;

const server = new ApolloServer({ typeDefs });

server.listen().then(({ url }) => console.log(`Running on ${url}`));
