import React, { useState } from "react";

const COUNTER = () => {
  //  Counter is a state initialized to 0
  const [counter, setCounter] = useState(0);

  // Function is called everytime increment button is clicked
  const handleClick1 = () => {
    // Counter state is incremented
    setCounter(counter + 1);
  };

  // Function is called everytime decrement button is clicked
  const handleClick2 = () => {
    // Counter state is decremented
    setCounter(counter - 1);
  };

  return (
    <div className="relative bottom-1 right-35 inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-gray-50 p-1 select-none">
      {/* Decrement Button */}
      <button
        className="flex h-7 w-7 items-center justify-center rounded-md bg-red-500 text-sm font-bold text-white transition-colors hover:bg-red-600 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
        onClick={handleClick2}
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
        onClick={handleClick1}
      >
        +
      </button>
    </div>
  );
};

export default COUNTER;
