import React from 'react';
import { FaShoppingBasket, FaRegHeart } from "react-icons/fa";

const ProductCard = ({ title, originalPrice, discountedPrice, Image }) => {
  return (
   
      

      <div className='relative  mb-6 w-72 h-64 rounded-xl bg-[#edf1f0] shadow-lg p-4 flex flex-col justify-between transform transition-transform duration-300 hover:scale-105 hover:shadow-xl'>

        {/* Title and Price */}
        <div className='text-[#333333] pt-2 pl-2 z-10'>
          <h3 className='font-bold text-left text-xl mb-1'>{title}</h3>
          <p className='text-left'>
            <span className="line-through text-gray-500">${originalPrice}</span>
            <span className="ml-2 text-[#414141] font-bold">${discountedPrice}</span>
          </p>
        </div>

        {/* Image */}
        <div className='absolute bottom-14 right-0 z-0'>
          <img
            className='w-44 h-40 object-cover rounded-md'
            src={Image}
            alt={`Product image of ${title}`} // Improved alt text for accessibility
          />
        </div>

        {/* Action Buttons */}
        <div className='flex justify-center gap-4 items-center relative z-10'>

          {/* Add to Cart */}
          <div
            className='flex items-center space-x-4 bg-white text-[#333333] px-5 py-2 rounded-full font-semibold cursor-pointer hover:bg-gray-300'>
            <span>Add To Cart</span>
            <FaShoppingBasket />
          </div>

          {/* Favorite */}
          <div
            className='flex items-center space-x-2 bg-white text-[#333333] rounded-full p-3 hover:text-red-500 cursor-pointer'>
            <FaRegHeart />
          </div>

        </div>
      </div>
  );
};

export default ProductCard;
