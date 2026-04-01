import React from "react";

const Workflow = () => {
  return (
    <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-12 px-2 sm:px-6 lg:px-6 text-center">
      <div className="max-w-6xl mx-auto px-2">
        <h1 className="sm:text-3xl md:text-4xl lg:text-[40px]  text-white font-extrabold text-center mt-6 leading-tight">
          Ready to Transform Your Workflow?
        </h1>
        <p className="text-center mt-4 text-white sm:text-sm md:text-base lg:text-sm">
          Join thousands of professionals who are already using Digitools to
          work smarter. <br /> Start your free trial today.
        </p>
      </div>
      <div className="mt-6 flex sm:flex-row justify-center items-center gap-3 sm:gap-4">
        <button
          className="btn rounded-[20px] transition-all duration-300 ease-in-out
  hover:scale-105 hover:-translate-y-1 hover:shadow-2xl
  hover:from-[#5b47ff] hover:to-[#a855f7]"
        >
          Explore Products
        </button>
        <button
          className="btn btn-outline rounded-[20px] text-white border-white transition-all duration-300 ease-in-out
  hover:bg-white hover:text-black hover:scale-105 hover:shadow-lg"
        >
          Watch Demo
        </button>
      </div>
      <p className="text-white mt-4 text-xs sm:text-sm md:text-base px-2">
        14-day free trial • No credit card required • Cancel anytime
      </p>
      
    </div>
  );
};

export default Workflow;
