import React from 'react';
import addCard from "../../assets/products/shopping-cart.png";



const Navbar = ({ cart }) => {
     return (
       <div className="navbar bg-base-100 shadow-sm max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="navbar-start">
           <div className="flex items-center gap-2 cursor-pointer">
             <p className="font-bold text-3xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent py-2">
               DigiTools
             </p>
           </div>
         </div>

         <div className="navbar-center">
           <a className="flex gap-0.5 text-xl">
             <p className="btn btn-ghost">Products</p>
             <p className="btn btn-ghost">Features</p>
             <p className="btn btn-ghost">Pricing</p>
             <p className="btn btn-ghost">Testimonials</p>
             <p className="btn btn-ghost">FAQ</p>
           </a>
         </div>

         <div className="flex items-center gap-4 navbar-end">
           <button className="relative btn btn-ghost btn-circle">
             <img src={addCard} alt="Add Card" className="h-5 w-5" />
             <span className="absolute top-0 right-0 text-xs font-bold bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center">
               {cart}
             </span>
           </button>
           <button className="btn btn-ghost ">Login</button>
           <button className="btn btn-ghost bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white px-4 py-2 rounded-[20px]">
             Get Started
           </button>
         </div>
       </div>
     );
};

export default Navbar;

