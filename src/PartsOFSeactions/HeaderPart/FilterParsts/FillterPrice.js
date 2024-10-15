import React from 'react';
import DateFilter from './DateFilter'; // Ensure the path is correct

const FillterPrice = ({ handleChange, selectedPrice }) => {
  return (
    <div className="px-4 py-2">
      {DateFilter.prices.map((item, index) => (
        <React.Fragment key={index}>
          {item.Title2 ? (
            <h3 className="text-lg font-bold mb-3">{item.Title2}</h3>
          ) : (
            <div className="flex mb-1 space-x-2">
              <input
                id={`radio-price-${index}`} // Make sure this ID is unique
                type="radio"
                onChange={handleChange} // Pass the selected value to the handler
                value={item.value} // Use the value from DateFilter
                title={item.title} // Use the title from DateFilter
                name={item.name} // Use the name from DateFilter
                className="w-4 h-4 cursor-pointer text-blue-600 outline-none border-none rounded-full bg-gray-100"
                defaultChecked={index === 1 || selectedPrice === item.PriceName} // Default checked item
              />
              <label
                htmlFor={`radio-price-${index}`} // Match with the input ID
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
