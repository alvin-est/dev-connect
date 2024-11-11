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
    bio: String
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
    bio: String
  }

  input UserInput {
    name: String!
    email: String!
    password: String!
    profile: UpdateProfileInput
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
    addUser(name: String!, email: String!, password: String!, profile: UpdateProfileInput): Auth
    addProject(title: String!, description: String!, URL: String!): Project
    updateProfile(profile: UpdateProfileInput!): User
  }
`;

module.exports = typeDefs;