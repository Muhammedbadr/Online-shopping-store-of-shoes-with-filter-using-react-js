import React from 'react';
import DateFilter from './DateFilter'; // Ensure the path is correct

const FillterColors = ({ handleChange, selectedColor }) => {
  return (
    <div className="px-4 py-2">
      {DateFilter.ColorLensSharp.map((item, index) => (
        <React.Fragment key={index}>
          {item.Title3 ? (
            <h3 className="text-lg font-bold mb-3">{item.Title3}</h3>
          ) : (
            <div className="flex mb-1 space-x-2">
              
              <input
                id={`radio-color-${index}`} // Ensure unique IDs for colors
                type="radio"
                onChange={handleChange} // Pass the selected value to the handler
                value={item.value} // Use the value from DateFilter
                title={item.title} // Use the title from DateFilter
                name={item.name} // Use the name from DateFilter
                className={`w-4 h-4 ${item.colorOfRadio} cursor-pointer  outline-none border-none rounded-full bg-gray-100`}
                defaultChecked={index === 1 || selectedColor === item.ColorName} // Default checked logic
              />
              <label
                htmlFor={`radio-color-${index}`} // Match with the input ID
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
