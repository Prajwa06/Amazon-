import React from "react";
import {SearchIcon ,ShoppingCartIcon,MenuIcon} from '@heroicons/react/solid'


export default function Header() {
  return (
    <div>
      {/* Header top */}
      <div className="flex items-center bg-amazon_blue-light p-1 flex-grow py-2">
        {/* logo */}
        <img className="h-10 mx-2 mt-2" src="https://links.papareact.com/f90" alt="" />
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0"></div>

        {/* search bar which is hiiden in mobile and visible in large scren */}
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <input
            className="p-2 h-full w-6 flex-grow rounded-l-md rounded-r-none flex-shrink outline-none px-4"
            type="text"
          />
          <SearchIcon className='h-12 p-4 text-black'/>
        </div>

        {/* right section */}
        <div className="text-white p-1 flex items-center text-xs space-x-5  mx-6 whitcursor-pointer espace-nowrap">
          <div className="link">
            <p className="font-bold">Hello User</p>
            <p className="font-bold md:text-sm ">Account & List</p>
          </div>

          <div className="link">
            <p className="font-bold">Returns</p>
            <p className="font-bold md:text-sm">& orders</p>
          </div>

          <div className="relative link flex items-center">
            <span className="absolute top-0 right-0  md:right-8 h-4 w-4 bg-yellow-400 text-center text-black font-bold rounded-full">
              0
            </span>
            <ShoppingCartIcon className='h-10'/>
            <p className="hidden md:inline font-bold md:text-sm mt-2 ">Cart</p>
          </div>
        </div>
      </div>
      {/* Header Bottom */}
      <div className="flex items-center bg-amazon_blue space-x-3 p-2 pl-6 text-white text d-sm-grid">
      <MenuIcon className='sm:inline h-6 mr-1 link md:hidden' />
        <p className="link">Prime Video</p>
        <p className="link">Amazon Businness</p>
        <p className="link">Today's Deal</p>
        <p className="link hidden lg:inline-flex ">Electronics</p>
        <p className="link hidden lg:inline-flex ">Food & Grocery</p>
        <p className="link hidden lg:inline-flex ">Prime</p>
        <p className="link hidden lg:inline-flex ">Buy Again</p>
        <p className="link hidden lg:inline-flex ">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex ">Health & Personal Care</p>
      </div>
    </div>
  );
}
