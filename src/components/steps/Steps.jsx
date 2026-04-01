import React from "react";
import user from "../../assets/user.png";
import packageicon from "../../assets/package.png";
import rocket from "../../assets/rocket.png";

const Steps = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 my-6">
      <div>
        <h2 className="text-5xl font-bold text-center">
          Get Started In 3 Steps
        </h2>
        <p className="text-center text-[#627382] mt-4">
          Start using premium digital tools in miniutes, not hours.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 text-center items-center justify-between">
        {/* card no 1 */}
        <div
          className="relative items-center gap-4 mt-10 border border-[#4f39f647] rounded-lg p-4
          hover:shadow-xl hover:scale-[1.02] hover:border-[#1600b9] 
          transition-all duration-300 cursor-pointer"
        >
          <button className="btn btn-circle absolute top-2 right-6 bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
            01
          </button>

          <div className="avatar">
            <div className="w-24 rounded-full p-3 bg-[#4f39f647]">
              <img src={user} alt="" />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Create account</h3>
            <p className="text-[#627382]">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>
        </div>

        {/* card no 2 */}
        <div
          className="relative items-center gap-4 mt-10 border border-[#4f39f647] rounded-lg p-4
               hover:shadow-xl hover:scale-[1.02] hover:border-[#4F39F6] 
               transition-all duration-300 cursor-pointer"
        >
          <button className="btn btn-circle absolute top-2 right-6 bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
            02
          </button>

          <div className="avatar">
            <div className="w-24 rounded-full p-3 bg-[#4f39f647]">
              <img src={packageicon} alt="" />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Create account</h3>
            <p className="text-[#627382]">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>
        </div>

        {/* card no 3 */}
        <div
          className="relative items-center gap-4 mt-10 border border-[#4f39f647] rounded-lg p-4
               hover:shadow-xl hover:scale-[1.02] hover:border-[#4F39F6] 
               transition-all duration-300 cursor-pointer"
        >
          <button className="btn btn-circle absolute top-2 right-6 bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
            03
          </button>

          <div className="avatar">
            <div className="w-24 rounded-full p-4 bg-[#4f39f647]">
              <img src={rocket} alt="" />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Create account</h3>
            <p className="text-[#627382]">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
