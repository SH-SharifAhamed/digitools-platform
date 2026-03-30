import React from 'react';
import doted from "../../assets/Group 5.png"
import bannerimg from "../../assets/banner.png"

const Banner = () => {
     return (
       <div className="h-[400px] flex items-center justify-between max-w-5xl mx-auto px-4 my-20">
         <div>
           <div className="badge badge-soft badge-primary rounded-2xl">
             <img src={doted} alt="" />
             <span className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
               New: AI-Powered Tools Available
             </span>
           </div>

           <h1 className="text-4xl font-extrabold mt-4">
             Supercharge Your <br /> Digital Workflow
           </h1>
           <p className="text-lg mt-4 text-[#627382]">
             Access premium AI tools, design assets, templates, and productivity{" "}
             <br />
             software—all in one place. Start creating faster today. <br />
             Explore Products
           </p>
           <div className="mt-4 flex gap-4">
             <button className="btn btn-primary rounded-[20px]">Primary</button>
             <button className="btn btn-outline btn-primary rounded-[20px]">Primary</button>
           </div>
         </div>

               <div>
               <img src={bannerimg} alt="Banner" className="w-[500px] h-[400px]" />
         </div>
       </div>
     );
};

export default Banner;