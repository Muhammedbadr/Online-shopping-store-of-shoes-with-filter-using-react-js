import './App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Sections/Header';
import MainProjectCards from './Sections/MainProjectCards';
import Filters from './Sections/Fillters';
import {useState} from 'react';
// Date
import Products from './Sections/DateProducts';
import ProductCard from './Sections/ProductCard'; // Import ProductCard component

// // './PartsOFSeactions/HeaderPart/FilterParsts/DateFillers';
function App() {
  // filter
  const [selectedCatogory, setSelectedCatogory] = useState(null)
  // const [selectedPrice, setSelectedGender] = useState('All'); const
  // [selectedcolor, setSelectedGender] = useState('All');
  
  // --------------- input  filter---------------
  const [query,setQuery] = useState("")
 
  const handleInputChange = event => {
    setQuery(event.target.value);
  }

  const filterItem = Products.filter(product => product.title.toLowerCase().indexOf(query.toLowerCase() !== -1))

  // --------------- Radio filter ---------------
  const handleChange = event => {
    setSelectedCatogory(event.target.value);
  }
  function filtredDate(products, selected, query) {
    let filteredProducts = products;
  
    // Filter by query
    if (query) {
      filteredProducts = filteredProducts.filter(product =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
    }
  
    // Filter by selected category
    if (selected && selected !== 'All') {
      filteredProducts = filteredProducts.filter(product => product.category === selected);
    }
  
    return filteredProducts.map(({ title, image, originalPrice, discountedPrice }) => (
      <ProductCard 
        key={Math.random()}
        title={title}
        originalPrice={originalPrice}
        discountedPrice={discountedPrice} // Change this if you want to handle discounted price properly
        Image={image}
      />
    ));
  }
  
  const result = filtredDate(Products,selectedCatogory,query)
  return (
    <div className='w-full h-screen flex flex-col'>
      <Header query={query} handleInputChange={handleInputChange} />
      <div className="flex flex-grow">
        {/* Sidebar with custom width */}
        <div className='w-48 border-r-2 p-4'>
          <Filters handleChange={handleChange}/>
        </div>

        {/* Main content taking the remaining space */}
        <div className='flex-grow p-4'>
  <MainProjectCards>{result}</MainProjectCards>
</div>

      </div>
    </div>
  );
}
export default App;
