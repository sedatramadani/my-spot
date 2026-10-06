import React, { useState } from "react";
import { Products } from "./Products";

import Button from "./Button";
import Big from "./Big";
import Medium from "./Medium";
import Small from "./Small";
import Count from "./Count";

export default function OurCoffee({ onAddToCart }) {
  const coffeeData = Products?.Coffee || [];

  return (
    <div className="bg-gradient-to-b from-amber-950 to-amber-900 p-6 sm:p-10 font-sans text-[#F8F5F0]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-extrabold mb-8 text-amber-100 tracking-wide border-b border-amber-800/60 pb-3">
          Our Coffees
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coffeeData.map((coffee) => (
            <CoffeeItem
              key={coffee.id}
              coffee={coffee}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function CoffeeItem({ coffee, onAddToCart }) {
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const totalPrice = (coffee.price * quantity).toFixed(2);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size (Big, Medium, or Small) first!");
      return;
    }

    const userConfirmed = window.confirm(
      `Confirm Selection:\n\n☕ Item: ${coffee.name}\n📏 Size: ${selectedSize}\n🔢 Quantity: ${quantity}\n💵 Total Price: $${totalPrice}\n\nDo you want to add this to your cart?`,
    );

    if (userConfirmed) {
      if (onAddToCart) {
        onAddToCart({
          id: `${coffee.id}-${selectedSize}-${Date.now()}`,
          name: coffee.name,
          price: coffee.price,
          size: selectedSize,
          quantity: quantity,
          pic: coffee.pic,
        });
      }
      alert(
        `Success! ${quantity}x ${coffee.name} (${selectedSize}) has been added to your cart.`,
      );
      setSelectedSize("");
      setQuantity(1);
    }
  };

  return (
    <div className="flex items-center gap-5 p-4 rounded-2xl bg-black/20 backdrop-blur-sm border border-amber-900/40 hover:border-amber-700/60 transition-all duration-300 shadow-lg">
      <div className="w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 rounded-xl overflow-hidden bg-amber-950/40 border border-amber-800/30">
        <img
          src={coffee.pic}
          alt={coffee.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>

      <div className="flex-1 min-w-0 flex flex-col gap-1">
        <h3 className="font-bold text-lg text-amber-100 truncate">
          {coffee.name}
        </h3>
        <p className="text-xs text-amber-200/70 line-clamp-2 font-light leading-relaxed">
          {coffee.desc}
        </p>

        <div className="flex gap-2 my-2">
          <Big
            isSelected={selectedSize === "Big"}
            onSelect={() => setSelectedSize("Big")}
          />
          <Medium
            isSelected={selectedSize === "Medium"}
            onSelect={() => setSelectedSize("Medium")}
          />
          <Small
            isSelected={selectedSize === "Small"}
            onSelect={() => setSelectedSize("Small")}
          />
        </div>

        <div className="flex items-center justify-between mt-1">
          <div className="text-amber-400 font-bold text-sm">
            ${coffee.price}
          </div>
          <Count value={quantity} onChange={setQuantity} />
        </div>

        <div className="mt-2">
          <Button onClick={handleAddToCart} />
        </div>
      </div>
    </div>
  );
}
