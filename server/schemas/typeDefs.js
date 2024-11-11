const typeDefs = `
  type User {
    _id: ID!
    name: String!
    email: String!
    profile: Profile
    projects: [Project]
  }

  type Profile {
    user: ID!
    photoURL: String
    role: String
    location: String
    githubURL: String
    resumeURL: String
    skills: [String]
  }
  
  type Project {
    user: ID!
    title: String!
    description: String!
    URL: String!
  }

  input UpdateProfileInput {
    photoURL: String
    role: String
    location: String
    githubURL: String
    resumeURL: String
    skills: [String]
  }

  type Auth {
    token: String!
    user: User
  }

  type Query {
    me: User
    getUserByEmail(email: String!): User
    allUsers: [User]!
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(name: String!, email: String!, password: String!): Auth
    addProject(title: String!, description: String!, URL: String!): Project
    updateProfile(profile: UpdateProfileInput!): User
  }
`;

module.exports = typeDefs;