import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'


const Sidebar = () => {

 
  return (
    <div className='w-[18%] min-h-screen border-r-2'>

        <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px] '>

            <NavLink className="flex items-center gap-3 border-gray-300 border-r-0 px-3 py-2 rounded-1 " to='/add'>
            <img className='w-5 h-5' src={assets.add_icon} alt="" />

            <p className='hidden md:block '>Add items</p>


            </NavLink>


            <NavLink className="flex items-center gap-3 border-gray-300 border-r-0 px-3 py-2 rounded-1 " to='/list'>
            <img className='w-5 h-5' src={assets.order_icon} alt="" />

            <p className='hidden md:block '>List Items</p>


            </NavLink>


            <NavLink className="flex items-center gap-3 border-gray-300 border-r-0 px-3 py-2 rounded-1 " to='/orders'>
            <img className='w-5 h-5' src={assets.order_icon} alt="" />

            <p className='hidden md:block '>Orders</p>


            </NavLink>



            
            <NavLink className="flex items-center gap-3 border-gray-300 border-r-0 px-3 py-2 rounded-1 " to='/chat'>
            <img className='w-5 h-5' src='https://e7.pngegg.com/pngimages/29/305/png-clipart-facebook-messenger-computer-icons-others-miscellaneous-angle.png' alt="" />

            <p className='hidden md:block '>Enquiry</p>


            </NavLink>

            
            <NavLink className="flex items-center gap-3 border-gray-300 border-r-0 px-3 py-2 rounded-1 " to='/analytics'>
            <img className='w-5 h-5' src='https://png.pngtree.com/png-clipart/20230425/original/pngtree-analytics-line-icon-png-image_9096205.png' alt="" />

            <p className='hidden md:block '>Analytics</p>


            </NavLink>

            



        </div>




    </div>
  )
}

export default Sidebar