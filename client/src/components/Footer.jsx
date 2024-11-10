const Footer = () => {
  return (
    <footer className="bg-[#042d62] text-white py-6 mt-auto">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Logo and copyright message */}
        <div className="flex items-center">
          <img
            src="/assets/devdeploy_logo_footer.jpg"
            alt="DevDeploy Logo"
            className="h-12 w-12 object-contain mr-4"
          />
          <p className="text-sm">&copy; 2024 DevDeploy! All rights reserved.</p>
        </div>

        {/* Footer navigation links */}
        <nav className="flex space-x-4">
          <a
            href="#"
            className="font-body text-white hover:text-[#C4E736] transition duration-200"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="font-body text-white hover:text-[#C4E736] transition duration-200"
          >
            Terms of Service
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
