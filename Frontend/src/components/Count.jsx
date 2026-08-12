import React, { useState } from "react";

const Count = () => {
  const [counter, setCounter] = useState(0);

  // Safely increment coffee quantity
  const handleIncrement = () => {
    setCounter((prevCount) => prevCount + 1);
  };

  // Safely decrement coffee quantity (Stops at 0)
  const handleDecrement = () => {
    setCounter((prevCount) => {
      if (prevCount > 0) {
        return prevCount - 1;
      }
      return prevCount; // Returns 0, preventing negative coffee orders
    });
  };

  return (
    <div className="relative top-15 right-90 inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-gray-50 p-1 select-none">
      {/* Decrement Button */}
      <button
        className="flex h-7 w-7 items-center justify-center rounded-md bg-red-500 text-sm font-bold text-white transition-colors hover:bg-red-600 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
        onClick={handleDecrement}
        disabled={counter === 0} // Visually disables the button at 0 cups
      >
        −
      </button>

      {/* Coffee Quantity Display */}
      <div className="w-8 text-center text-sm font-semibold text-gray-800">
        {counter}
      </div>

      {/* Increment Button */}
      <button
        className="flex h-7 w-7 items-center justify-center rounded-md bg-green-500 text-sm font-bold text-white transition-colors hover:bg-green-600 active:scale-95"
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  );
};

export default Count;
