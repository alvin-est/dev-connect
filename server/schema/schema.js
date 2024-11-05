const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type USEr {
    _id: ID!
    title: String!
    content: String!
  }

  type Query {
    getPost(id: ID!): Post
    getPosts: [Post!]!
  }

  type Mutation {
    createPost(title: String!, content: String!): Post
    updatePost(id: ID!, title: String, content: String): Post
    deletePost(id: ID!): Boolean
  }
`);