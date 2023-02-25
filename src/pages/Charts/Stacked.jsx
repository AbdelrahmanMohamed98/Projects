import React from "react";
import { useStateContext } from "../../context/ContextProvider";
import {
  ChartsHeader,
  Stacked as StackedChart,
} from "../../components";
const Stacked = () => {
  return (
    <div
      className="m-4 md:m-10 mt-24 p-10
     bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader
        title="Stacked"
        subject="Revenue Breakdown"
        category="Chart"
      />
      <div className="w-full">
        <StackedChart />
      </div>
    </div>
  );
};

export default Stacked;
