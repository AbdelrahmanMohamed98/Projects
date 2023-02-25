import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  Legend,
  SplineAreaSeries,
} from "@syncfusion/ej2-react-charts";
import {
  areaCustomSeries,
  areaPrimaryXAxis,
  areaPrimaryYAxis,
} from "../../data/dummy";

import { useStateContext } from "../../context/ContextProvider";
import { ChartsHeader } from "../../components";
const Area = () => {
  const { currentMode } = useStateContext();

  return (
    <div
      className="m-4 md:m-10 mt-24 p-10
     bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader
        title="Area"
        subject="Inflation Rate In Percentage"
        category="Chart"
      />
      <div className="w-full">
        <ChartComponent
          id="area-chart"
          height="420px"
          primaryXAxis={areaPrimaryXAxis}
          primaryYAxis={areaPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          background={
            currentMode === "Dark"
              ? "#33373E"
              : "#fff"
          }>
          <Inject
            services={[
              DateTime,
              Legend,
              SplineAreaSeries,
            ]}
          />
          <SeriesCollectionDirective>
            {areaCustomSeries.map((item, i) => (
              <SeriesDirective
                key={i}
                {...item}
              />
            ))}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Area;
