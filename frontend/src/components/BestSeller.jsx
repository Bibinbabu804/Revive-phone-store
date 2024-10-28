import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';

import ProductItem from './ProductItem';
import AOS from 'aos';
import 'aos/dist/aos.css';

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestseller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProducts = products.filter((item) => item.bestseller);
    setBestSeller(bestProducts.slice(0, 5));
  }, [products]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className='my-10'>
      <div className="text-center text-3xl py-8 my-5" data-aos="fade-up">
       <h1  className='' style={{fontFamily:'serif'}}>BESTSELLER</h1>
      
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestseller.map((item, index) => (
          <div key={index} data-aos="zoom-in" data-aos-delay={index * 100}> {/* Each item will have a staggered effect */}
            <ProductItem id={item._id} name={item.name} image={item.image[0]} price={item.price} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
