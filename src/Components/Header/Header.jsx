import React from 'react';
import { IoIosSearch } from "react-icons/io";


function Header() {
  return (
    <>
      <div className='bg-blue-800 text-white py-4 px-4 md:px-8 shadow-2xl items-center grid grid-cols-2 md:grid-cols-2'>
        <div><h1 className='md:text-[25px] text-[21px] text-[#fffffff0]'>Gilgit Travels</h1></div>
        <div className='flex justify-end'>
          <div className='flex items-center gap-5'>
          <h1 className='text-[17px] text-[#fffffff0] md:block hidden'>Explore New Places</h1>
          <div className='flex items-center gap-2 p-2 bg-[#ffffff4e] rounded-md'>
            <div className='text-[20px]'><IoIosSearch/></div>
            <input type="text" placeholder='Search place' className='bg-transparent outline-none w-[110px] md:w-[180px]'/>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header