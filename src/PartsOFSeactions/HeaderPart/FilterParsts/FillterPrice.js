import React, { useState } from 'react';
import DateFilter from './DateFilter'; // Ensure the path is correct

const FillterPrice = ({ onPriceChange }) => {
  const [selectedPrice, setSelectedPrice] = useState(DateFilter.prices[1]?.PriceName || '');

  const handlePriceChange = (priceName) => {
    setSelectedPrice(priceName);
    if (onPriceChange) {
      onPriceChange(priceName); // Pass the selected price range back to the parent
    }
  };

  return (
    <div className="px-4 py-2">
      {DateFilter.prices.map((item, index) => (
        <React.Fragment key={index}>
          {item.Title2 ? (
            <h3 className="text-lg font-bold mb-3">{item.Title2}</h3>
          ) : (
            <div className="flex mb-2 space-x-2">
              <input
                id={`radio-price-${index}`} // Unique ID for each radio button
                type="radio"
                name="price-radio"
                className="w-4 h-4 cursor-pointer text-blue-600 outline-none border-none rounded-full bg-gray-100"
                checked={selectedPrice === item.PriceName} // Check if the current item is selected
                onChange={() => handlePriceChange(item.PriceName)} // Update state and notify parent on change
              />
              <label
                htmlFor={`radio-price-${index}`} // Associate the label with the radio input
                className="text-sm cursor-pointer font-medium text-gray-900"
              >
                {item.PriceName}
              </label>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default FillterPrice;
