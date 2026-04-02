// import React from "react";
import React, { useState, useEffect } from "react";
import AvailablePremium from "./AvailablePremium";
import Cart from "../cart/Cart";




const Premium = ({
  premiumPromise,
  setCartCount,
  selectedItems,
  setSelectedItems,
}) => {
  const [premium, setPremium] = useState([]);

  useEffect(() => {
    premiumPromise.then((data) => setPremium(data));
  }, [premiumPromise]);

  const [selectedTool, setSelectedTool] = useState("available");

  return (
    <div className="container mx-auto py-10">
      <div className="text-center">
        <h2 className="text-5xl font-extrabold">Premium Digital Tools</h2>

        <p className="text-[#295881] mt-4">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.{" "}
        </p>

        <div className="flex gap-4 justify-center mt-4">
          <button
            className={`btn ${selectedTool === "available" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : "bg-gray-100"} rounded-[20px] font-bold text-[#25065D] px-4 py-2`}
            onClick={() => setSelectedTool("available")}
          >
            Products
          </button>
          <button
            className={`btn ${selectedTool === "cart" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : "bg-gray-100"} rounded-[20px] font-bold text-[#25065D] px-4 py-2`}
            onClick={() => setSelectedTool("cart")}
          >
            Cart ({selectedItems.length})
          </button>
        </div>
      </div>

      {selectedTool === "available" ? (
        <h2></h2>
      ) : (
        <h2 className="text-2xl font-extrabold max-w-5xl mx-auto">Your Cart</h2>
      )}

      <div className="container mx-auto mt-10">
        {selectedTool === "available" ? (
          <AvailablePremium
            premium={premium}
            setCartCount={setCartCount}
            setSelectedItems={setSelectedItems}
            selectedItems={selectedItems}
          />
        ) : (
          <Cart
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
            setCartCount={setCartCount}
          />
        )}
      </div>
    </div>
  );
};

export default Premium;
