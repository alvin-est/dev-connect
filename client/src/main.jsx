import React from 'react';
import ReactDOM from 'react-dom/client'

// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Apollo Provider client to access our queries and mutations
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// Create an HTTP link to the GraphQL endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Set up an authentication link
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = AuthService.getToken();
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  };
});

// Initialize ApolloClient
export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


// Import styles
// import './output.css'
import './assets/styles.css'

// Import pages
import App from './App';
import Error from './pages/ErrorPage';
import Home from './pages/Homepage';
import Profile from './pages/UserProfile';
import Developers from './pages/Developers';
import Login from './pages/Login';
import Registration from './pages/Register';
import User from './pages/User';


// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home />},
      { path: "home", element: <Home />}, 
      { path: "profile", element: <Profile />},
      { path: "developers", element: <Developers />},
      { path: "register", element: <Registration />},
      { path: "login", element: <Login />},
      { path: "user", element: <User />},
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
);

  