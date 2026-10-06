import React from "react";
import OurCoffee from "./Our-Coffee";
import OurBites from "./Our-Bites";
import Card from "./Card";

export default function Ordernow({
  cart,
  setCart,
  onAddToCart,
  balance,
  setBalance,
}) {
  return (
    <div className="min-h-screen bg-amber-950/95 grid grid-cols-1 lg:grid-cols-3 gap-8 p-6">
      {/* Menu Options */}
      <div className="lg:col-span-2 space-y-8">
        <OurCoffee onAddToCart={onAddToCart} />
        <OurBites onAddToCart={onAddToCart} />
      </div>

      {/* Shopping Cart Column */}
      <div className="lg:col-span-1">
        <div className="sticky top-6">
          <Card
            cartItems={cart}
            setCart={setCart}
            balance={balance}
            setBalance={setBalance}
          />
        </div>
      </div>
    </div>
  );
}
