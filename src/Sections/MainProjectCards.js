import React from 'react';
import ProductCard from './ProductCard'; // Import ProductCard component
import Image1 from '../Images/—Pngtree—blue running shoes_16400659.png'; // Import your image
import Image2 from '../Images/—Pngtree—sneakers running fashion sports shoe_16213982.png'; // Import your image
import Image3 from '../Images/pngwing.com (3).png'; // Import your image
import Image4 from '../Images/pngwing.com (4).png'; // Import your image
import Image5 from '../Images/pngwing.com (5).png'; // Import your image
import Image6 from '../Images/pngwing.com (6).png'; // Import your image
import Image7 from '../Images/pngwing.com (7).png'; // Import your image
import Image8 from '../Images/pngwing.com (8).png'; // Import your image
import Image9 from '../Images/pngwing.com.png'; // Import your image
import Image10 from '../Images/—Pngtree—dropshipping men hole sole jogging_14339669 (10).png'; // Import your image
// Import your image Import your image

const MainProjectCards = () => {
  const products = [
    {
      title: 'ADIDS Basketball 23C5',
      originalPrice: 32400,
      discountedPrice: 31399,
      image: Image2
    }, {
      title: 'ADIDS Basketball 23C5 Kids',
      originalPrice: 32320,
      discountedPrice: 93239,
      image: Image10
    }, {
      title: 'MFSC Running 32G',
      originalPrice: 8723,
      discountedPrice: 2330,
      image: Image1
    }, {
      title: 'NIKE Walking LDS ',
      originalPrice: 76003,
      discountedPrice: 4320,
      image: Image4
    }, {
      title: 'MGNF Running 3227 FK',
      originalPrice: 23500,
      discountedPrice: 4350,
      image: Image5
    }, {
      title: 'Platform M_Black',
      originalPrice: 33333,
      discountedPrice: 11111,
      image: Image6
    }, {
      title: 'Scribin Bong',
      originalPrice: 11300,
      discountedPrice: 9950,
      image: Image7
    }, {
      title: 'Snwey Boot 4x4',
      originalPrice: 11020,
      discountedPrice: 1050,
      image: Image8
    }, {
      title: 'NIKE Walking LDS',
      originalPrice: 4343,
      discountedPrice: 1212,
      image: Image9
    }, {
      title: 'NIKE GF87 ',
      originalPrice: 12002,
      discountedPrice: 334,
      image: Image3
    }
  ];

  return (
    <div className=''>
      {/* Categories List - Displayed Once */}

      <div className='border-b mb-2 px-3 flex justify-between'>
        <div>
          <h1 className="font-bold text-gray-800 text-2xl ">Rcommended</h1>
        </div>
        <div className=" pb-4 font-normal">
          <ul className="flex space-x-3">
            <button >
              <li className="px-4 rounded-full py-1 bg-gray-100">Man</li>
            </button>
            <button >
              <li className="px-4 rounded-full py-1 bg-gray-100">Woman</li>
            </button >
            <button >

              <li className="px-4 rounded-full py-1 bg-gray-100">Kids Boy</li>
            </button>
            <button>

              <li className="px-4 rounded-full py-1 bg-gray-100">Kids Girl</li>
            </button>
          </ul>
        </div>
        <div>
          <a href="">
            <p className="cursor-pointer hover:underline ">See All</p>
          </a>
        </div>
      </div>

      {/* Product Cards Grid */}
      <div
        className='grid my-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 place-items-center'>
        {products.map((product, index) => (<ProductCard
          key={index}
          title={product.title}
          originalPrice={product.originalPrice}
          discountedPrice={product.discountedPrice}
          Image={product.image}/>))}
      </div>
    </div>
  );
}

export default MainProjectCards;
