import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="header bg-[#042d62] text-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="font-heading text-xl">DevDeploy!</h1> {/* Adjusted font size */}
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
