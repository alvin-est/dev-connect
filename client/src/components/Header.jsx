import Navigation from './Navigation';

function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold"><h1>Header</h1></div>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;