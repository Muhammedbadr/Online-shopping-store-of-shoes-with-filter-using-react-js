import './App.css';
import Header from './Sections/Header';
import MainProjectCards from './Sections/MainProjectCards';
import Filters from './Sections/Fillters';
import { useState } from 'react';
import Products from './Sections/DateProducts';

function App() {
  // State for filters
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPrice, setSelectedPrice] = useState('All');
  const [selectedColor, setSelectedColor] = useState('All');
  const [query, setQuery] = useState("");

  // Handle input search filter
  const handleSearch = (event) => {
    setQuery(event.target.value);
  };

  // Filter the products based on category, price, color, and search query
  const filterProducts = () => {
    let filteredProducts = Products;

    // Search query filter
    if (query) {
      filteredProducts = filteredProducts.filter(product => 
        product.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory !== 'All') {
      filteredProducts = filteredProducts.filter(product => 
        product.category === selectedCategory
      );
    }

    // Price filter
    if (selectedPrice !== 'All') {
      const [minPrice, maxPrice] = selectedPrice.replace('$', '').split('-').map(Number);
      filteredProducts = filteredProducts.filter(product =>
        product.originalPrice >= minPrice && product.originalPrice <= maxPrice
      );
    }

    // Color filter
    if (selectedColor !== 'All') {
      filteredProducts = filteredProducts.filter(product => 
        product.color.toLowerCase() === selectedColor.toLowerCase()
      );
    }

    return filteredProducts;
  };

  return (
    <div className='w-full h-screen flex flex-col'>
      <Header />
      <div className="flex flex-grow">
        {/* Sidebar with custom width */}
        <div className='w-48 border-r-2 p-4'>
          <Filters
            setSelectedCategory={setSelectedCategory}
            setSelectedPrice={setSelectedPrice}
            setSelectedColor={setSelectedColor}
            setQuery={handleSearch}
          />
        </div>

        {/* Main content taking the remaining space */}
        <div className='flex-grow p-4'>
          <MainProjectCards products={filterProducts()} />
        </div>
      </div>
    </div>
  );
}

export default App;
