"use client"
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { GrContact } from "react-icons/gr";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { FaShop } from "react-icons/fa6";
const Navbar = () => {
  
  return (
    <div class="navbar bg-zinc-900 bg-opacity-75 sticky top-0 border-b-4 border-b-blue-600 z-10">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabindex="0"
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 shadow">
        <li className="flex justify-center items-center"><a>Services <MdOutlineMiscellaneousServices size={20} /></a></li>
        <div className="divider"></div>
        <li  className="flex justify-center items-center"><a>Contact Us<GrContact size={20}/></a></li>
      </ul>
    </div>
    
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <a class="btn btn-ghost text-xl flex items-center justify-center"><FaShop size={30}/>GrocerBuy</a>
      
    </ul>
  </div>
  <div class="navbar-end">
    <a class="btn">Login</a>
  </div>
</div>
  );
};

export default Navbar;
