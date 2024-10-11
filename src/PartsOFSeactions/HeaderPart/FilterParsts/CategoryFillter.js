// CategoryFilter.js
import React from 'react';
import DateFilter from './DateFillers'; // Ensure the path is correct

const CategoryFilter = () => {
  return (
    <div className="px-4 py-2">
      {DateFilter.categories.map((item, index) => (
        <React.Fragment key={index}>
          {/* Check if the current item is a Title */}
          {item.Title ? (
            <h3 className="text-lg font-bold mb-3">{item.Title}</h3>
          ) : (
            <div className="flex mb-2 space-x-2">
              <input
                id={`radio-category-${index}`} // Updated to ensure unique IDs
                type="radio"
                name="category-radio" // This remains the same for category filtering
                style={{ boxShadow: 'none' }} // This removes any default shadow that might appear.
                className="w-4 h-4 cursor-pointer text-blue-600 outline-none border-none rounded-full bg-gray-100 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700"
                // Set defaultChecked for the first category item
                defaultChecked={index === 1} // Index 1 for "All" in categories
              />
              <label
                htmlFor={`radio-category-${index}`}
                className="text-sm cursor-pointer font-medium text-gray-900 dark:text-gray-600"
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
