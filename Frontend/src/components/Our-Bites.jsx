import React, { useState } from "react";
import { Products } from "./Products";

import Button from "./Button";
import Count from "./Count"; 

export default function OurBites({ onAddToCart }) {
  const bitesData = Products?.Bites || [];

  return (
    <div className="bg-gradient-to-b from-amber-950 to-amber-900 p-6 sm:p-10 font-sans text-[#F8F5F0]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-extrabold mb-8 text-amber-100 tracking-wide border-b border-amber-800/60 pb-3">
          Our Bites
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bitesData.map((bite) => (
            <BiteItem key={bite.id} bite={bite} onAddToCart={onAddToCart} />
          ))}
        </div>
      </div>
    </div>
  );
}

function BiteItem({ bite, onAddToCart }) {
  const [quantity, setQuantity] = useState(1); // Standardized quantity state
  const totalPrice = (bite.price * quantity).toFixed(2);

  const handleAddToCart = () => {
    const userConfirmed = window.confirm(
      `Confirm Selection:\n\n🍰 Item: ${bite.name}\n🔢 Quantity: ${quantity}\n💵 Total Price: $${totalPrice}\n\nDo you want to add this to your cart?`,
    );

    if (userConfirmed) {
      if (onAddToCart) {
        onAddToCart({
          id: `${bite.id}-${Date.now()}`,
          name: bite.name,
          price: bite.price,
          quantity: quantity, 
          pic: bite.pic,
        });
      }
      alert(`Success! ${quantity}x ${bite.name} has been added to your cart.`);
      setQuantity(1); 
    }
  };

  return (
    <div className="flex items-center gap-5 p-4 rounded-2xl bg-black/20 backdrop-blur-sm border border-amber-900/40 hover:border-amber-700/60 transition-all duration-300 shadow-lg">
      <div className="w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 rounded-xl overflow-hidden bg-amber-950/40 border border-amber-800/30">
        <img
          src={bite.pic}
          alt={bite.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>

      <div className="flex-1 min-w-0 flex flex-col gap-1">
        <h3 className="font-bold text-lg text-amber-100 truncate">
          {bite.name}
        </h3>
        <p className="text-xs text-amber-200/70 line-clamp-2 font-light leading-relaxed">
          {bite.desc}
        </p>

        
        <div className="h-2 my-2"></div>

        <div className="flex items-center justify-between mt-1">
          <div className="text-amber-400 font-bold text-sm">${bite.price}</div>
          <Count value={quantity} onChange={setQuantity} />
        </div>

        <div className="mt-2">
          <Button onClick={handleAddToCart} />
        </div>
      </div>
    </div>
  );
}
