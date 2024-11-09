const Footer = () => {
  return (
    <footer className="bg-[#042d62] text-white py-6">
      <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
        {/* Footer text */}
        <p className="text-sm mb-4 md:mb-0">&copy; 2024 DevDeploy! All rights reserved.</p>

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
