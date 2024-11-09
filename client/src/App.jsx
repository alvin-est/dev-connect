import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <>
        <div className="flex flex-col min-h-screen">
          {/* Header */}
          <Header />
          
          {/* Main */}
          <main className="flex-grow">
            <Outlet />
            </main>
    
          {/* Footer */}
          <Footer />
          </div>
        </>
    );
}

export default App;