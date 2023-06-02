import React from 'react'
import Product from '../products/Product'

const page = () => {
  return (
<div className='container'>
  <div class="relative p-3">
  <input type="text" placeholder="Search" class="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 p-3"/>
  <button class="absolute right-2 top-2 text-gray-500 hover:text-gray-700 focus:outline-none">  
  </button>
</div>
      <div className="flex flex-wrap">
      <Product/>
      <Product/>
      <Product/>
      </div>
    </div>
  )
}

export default page
