import { useLocation } from 'react-router-dom';

function Footer() {
  const currentPage = useLocation().pathname;

  return (
    <footer className="custom-footer p-4 text-center w-full border-t bg-white shadow-md dark:bg-gray-800">
    <p className="text-gray-600 dark:text-gray-300">
        &copy; 2024
        <a href="https://github.com/alvin-est" target="_blank" className="text-blue-500 hover:underline"> Alvin</a>,
        <a href="https://github.com/cameron-profile" target="_blank" className="text-blue-500 hover:underline"> Cameron</a>,
        <a href="https://github.com/tanaika-profile" target="_blank" className="text-blue-500 hover:underline"> Tanaika</a> &amp;
        <a href="https://github.com/KateHanSta17" target="_blank" className="text-blue-500 hover:underline"> Kate</a>
    </p>
</footer>
     
  );
}

export default Footer;