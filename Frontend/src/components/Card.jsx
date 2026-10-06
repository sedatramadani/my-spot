import React from "react";

export default function Card({ cartItems, setCart, balance, setBalance }) {
  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + Number(item.price) * (item.quantity || 1),
    0,
  );

  const handleCheckout = () => {
    if (cartItems.length === 0) return;

    if (balance < totalPrice) {
      alert(
        `Insufficient funds! Your balance is $${balance.toFixed(2)}, but total is $${totalPrice.toFixed(2)}.`,
      );
      return;
    }

    // Deduct money from card
    const newBalance = balance - totalPrice;
    setBalance(newBalance);

    // Confirm transaction to user
    alert(
      `Payment Successful!\n\nPaid Amount: $${totalPrice.toFixed(2)}\nRemaining Card Balance: $${newBalance.toFixed(2)}`,
    );

    // Clear cart after payment
    setCart([]);
  };

  return (
    <div className="max-w-md mx-auto my-10 bg-white rounded-3xl p-6 shadow-2xl font-sans text-stone-800">
      {/* Balance Display */}
      <div className="bg-amber-100 p-3 rounded-2xl mb-4 text-center">
        <span className="text-xs text-amber-800 font-semibold uppercase tracking-wider block">
          Card Balance
        </span>
        <span className="text-2xl font-extrabold text-amber-950">
          ${balance.toFixed(2)}
        </span>
      </div>

      <h2 className="text-xl font-bold border-b border-stone-200 pb-3 mb-4 flex justify-between items-center">
        <span>🛒 Your Cart</span>
        <span className="text-xs bg-amber-800 text-white px-2.5 py-1 rounded-full">
          {cartItems.length} items
        </span>
      </h2>

      {/* Cart Items List */}
      {cartItems.length > 0 && (
        <>
          <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 p-2 rounded-xl bg-stone-50 border"
              >
                <img
                  src={item.pic}
                  alt={item.name}
                  className="w-10 h-10 rounded-lg object-cover"
                />
                <div className="flex-1 text-xs">
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-stone-500">Qty: {item.quantity || 1}</p>
                </div>
                <div className="font-bold text-sm text-amber-900">
                  ${(Number(item.price) * (item.quantity || 1)).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 border-t pt-3 space-y-2">
            <div className="flex justify-between font-bold text-base text-stone-900">
              <span>Total:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full bg-amber-900 hover:bg-amber-950 text-white font-semibold text-sm py-3 rounded-xl transition shadow-lg mt-2"
            >
              Pay ${totalPrice.toFixed(2)}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
