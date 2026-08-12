import React from "react";

export default function ToggleButton({ activeTab, setActiveTab }) {
  return (
    <div className="w-full max-w-4xl mx-auto p-4 font-sans text-[#F8F5F0]">
      {/* Navigation Tabs Row */}
      <div className="flex justify-center items-center gap-4 bg-black/20 p-2 rounded-2xl border border-amber-800/30 backdrop-blur-sm max-w-md mx-auto">
        <button
          onClick={() => setActiveTab("coffee")}
          disabled={activeTab === "coffee"}
          className={`flex-1 py-3 px-6 rounded-xl font-bold text-center tracking-wide transition-all duration-300 ease-in-out border ${
            activeTab === "coffee"
              ? "bg-amber-950/90 border-amber-500 text-amber-300 shadow-lg scale-105 cursor-default"
              : "bg-black/30 border-transparent hover:bg-black/50 text-amber-100/70 hover:text-amber-100 cursor-pointer"
          }`}
        >
          ☕ Our Coffee
        </button>

        <button
          onClick={() => setActiveTab("bites")}
          disabled={activeTab === "bites"}
          className={`flex-1 py-3 px-6 rounded-xl font-bold text-center tracking-wide transition-all duration-300 ease-in-out border ${
            activeTab === "bites"
              ? "bg-amber-950/90 border-amber-500 text-amber-300 shadow-lg scale-105 cursor-default"
              : "bg-black/30 border-transparent hover:bg-black/50 text-amber-100/70 hover:text-amber-100 cursor-pointer"
          }`}
        >
          🍰 Our Bites
        </button>
      </div>
    </div>
  );
}
