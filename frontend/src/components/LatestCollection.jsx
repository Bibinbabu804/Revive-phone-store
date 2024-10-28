import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';
import AOS from 'aos';
import 'aos/dist/aos.css';

const LatestCollection = () => {
    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        setLatestProducts(products.slice(0, 15));
        AOS.init({ duration: 1000 }); // Initialize AOS animations
    }, [products]); // Add products as a dependency to update when products change

    return (
        <div style={{ marginTop: '10%' }} className='my-20'>
            <div className="text-center py-8 text-3xl" data-aos="fade-up">
                <h1 style={{fontFamily:"serif"}}>Latest Collections</h1>
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                 
                </p>
            </div>

            {/* Rendering products */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {latestProducts.map((item, index) => (
                    <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                        <ProductItem
                            id={item._id}
                            image={item.image[0]}
                            name={item.name}
                            price={item.price}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LatestCollection;
