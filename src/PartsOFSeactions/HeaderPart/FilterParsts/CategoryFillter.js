import React, { useState } from 'react';
import DateFilter from './DateFilter'; // Ensure the path is correct

const CategoryFilter = ({ onCategoryChange }) => {
  const [selectedCategory, setSelectedCategory] = useState(DateFilter.categories[1]?.categoryName || ''); // Default to "All"

  const handleCategoryChange = (categoryName) => {
    setSelectedCategory(categoryName);
    if (onCategoryChange) {
      onCategoryChange(categoryName); // Pass the selected category back to the parent
    }
  };

  return (
    <div className="px-4 py-2">
      {DateFilter.categories.map((item, index) => (
        <React.Fragment key={index}>
          {item.Title ? (
            <h3 className="text-lg font-bold mb-3">{item.Title}</h3>
          ) : (
            <div className="flex mb-2 space-x-2">
              <input
                id={`radio-category-${index}`} // Unique ID for each radio button
                type="radio"
                name="category-radio"
                className="w-4 h-4 cursor-pointer text-blue-600 outline-none border-none rounded-full bg-gray-100"
                checked={selectedCategory === item.categoryName}
                onChange={() => handleCategoryChange(item.categoryName)}
              />
              <label
                htmlFor={`radio-category-${index}`} // Associate the label with the radio input
                className="text-sm cursor-pointer font-medium text-gray-900"
              >
                {item.categoryName}
              </label>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default CategoryFilter;
