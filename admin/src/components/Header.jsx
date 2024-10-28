import React from 'react'
import {assets} from "../assets/assets"

const Header = ({setToken}) => {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>

        <img className='w-[max(10%,80px)]' src={assets.main_logo} alt="" />
        <button onClick={()=> setToken('') } className='bg-red-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded text-xs sm:text-sm'>Logout</button>




    </div>
  )
}

export default Header
