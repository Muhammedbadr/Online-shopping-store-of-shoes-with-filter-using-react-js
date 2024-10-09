import { FaShoppingBasket } from "react-icons/fa"; 
import { FaRegHeart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import iconforsite from '../Images/ad1687b9-693f-480b-b028-b0fe596e6884.webp';

const Header = () => {
  return (
    <nav className="bg-white border-b border-gray-200 dark:bg-white">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={iconforsite} className="h-10 w-10 rounded-full" alt="Site Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black font-cursive">FootFolio</span>
        </a>
        
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-white md:dark:bg-white dark:border-gray-100">
            <li>
              <IoSearch 
                className="text-gray-900 hover:text-blue-400 transition-colors cursor-pointer" 
                size={24} 
                aria-label="Search"
              />
            </li>
            <li>
              <FaRegHeart 
                className="text-gray-900 hover:text-red-400 transition-colors cursor-pointer" 
                size={24} 
                aria-label="Favorites"
              />
            </li>
            <li>
              <FaShoppingBasket 
                className="text-gray-900 hover:text-green-400 transition-colors cursor-pointer" 
                size={24} 
                aria-label="Cart"
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
