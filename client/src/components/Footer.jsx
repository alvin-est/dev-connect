const Footer = () => {
  return (
    <footer className="bg-[#042d62] text-white py-6 mt-auto">
      <div className="container mx-auto px-10 flex flex-wrap justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src="/assets/devdeploy_logo_footer.jpg"
            alt="DevDeploy Logo"
            className="h-12 w-12 object-contain mr-4"
          />
          <p className="text-sm">&copy; 2024 DevDeploy! All rights reserved.</p>
        </div>

        {/* Footer navigation links */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a
                href="#"
                className="font-body text-white hover:text-accent-500 transition duration-200"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-body text-white hover:text-accent-500 transition duration-200"
              >
                Terms of Service
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

