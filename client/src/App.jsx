import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';

function App() {
    return (
        <>
          {/* Header */}
          <Header />
          
          {/* Main */}
            <Outlet />
    
          {/* Footer */}
          <Footer />
        </>
    );
}

export default App;