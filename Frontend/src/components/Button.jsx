import React from "react";

// We pass "onClick" as a prop so it can trigger the confirmation in the parent component
function Button({ onClick }) {
  return (
    <div className="pt-2">
      <button
        onClick={onClick}
        className="bg-blue-600 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-700 active:scale-95 transition-all text-sm font-semibold w-full"
      >
        Add To Card
      </button>
    </div>
  );
}

export default Button;
