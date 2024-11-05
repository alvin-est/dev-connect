const { User, Comment } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
// const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    // // get all users
    // users: async () => {
    //   return User.find();
    // },
    // get a user by username
    user: async (parent, { id }) => {
      return User.findOne({ _id: id });
    },
    // get comment by id
    comment: async (parent, { id }) => {
      return Comment.findOne({ _id: id });
    }
  },
  Mutation: {
    // create a new user
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    // login a user
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
  }
};

module.exports = resolvers;
