import React from "react";

const Cart = ({ selectedItems, setSelectedItems, setCartCount }) => {
  const handleRemove = (id) => {
    setSelectedItems((prev) => {
      const updated = prev.filter((item) => item.id !== id);
      setCartCount(updated.length);
      return updated;
    });
     };
     
     const totalPrice = selectedItems.reduce((total, item) => {
       return total + item.price;
     }, 0);

  return (
    <div className="max-w-5xl mx-auto">
      <h2>Cart Items ({selectedItems.length})</h2>
      {selectedItems.map((item) => (
        <div key={item.id} className="flex justify-between items-center">
          <div className="flex gap-6">
            <img src={item.icon} alt={item.title} />
            <div className="flex flex-col left-10">
              <span className="font-bold">{item.title}</span>
              <span className="text-[#627382]">${item.price}</span>
            </div>
          </div>

          <button
            className="btn text-red-500"
            onClick={() => handleRemove(item.id)}
          >
            Remove
          </button>
        </div>
      ))}
      <div className="flex justify-between mt-4">
        <p className="font-bold text-[#627382]">Total:</p>
        <h3 className="font-bold text-2xl">${totalPrice}</h3>
      </div>
      <div className="text-center">
        <button
          className="btn btn-block rounded-[20px] mt-4 text-white border-none
                bg-linear-to-r from-blue-500 to-purple-500
                transition-all duration-300
                hover:scale-105 hover:shadow-xl
            hover:from-blue-600 hover:to-purple-600
                active:scale-95"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
