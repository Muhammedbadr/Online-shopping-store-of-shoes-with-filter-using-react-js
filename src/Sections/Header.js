import { FaShoppingBasket } from "react-icons/fa"; 
import { FaRegHeart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import iconforsite from '../Images/ad1687b9-693f-480b-b028-b0fe596e6884.webp';

const Header = () => {
  return (
    <nav className="bg-white border-b border-gray-200 dark:bg-white"> 
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={iconforsite} className="h-10 w-10 rounded-full shadow-lg" alt="Site Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-blue-600 dark:text-black font-cursive">
            FootFolio
          </span>
        </a>

        <div className="flex-1 flex justify-center">
          <div className="relative w-80">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <IoSearch className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </div>
            <input 
              type="text" 
              id="search-navbar" 
              className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-[#edf1f0] dark:border-gray-600 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="Search..."
            />
          </div>
        </div>

        <div className="flex md:order-2">
          <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1">
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
            <span className="sr-only">Search</span>
          </button>
          <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button>
        </div>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-white md:dark:bg-white dark:border-gray-100">
            
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
