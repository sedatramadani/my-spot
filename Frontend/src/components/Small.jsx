import React from "react";

function Small({ isSelected, onSelect }) {
  return (
    <button
      onClick={onSelect}
      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
        isSelected
          ? "bg-amber-500 text-black font-bold shadow"
          : "bg-amber-950/60 text-amber-200 hover:bg-amber-900 border border-amber-800/40"
      }`}
    >
      Small 🥤
    </button>
  );
}

export default Small;
