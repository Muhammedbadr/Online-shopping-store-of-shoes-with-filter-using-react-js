// FillterPrice.js
import React from 'react';
import DateFilter from './DateFilter'; // Update the path if necessary

const FillterPrice = () => {
  return (
    <div className="px-4 py-2">
      {DateFilter.prices.map((item, index) => (
        <React.Fragment key={index}>
          {item.Title2 ? (
            <h3 className="text-lg font-bold mb-3">{item.Title2}</h3>
          ) : (
            <div className="flex mb-2 space-x-2">
              <input
                id={`radio-price-${index}`}
                type="radio"
                name="price-radio"
                className="w-4 h-4 cursor-pointer"
                defaultChecked={index === 1}
              />
              <label htmlFor={`radio-price-${index}`} className="text-sm cursor-pointer">
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
