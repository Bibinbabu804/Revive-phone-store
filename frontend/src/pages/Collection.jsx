import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import ProductItem from '../components/ProductItem';
import 'aos/dist/aos.css';
import Newsletter from '../components/Newsletter';

const SkeletonProductItem = () => (
  <div className="animate-pulse flex flex-col items-center bg-gray-200 rounded-lg p-4">
    <div className="w-full h-32 bg-gray-300 rounded mb-4"></div>
    <div className="h-4 w-3/4 bg-gray-300 rounded mb-2"></div>
    <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
  </div>
);

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [loading, setLoading] = useState(true);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relavent');

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case 'high-low':
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();

    // Extended skeleton loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust time (2000 ms = 2 seconds) as needed

    return () => clearTimeout(timer); // Clean up timer on component unmount
  }, [category, subCategory, search, showSearch]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div>
      <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
        {/* Filter options */}
        <div className='min-w-60 bg-white p-4 shadow-md rounded-md'>
          <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2 font-semibold'>
            FILTERS
            <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
          </p>

          {/* Category filters */}
          <div className={`border-t border-gray-200 pl-4 py-3 mt-4 ${showFilter ? '' : 'hidden'} sm:block`}>
            <p className='mb-2 text-sm font-medium text-gray-800'>Brands</p>
            <div className="flex flex-col gap-2 text-sm text-gray-600">
              {['Apple', 'Samsung', 'Pixel'].map((brand) => (
                <label key={brand} className='flex items-center gap-2 cursor-pointer'>
                  <input className='w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500' type="checkbox" onChange={toggleCategory} value={brand} />
                  {brand}
                </label>
              ))}
            </div>
          </div>

          {/* SubCategory filters */}
          <div className={`border-t border-gray-200 pl-4 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
            <p className='mb-2 text-sm font-medium text-gray-800'>Categories</p>
            <div className="flex flex-col gap-2 text-sm text-gray-600">
              {['Phone', 'Tablet', 'Laptop'].map((sub) => (
                <label key={sub} className='flex items-center gap-2 cursor-pointer'>
                  <input className='w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500' type="checkbox" onChange={toggleSubCategory} value={sub} />
                  {sub}
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="flex-1">
          <div className="flex justify-between text-base sm:text-2xl mb-4">
            <h2 className="font-bold text-gray-800" data-aos="fade-up">ALL COLLECTIONS</h2>
            <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-3 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'>
              <option value="relavent">Sort by: Latest</option>
              <option value="low-high">Sort by: Low-high</option>
              <option value="high-low">Sort by: High-Low</option>
            </select>
          </div>

          {/* Map products or show skeleton */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {loading
              ? Array(8).fill(0).map((_, index) => <SkeletonProductItem key={index} />)
              : filterProducts.map((item, index) => (
                  <div key={index}>
                    <ProductItem
                      name={item.name}
                      id={item._id}
                      price={item.price}
                      image={item.image[0]}
                    />
                  </div>
                ))}
          </div>
        </div>
      </div>

      <div className='my-20'>
        <Newsletter />
      </div>
    </div>
  );
};

export default Collection;
