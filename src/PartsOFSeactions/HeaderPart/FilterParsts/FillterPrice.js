// FillterPrice.js
import React from 'react';
import DateFilter from './DateFillers'; // Ensure the path is correct

const FillterPrice = () => {
  return (
    <div className="px-4 py-2">
      {DateFilter.prices.map((item, index) => (
        <React.Fragment key={index}>
          {/* Check if the current item is a Title */}
          {item.Title2 ? (
            <h3 className="text-lg font-bold mb-3">{item.Title2}</h3> // Correctly checks for Title2
          ) : item.PriceName ? ( // Checks for PriceName
            <div className="flex mb-2 space-x-2">
              <input
                id={`radio-price-${index}`} // Updated to ensure unique IDs
                type="radio"
                name="price-radio" // Changed name to avoid conflict with category radio
                style={{ boxShadow: 'none' }} // This removes any default shadow that might appear.
                className="w-4 h-4 cursor-pointer text-blue-600 outline-none border-none rounded-full bg-gray-100 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700"
                // Set defaultChecked for the first price item
                defaultChecked={index === 1} // Index 9 for "All" under Price
              />
              <label
                htmlFor={`radio-price-${index}`}
                className="text-sm cursor-pointer font-medium text-gray-900 dark:text-gray-600"
              >
                {item.PriceName}
              </label>
            </div>
          ) : null} {/* Ensures we only render PriceName or Title2 */}
        </React.Fragment>
      ))}
    </div>
  );
};

export default FillterPrice;
