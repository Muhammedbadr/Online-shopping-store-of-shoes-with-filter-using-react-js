import ProductCard from './ProductCard'; // Import ProductCard component
import DateProducts from './DateProducts';
import { useState } from 'react';

const MainProjectCards = () => {
  const [selectedGender, setSelectedGender] = useState('All');


  const filteredProducts = DateProducts.filter(product => {
    const genderMatch = selectedGender === 'All' || product.gender === selectedGender;
    return genderMatch;
  });

  return (
    <div>
      {/* Categories List - Displayed Once */}
      <div className='border-b mb-2 px-3 flex justify-between'>
        <div>
          <h1 className="font-bold text-gray-800 text-2xl">Recommended</h1>
        </div>
        <div className="pb-4 font-normal">
          <ul className="gap-2 flex">
            <button onClick={() => setSelectedGender('All')}>
              <li className={`px-4 rounded-full py-1 mx-2 ${selectedGender === 'All' ? 'bg-orange-400 text-white font-semibold' : 'bg-gray-100'}`}>All</li>
            </button>
            <button onClick={() => setSelectedGender('man')}>
              <li className={`px-4 rounded-full py-1 mx-2 ${selectedGender === 'man' ? ' bg-green-200 text-black font-semibold' : 'bg-gray-100'}`}>Men</li>
            </button>
            <button onClick={() => setSelectedGender('woman')}>
              <li className={`px-4 rounded-full py-1 mx-2 ${selectedGender === 'woman' ?  ' bg-red-200 text-black font-semibold' : 'bg-gray-100'}`}>Women</li>
            </button>
            <button onClick={() => setSelectedGender('kids')}>
              <li className={`px-4 rounded-full py-1 mx-2 ${selectedGender === 'kids' ? 'bg-blue-200 text-black font-semibold' : 'bg-gray-100'}`}>Kids</li>
            </button>
          </ul>
        </div>
        <div>
          <a href="#">
            <p className="cursor-pointer hover:underline">See All</p>
          </a>
        </div>
      </div>

      {/* Product Cards Grid */}
      <div className='grid my-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 place-items-center'>
        {filteredProducts.map((product, index) => (
          <ProductCard
            key={index} // Use a unique identifier if available
            title={product.title}
            originalPrice={product.originalPrice}
            discountedPrice={product.discountedPrice}
            Image={product.image}
          />
        ))}
      </div>
    </div>
  );
}

export default MainProjectCards;
