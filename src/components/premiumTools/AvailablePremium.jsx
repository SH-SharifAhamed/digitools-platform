import React from "react";
import { toast } from "react-toastify";

const AvailablePremium = ({
  premium,
  setCartCount,
  setSelectedItems,
  selectedItems,
}) => {
  const getBadgeColor = (badge) => {
    switch (badge) {
      case "Best Seller":
        return "badge-warning";
      case "Popular":
        return "badge-primary";
      case "New":
        return "badge-success";
      default:
        return "badge-neutral";
    }
  };

  const handleAddToCart = (item) => {
    const exists = selectedItems.some((i) => i.id === item.id);

    if (!exists) {
      setSelectedItems([...selectedItems, item]);
      setCartCount((prev) => prev + 1);

      toast.success("Item added to cart");
    } else {
      toast.warning("Already added");
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {premium.map((item) => {
          return (
            <div className="group relative w-96">
              <div className="absolute inset-0 bg-blue-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div
                className="card relative z-10 bg-base-100 shadow-md rounded-2xl 
                                        transform transition-all duration-500 ease-out
                                        hover:-translate-y-4 hover:scale-105 hover:shadow-2xl"
              >
                <span
                  className={`absolute top-2 right-2 p-2 font-bold rounded-3xl badge badge-xs transition-transform duration-300 group-hover:scale-100 ${getBadgeColor(item.badge)}`}
                >
                  {item.badge}
                </span>
                <div className="card-body">
                  <img
                    className=" p-10 w-30"
                    src={item.icon}
                    alt={item.title}
                  />
                  <h2 className="text-3xl font-bold group-hover:text-blue-600 transition duration-300">
                    {item.title}
                  </h2>

                  <p className="text-[#627382]">{item.description}</p>

                  <p className="text-xl mt-4 text-[#627382]">
                    <span className="font-bold text-3xl text-black group-hover:text-blue-600 transition">
                      {item.price}
                    </span>
                    /Month
                  </p>

                  <ul className="mt-6 flex flex-col gap-2 text-xs">
                    {item.features.map((feature, i) => (
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
                        <span className="text-[#627382]">{feature}</span>
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
                      onClick={() => handleAddToCart(item)}
                      disabled={selectedItems.some((i) => i.id === item.id)}
                    >
                      {selectedItems.some((i) => i.id === item.id)
                        ? "Added to Cart"
                        : "Buy Now"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AvailablePremium;
