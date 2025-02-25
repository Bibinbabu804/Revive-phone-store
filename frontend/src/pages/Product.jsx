import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';

import { assets } from '../assets/assets';

import SuggestedProducts from '../components/SuggestedProducts';






const Product = () => {
const { productId } = useParams()


   const {products,currency,addtoCart} = useContext(ShopContext)

   const [productData,setProductData] =  useState(false)
   const [size,setSize] =  useState('')

   const [image,setImage] =  useState('')

   const fetchProductData=  async () => {


    products.map((item)=>{

      if(item._id === productId){


        setProductData(item)

        setImage(item.image[0])

        console.log(item);
        
       
        
        return null
      }



    })





   }


     useEffect(()=>{

      fetchProductData()



     },[products])

   
     



  
  
  return productData? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>

      {/* product data  */}

      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
              
              {/* product images  */}

              <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'> 

                <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>


                  {
                    productData.image.map((item,index)=>(

                      <img key={index} onClick={()=>setImage(item)} src={item} alt="" className='w-[24%] sm:w-full flex-shrink-0 cursor-pointer ' />





                    ))





                  }




                </div>
                <div className='w-full sm:w-[80%]'>
                  <img className='w-full h-auto'  src={image} alt="" />

                </div>


              </div>

              {/* product info ............ */}


              <div className='flex-1'>

                <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
                <div className='flex items-center gap-1 mt-2'>

                  <img src={assets.star_icon} className='w-3 5' alt="" />
                  <img src={assets.star_icon} className='w-3 5' alt="" />
                  <img src={assets.star_icon} className='w-3 5' alt="" />
                  <img src={assets.star_icon} className='w-3 5' alt="" />
                  <img src={assets.star_dull_icon} className='w-3 5' alt="" />

                  <p className='pl-2'>(122)</p>



                </div>

                 <p className='mt-5 text-3xl font-medium'> {currency} {productData.price} </p>

                 <p className='mt-5 text-gray-500 md:w-4/5 '>{productData.description}</p>

                 <div className='flex flex-col gap-4 my-8'>

                  <p>STORAGE </p>

                  <div className='flex gap-2'>

                    {productData.sizes.map((item,index)=>(

                      <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-red-600' : ''}`} key={index}> {item} </button>



                    ))}


                  </div>


                 </div>


                 <button style={{backgroundColor:"orange"}} onClick={()=>addtoCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-red-700'>ADD TO CART</button>


                 <hr className=' mt-6 sm:w-4/5' />

                 <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                       
                       <p>100%  original product</p>
                       <p>Cash on delivery is available for this project</p>
                       <p>Easy Return and Exchange policy within 7 days</p>


                 </div>

              </div>


                 




      </div>

        
        {/* description and review section */}

        <div className='mt-20'>

          <div className='flex'>
            <b className='border px-5 py-3 text-sm '>Description</b>
            <p className='border px-5 py-3 text-sm '>Reviews (122)</p>

          </div>

          <div className='flex flex-col gap-4-border px-6 py-6 text-sm text-gray-500'>
               

               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita rerum, id odio non iste adipisci</p>

               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita rerum, id odio non iste adipisci</p>

          </div>


        </div>


         {/* display realated products  */}

      

         <SuggestedProducts category={productData.category} subCategory={productData.subCategory} />
        
         










    </div>
  ):  <div className='opacity-0'>

  </div>
}

export default Product