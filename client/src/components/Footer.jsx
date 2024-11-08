const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
        <p className="text-sm mb-4 md:mb-0">&copy; 2023 Brand Name. All rights reserved.</p>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;