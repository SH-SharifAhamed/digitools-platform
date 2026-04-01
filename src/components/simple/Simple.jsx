import React from "react";

const Simple = () => {
  return (
    <div className="container mx-auto px-4 py-2">
      <div className="text-center py-16">
        <h2 className="text-6xl font-extrabold">Simple, Transparent Pricing</h2>
        <p className="text-xl mt-4 text-gray-500">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
        {/* starter of pricing card No-1 */}

        <div className="card w-96 bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          <div className="card-body">
            <h2 className="text-3xl font-bold">Starter</h2>
            <p className="text-[#627382]">Perfect for getting started</p>
            <p className="text-xl mt-4 text-[#627382]">
              <span className="font-bold text-3xl text-black">$0</span>/mo
            </p>
            <ul className="mt-6 flex flex-col gap-2 text-xs">
              {[
                "Access to 10 free tools",
                "Basic templates",
                "Community support",
                "1 project per month",
              ].map((item, i) => (
                <li
                  key={i}
                  className="group/item hover:translate-x-2 transition duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success group-hover/item:scale-110 transition"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-[#627382]">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <button
                className="btn btn-block rounded-[20px] text-white border-none
                bg-linear-to-r from-blue-500 to-purple-500
                transition-all duration-300
                hover:scale-105 hover:shadow-xl
                hover:from-blue-600 hover:to-purple-600
                active:scale-95"
              >
                Get Started Free
              </button>
            </div>
          </div>
        </div>

        {/* Pro of pricing card No-2 */}
        <div className="relative group">
          <div className="absolute inset-0 bg-purple-700 blur-2xl opacity-20 group-hover:opacity-40 transition duration-300"></div>
          <div
            className="relative z-10 card w-96 bg-base-100 shadow-sm bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white
        transition-all duration-300 hover:-translate-y-4 hover:scale-105 hover:shadow-2xl"
          >
            <div className="card-body">
              <span className="absolute -top-2 right-40 p-3 font-bold rounded-3xl badge badge-xs badge-warning transition-transform duration-300 group-hover:scale-150">
                Most Popular
              </span>
              <h2 className="text-3xl font-bold">Pro</h2>
              <p>Best for professionals</p>
              <p className="text-xl mt-2">
                <span className="font-bold text-3xl">$29</span>/Month
              </p>

              <ul className="mt-6 flex flex-col gap-2 text-xs">
                {[
                  "Access to all premium tools",
                  "Unlimited templates",
                  "Priority support",
                  "Unlimited projects",
                  "Cloud synchronization",
                  "Advanced analytics",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="group/item hover:translate-x-2 transition duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 me-2 inline-block text-success group-hover/item:scale-110 transition"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-white">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <button className="btn btn-block rounded-[20px] bg-white border border-purple-500 transition-all duration-300 hover:scale-110 hover:shadow-xl">
                  <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-semibold">
                    Start Pro Trial
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Enterprise of pricing card No-3 */}
        <div className="group relative w-96">
          <div className="absolute inset-0 bg-blue-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

          <div
            className="card relative z-10 bg-base-100 shadow-md rounded-2xl 
               transform transition-all duration-500 ease-out
               hover:-translate-y-4 hover:scale-105 hover:shadow-2xl"
          >
            <div className="card-body">
              <h2 className="text-3xl font-bold group-hover:text-blue-600 transition duration-300">
                Enterprise
              </h2>

              <p className="text-[#627382]">For teams and businesses</p>

              <p className="text-xl mt-4 text-[#627382]">
                <span className="font-bold text-3xl text-black group-hover:text-blue-600 transition">
                  $99
                </span>
                /Month
              </p>

              <ul className="mt-6 flex flex-col gap-2 text-xs">
                {[
                  "Everything in Pro",
                  "Team collaboration",
                  "Custom integrations",
                  "Dedicated support",
                  "SLA guarantee",
                  "Custom branding",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="group/item hover:translate-x-2 transition duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 me-2 inline-block text-success group-hover/item:scale-110 transition"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-[#627382]">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <button
                  className="btn btn-block rounded-[20px] text-white border-none
                bg-linear-to-r from-blue-500 to-purple-500
                transition-all duration-300
                hover:scale-105 hover:shadow-xl
            hover:from-blue-600 hover:to-purple-600
                active:scale-95"
                >
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Simple;
