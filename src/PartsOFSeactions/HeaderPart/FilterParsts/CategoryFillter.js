import React from 'react';
import DateFilter from './DateFilter'; // Ensure the path is correct
import ProductCard from '../../../Sections/ProductCard';

const CategoryFilter = ({ handleChange, filteredProducts, selectedCategory }) => {
  return (
    <div className="px-4 py-2">
      {DateFilter.categories.map((item, index) => (
        <React.Fragment key={index}>
          {item.Title ? (
            <h3 className="text-lg font-bold mb-3">{item.Title}</h3>
          ) : (
            <div className="flex mb-1 space-x-2">
              <input
                id={`radio-category-${index}`} // Ensure unique IDs for categories
                type="radio"
                onChange={handleChange} // Pass the selected value to the handler
                value={item.value} // Use the value from the DateFilter
                title={item.title} // Use the title from the DateFilter
                name={item.name} // Use the name from the DateFilter
                className="w-4 h-4 cursor-pointer text-blue-600 outline-none border-none rounded-full bg-gray-100"
                defaultChecked={index === 1 || selectedCategory === item.categoryName} // Default checked item
              />
              <label
                htmlFor={`radio-category-${index}`} // Correctly reference the input ID
                className="text-sm cursor-pointer font-medium text-gray-900"
              >
                {item.categoryName}
              </label>
            </div>
          )}
        </React.Fragment>
      ))}
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
};

export default CategoryFilter;
