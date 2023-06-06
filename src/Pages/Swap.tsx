import React from "react";

function SwapView() {
  return (
    <section className="relative h-screen">
      <div className="bg-swap-banner h-full w-full bg-cover bg-center"></div>
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 flex-col">
        <h1 className="text-5xl font-bold text-white">
          Gain the clean advantage by
        </h1>
        <h2 className="text-7xl font-bold text-white">
          Swapping Ocean, Nature and Plastic tokens
        </h2>

        <h2 className="text-3xl font-bold text-white mt-40">Coming Soon...</h2>
      </div>
    </section>
  );
}

export default SwapView;
