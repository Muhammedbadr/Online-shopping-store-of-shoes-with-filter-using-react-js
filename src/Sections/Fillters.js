import React from 'react';
import CategoryFillter from '../PartsOFSeactions/HeaderPart/FilterParsts/CategoryFillter';
import FillterPrice from '../PartsOFSeactions/HeaderPart/FilterParsts/FillterPrice'
import FillterColors from '../PartsOFSeactions/HeaderPart/FilterParsts/FillterColors';

// Filters.js

const Filters = ({ handleChange }) => {
  return (
    <div>
      <h1 className="font-bold text-gray-800 text-2xl">Filter</h1>
      <div className="text-center">
        <CategoryFillter handleChange={handleChange} />
        <FillterPrice handleChange={handleChange} />
        <FillterColors handleChange={handleChange} />
      </div>
    </div>
  );
};



export default Filters;
