const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return await User.findById(context.user._id);
      }
      throw new Error('Not authenticated');
    },
    getUserByEmail: async (_, { email }) => {
      const user = await User.findOne({ email: email });
      if (!user) {
        throw new Error('User not found');
      }
      return user;
    },
    allUsers: async () => {
      try {
        const users = await User.find({}).select('-password'); // Exclude password for security
        return users;
      } catch (error) {
        throw new Error('Error fetching users: ' + error.message);
      }
    },
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error('User not found');
      }

      const correctPassword = await user.isCorrectPassword(password);
      if (!correctPassword) {
        throw new Error('Incorrect password');
      }
      const token = signToken(user);
      return { token, user };
    },

    addUser: async (parent, { name, email, password }) => {
      const user = await User.create({ name, email, password });
      const token = signToken(user);
      return { token, user };
    },

    addProject: async (parent, args, context) => {
      if (!context.user) {
        throw new Error('Authentication required');
      }
      const project = await Project.create({ ...args, user: context.user._id });
      await User.findByIdAndUpdate(context.user._id, { $push: { projects: project._id } });
      return project;
    },

    updateProfile: async (parent, { profile }, context) => {
      if (!context.user) {
        throw new Error('Authentication required');
      }
      const user = await User.findById(context.user._id);
      if (!user.profile) {
        user.profile = {};
      }
      Object.assign(user.profile, profile);
      await user.save();
      return user;
    }
  }
};

module.exports = resolvers;