const express = require('express');
const path = require('path');
const db = require('./config/connection');
require('dotenv').config();

/* GraphQL neccessary imports */
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');

/* Start our Express server */
const PORT = process.env.PORT || 3001;
const app = express();

/* Apollo Server setup for GraphQL */
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

/* Instantiate Apollo  */
const startApollo = async () => {
  await server.start();

  /* Express Middleware for parsing JSON */
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  // Set up endpoint: apply Apollo to Express as middleware
  app.use('/graphql', expressMiddleware(server, {
    context: authMiddleware
  }));

  /* Serve static files in production */
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
  }

  /* Connect to MongoDB database */
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
};

/* Start Apollo Server */
startApollo();