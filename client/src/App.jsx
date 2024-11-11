import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Apollo Provider client to access our queries and mutations
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import AuthService from './utils/auth';

// Construct our main GraphQL API endpoint
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
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
    return (
        <ApolloProvider client={client}>
        <div className="flex flex-col min-h-screen">
          {/* Header */}
          <Header />
          
          {/* Main */}
          <main className="flex-grow overflow-y-auto">
            <Outlet />
          </main>
    
          {/* Footer */}
          <Footer />
          </div>
        </ApolloProvider>
    );
}

export default App;