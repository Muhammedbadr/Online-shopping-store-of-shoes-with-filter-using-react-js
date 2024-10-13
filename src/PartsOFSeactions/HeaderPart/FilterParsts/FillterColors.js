
import React from 'react'
import DateFilter from './DateFilter'; // Ensure the path is correct

const FillterColors = () => {
  return (
    <div className="px-4 py-2">
      {DateFilter.ColorLensSharp.map((item, index) => (
        <React.Fragment key={index}>
          {item.Title3 ? (
            <h3 className="text-lg font-bold mb-3">{item.Title3}</h3>
          ) : (
            <div className="flex mb-1 space-x-2">
              <input
                id={`radio-category-${index}-color`} // Ensure unique IDs for colors
                type="radio"
                name="color-radio" // Use a different name for color filtering
                className="w-4 h-4 cursor-pointer text-blue-600 outline-none border-none rounded-full bg-gray-100"
                defaultChecked={index === 1}
              />
              <label
                htmlFor={`radio-category-${index}-color`}
                className="text-sm cursor-pointer font-medium text-gray-900"
              >
                {item.ColorName}
              </label>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
export default FillterColors;
