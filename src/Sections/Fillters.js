import React from 'react';
import CategoryFillter from '../PartsOFSeactions/HeaderPart/FilterParsts/CategoryFillter';
import FillterPrice from '../PartsOFSeactions/HeaderPart/FilterParsts/FillterPrice';
import FillterColors from '../PartsOFSeactions/HeaderPart/FilterParsts/FillterColors';

const Filters = ({ onCategoryChange, onPriceChange, onColorChange }) => {
  return (
    <div>
      <h1 className="font-bold text-gray-800 text-2xl">Filter</h1>
      <div className="text-center">
        <CategoryFillter onCategoryChange={onCategoryChange} />
        <FillterPrice onPriceChange={onPriceChange} />
        <FillterColors onColorChange={onColorChange} />
      </div>
    </div>
  );
};

export default Filters;
