// CategoryFilter.js
import React from 'react';
import DateFilter from './DateFilter'; // Ensure the path is correct

const CategoryFilter = () => {
  return (
    <div className="px-4 py-2">
      {DateFilter.categories.map((item, index) => (
        <React.Fragment key={index}>
          {item.Title ? (
            <h3 className="text-lg font-bold mb-3">{item.Title}</h3>
          ) : (
            <div className="flex mb-2 space-x-2">
              <input
                id={`radio-category-${index}-cat`} // Ensure unique IDs for category
                defaultChecked={index === 1}
                type="radio"
                name="category-radio"
                className="w-4 h-4 cursor-pointer text-blue-600 outline-none border-none rounded-full bg-gray-100"
              />
              <label
                htmlFor={`radio-category-${index}-cat`}
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
