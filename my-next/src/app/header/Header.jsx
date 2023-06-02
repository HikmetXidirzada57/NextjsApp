import React from 'react'
import Link  from 'next/link'
const Header = () => {
  return (
    <div className="container mx-auto p-5 bg-gray-600">
    <header className='header'>
        <nav className='flex flex-wrap
          items-center
          justify-between
          rounded-full
          w-full
          py-4
          md:py-0
          px-4
          text-lg text-gray-700
          bg-white'>
        <div className="logo">
            <Link href='/'>
            <img
             width="70"
             height="70"
             className="bg-mint text-mint fill-current rounded"
            src="https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/06/shopping-online.jpg" alt="shopping image" />
            </Link>
          
        </div>
        <div className="left-side">
            <ul className='text-base text-gray-700
              pt-4
              md:flex
              md:justify-between
              md:pt-0'>
                <li>
                  <Link className='md:p-4 py-2 block hover:text-purple-400' href='/about'>About</Link>
                </li>
                <li className="md:p-4 py-2 block hover:text-purple-400">
                 <Link href='/shop'>Shop</Link>
               </li>
                <li className="md:p-4 py-2 block hover:text-purple-400">
                   <Link href='/contact'>Contact</Link>
                </li>
            
            </ul>
           
        </div>
        </nav>

    </header>
    </div>

  )
}

export default Header