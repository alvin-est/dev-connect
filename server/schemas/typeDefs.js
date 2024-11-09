const typeDefs = `
    type URLs {
        _id: ID
        url: String
    }

    type User {
        _id: ID
        email: String
        firstName: String
        lastName: String
        bio: String
        likesCount: Int
        portfolio: [URLs]
    }

    type Comment {
        _id: ID
        content: String
        fromUser: User
        createdAt: String
        toUser: User
    }

    type Query {
        user(id : ID!): User
        comment(id: ID!): Comment
    }

    type Mutation {
        addUser(firstName: String!, lastName: String!, email: String!, bio: String, password: String!): User
        login(email: String!, password: String!): User
    }
`;

module.exports = typeDefs;
