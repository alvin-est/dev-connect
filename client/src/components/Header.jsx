import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="header bg-[#042d62] text-white shadow">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        {/* Header title */}
        <h1 className="font-heading text-primary-500">DevDeploy!</h1>
        {/* Navigation component */}
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
