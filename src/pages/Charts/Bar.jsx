import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  Tooltip,
  DataLabel,
  BarSeries,
  ColumnSeries,
} from "@syncfusion/ej2-react-charts";
import {
  barCustomSeries,
  barPrimaryXAxis,
  barPrimaryYAxis,
  barChartData,
} from "../../data/dummy";

import { useStateContext } from "../../context/ContextProvider";
import { ChartsHeader } from "../../components";
const Bar = () => {
  const { currentMode } = useStateContext();

  return (
    <div
      className="m-4 md:m-10 mt-24 p-10
     bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader
        title="Bar"
        subject="Olympic Medal Counts - RIO"
        category="Chart"
      />
      <div className="w-full">
        <ChartComponent
          id="bar-chart"
          height="420px"
          primaryXAxis={barPrimaryXAxis}
          primaryYAxis={barPrimaryYAxis}
          legendSettings={{
            background: "white",
          }}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          background={
            currentMode === "Dark"
              ? "#33373E"
              : "#fff"
          }>
          <Inject
            services={[
              Legend,
              Category,
              Tooltip,
              DataLabel,
              BarSeries,
              ColumnSeries,
            ]}
          />
          <SeriesCollectionDirective>
            {barCustomSeries.map((item, i) => (
              <SeriesDirective
                {...item}
                key={i}
              />
            ))}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Bar;
