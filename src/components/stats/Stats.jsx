import React from 'react';

const Stats = () => {
     return (
       <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-20">
         <div className="grid grid-cols-7 max-w-6xl justify-center mx-auto">
           <div></div>
           <div className="col-span-1">
             <h2 className="text-6xl font-extrabold text-white">50K+</h2>
             <p className="text-white text-2xl">Active Users</p>
           </div>
           <div className="h-full w-0.5 bg-white mx-auto"></div>
           <div className="col-span-1">
             <h2 className="text-6xl font-extrabold text-white">200+</h2>
             <p className="text-white text-2xl">Premium Tools</p>
           </div>
           <div className="h-full w-0.5 bg-white mx-auto"></div>
           <div className="col-span-1">
             <h2 className="text-6xl font-extrabold text-white">4.9</h2>
             <p className="text-white text-2xl">Rating</p>
           </div>
           <div></div>
         </div>
       </div>
     );
};

export default Stats;