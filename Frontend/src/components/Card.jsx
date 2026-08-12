
import React from "react";

export default function Card({ cartItems, setCart }) {

  const totalPrice = cartItems.reduce(
    (total, item) => total + Number(item.price),
    0,
  );

  
  const handleClearCart = () => {
    setCart([]);
  };

  return (
    <div className="max-w-md mx-auto my-10 bg-white rounded-3xl p-6 shadow-2xl font-sans text-stone-800">
      <h2 className="text-2xl font-bold border-b border-stone-200 pb-3 mb-4 flex justify-between items-center">
        <span>🛒 Your Card</span>
        <span className="text-sm bg-amber-100 text-amber-900 px-2.5 py-1 rounded-full">
          {cartItems.length} items
        </span>
      </h2>

      {cartItems.length === 0 ? (
        <div className="text-center py-10 text-stone-400">
          <p className="text-lg font-medium">Your card is empty.</p>
          <p className="text-xs mt-1">Add some delicious coffees or bites!</p>
        </div>
      ) : (
        <div>
          
          <div className="space-y-4 max-h-96 overflow-y-auto pr-1">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 p-2 rounded-xl bg-stone-50 border border-stone-100"
              >
                <img
                  src={item.pic}
                  alt={item.name}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm truncate">
                    {item.name}
                  </h4>
                  {item.size && (
                    <p className="text-xs text-stone-500">Size: {item.size}</p>
                  )}
                </div>
                <div className="font-bold text-sm text-amber-700">
                  ${item.price}
                </div>
              </div>
            ))}
          </div>

          
          <div className="mt-6 border-t border-stone-200 pt-4 space-y-2">
            <div className="flex justify-between font-bold text-lg text-stone-900">
              <span>Total:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>

            <div className="flex gap-2 mt-4">
              <button
                onClick={handleClearCart}
                className="w-1/3 border border-stone-200 text-stone-500 hover:bg-stone-50 text-xs py-2.5 rounded-xl transition"
              >
                Clear All
              </button>
              <button
                onClick={() => alert("Proceeding to checkout workflow!")}
                className="w-2/3 bg-amber-900 hover:bg-amber-950 text-white font-semibold text-xs py-2.5 rounded-xl transition shadow-lg shadow-amber-950/20"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
