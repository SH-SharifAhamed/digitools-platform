import React from 'react';

const Premium = () => {
     return (
       <div className="container mx-auto py-10">
         <div className="text-center">
           <h2 className="text-5xl font-extrabold">Premium Digital Tools</h2>
           <p className="text-[#627382] mt-4">
             Choose from our curated collection of premium digital products
             designed <br /> to boost your productivity and creativity.{" "}
           </p>
           <div className="flex gap-4 justify-center mt-4">
             <button className="font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white px-4 py-2 rounded-[20px]">
               Products
             </button>
             <button className="font-bold  text-[#25065D] px-4 py-2 rounded-[20px]">
               Cart
             </button>
           </div>
         </div>
         <div></div>
       </div>
     );
};

export default Premium;


