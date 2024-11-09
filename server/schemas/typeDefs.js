const typeDefs = `
  type User {
    _id: ID!
    name: String!
    email: String!
  }

  type Auth {
    token: String!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(name: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;