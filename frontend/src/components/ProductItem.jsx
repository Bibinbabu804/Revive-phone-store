import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';
// Import FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link className="cursor-pointer block group" to={`/product/${id}`}>
      {/* Product container with box design */}
      <div className="bg-white rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden">
        
        {/* Product Image */}
        <div className="overflow-hidden">
          <img
            width={'100%'}
            className="transition-transform duration-500 transform group-hover:scale-110 w-full h-68 object-cover"
            src={image}
            alt={name}
          />
        </div>
        
        {/* Product Info (Name, Rating, and Price) */}
        <div className="p-4 text-center">
          {/* Product Name */}
          <p className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover:text-gray-600">
            {name}
          </p>
          
          {/* Star Rating */}
          <p className="flex justify-center items-start mt-1">
            <span className="text-yellow-500">
            <span className="text-gray-600 ml-2 text-sm">4.3  </span>
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} /> 
              <FontAwesomeIcon icon={faStar} className="opacity-50" />
            </span>
            
          </p>

          {/* Product Price */}
          <h2 style={{ fontSize: '25px', fontFamily: 'fancy' }} className="text-md font-medium text-gray-700 mt-2">
             {currency} {price}
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
