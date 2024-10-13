import React from 'react'
import FillterPrice from '../PartsOFSeactions/HeaderPart/FilterParsts/FillterPrice'
import FillterColors from '../PartsOFSeactions/HeaderPart/FilterParsts/FillterColors'
import CategoryFillter from '../PartsOFSeactions/HeaderPart/FilterParsts/CategoryFillter'
const  Fillters = () => {
  return (
    <div className=''>
      <h1 className='font-bold text-gray-800 text-2xl'>Filltr</h1> 
      <div className='text-center'>
            <CategoryFillter/>
            <FillterPrice/>
            <FillterColors/>
      </div>
    </div>
  )
}

export default Fillters

