import React from "react";
import { SearchIcon, ShoppingCartIcon, MenuIcon } from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { logout, selectUser } from "../features/UserSlice";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { selectItems } from "../features/basketSlice";

export default function Header() {
  const user = useSelector(selectUser);
  const items=useSelector(selectItems);
  console.log(items);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    signOut(auth);
    dispatch(logout());
  };

  const toHome = () => {
    navigate("/");
  };
  return (
    <div>
      {/* Header top */}
      <div className="flex items-center bg-amazon_blue-light p-1 flex-grow py-2">
        {/* logo */}
        <img
          onClick={toHome}
          className="h-10 mx-2 mt-2 hover:cursor-pointer"
          src="https://links.papareact.com/f90"
          alt=""
        />
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0"></div>

        {/* search bar which is hiiden in mobile and visible in large scren */}
        <div className="hidden md:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <input
            className="p-2 h-full w-6 flex-grow rounded-l-md rounded-r-none flex-shrink outline-none px-4"
            type="text"
          />
          <SearchIcon className="h-12 p-4 text-black" />
        </div>

        {/* right section */}
        <div className="text-white p-1 flex items-center text-xs space-x-5  mx-6 whitcursor-pointer espace-nowrap">
          <div className="link">
            <p className="font-bold">Hello {user.displayName}</p>
            <p className="font-bold md:text-sm ">Account & List</p>
          </div>

          <div className="link  md:inline">
            <p className="font-bold">Returns</p>
            <p className="font-bold md:text-sm">& orders</p>
          </div>

          <div
            onClick={() => navigate("/checkout")}
            className="relative link flex items-center"
          >
            <span className="absolute top-0 right-0  md:right-8 h-4 w-4 bg-yellow-400 text-center text-black font-bold rounded-full">
              {items.length}
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-bold md:text-sm mt-2 ">Cart</p>
          </div>

          <div className="relative link flex items-center">
            <svg
              onClick={handleLogout}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="p-2 bg-amazon_blue-light">
      <div className="flex items-center h-10  rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500 md:hidden">
          <input
            className="p-2 h-full w-6 flex-grow  rounded-l-md outline-none px-4"
            type="text"
          />
          <SearchIcon className="h-12 p-4 text-black" />
        </div>
        </div>
      {/* Header Bottom */}
      <div className="flex items-center bg-amazon_blue space-x-3 p-2 pl-6 text-white text d-sm-grid">
        <MenuIcon className="sm:inline h-6 mr-1 link md:hidden" />
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
