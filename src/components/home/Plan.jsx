import { PricingTable } from "@clerk/clerk-react";
import React from "react";

const Plan = () => {
  return (
    <div className="py-24 max-w-2xl mx-auto">
      <div className="text-center">
        <h2 className="text-slate-700 text-2xl sm:text-4xl font-semibold">
          Choose Your Plan
        </h2>
        <p className="text-gray-500 max-w-lg mx-auto max-sm:text-xs">
          Start for free and scale up as you grow. Find the perfect plan for
          your content creation needs.
        </p>
      </div>

      <div className="mt-[4rem] max-sm:mx-8">
        <PricingTable />
      </div>
    </div>
  );
};

export default Plan;
