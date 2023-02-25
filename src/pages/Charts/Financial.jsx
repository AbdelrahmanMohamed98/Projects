import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  HiloSeries,
  Category,
  Tooltip,
  Zoom,
  Crosshair,
  DateTime,
} from "@syncfusion/ej2-react-charts";
import {
  financialChartData,
  FinancialPrimaryXAxis,
  FinancialPrimaryYAxis,
} from "../../data/dummy";

import { useStateContext } from "../../context/ContextProvider";
import { ChartsHeader } from "../../components";
const Financial = () => {
  const { currentMode } = useStateContext();

  return (
    <div
      className="m-4 md:m-10 mt-24 p-10
     bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader
        title="Financial"
        subject="APPLE Historical"
        category="Chart"
      />
      <div className="w-full">
        <ChartComponent
          id="Financial-chart"
          height="420px"
          primaryXAxis={FinancialPrimaryXAxis}
          primaryYAxis={FinancialPrimaryYAxis}
          legendSettings={{
            background: "white",
          }}
          crosshair={{
            enable: true,
            lineType: "Vertical",
            line: { width: 0 },
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
              Category,
              Tooltip,
              HiloSeries,
              Zoom,
              Crosshair,
              DateTime,
            ]}
          />
          <SeriesCollectionDirective>
            <SeriesDirective
              type="Hilo"
              low="low"
              high="high"
              xName="x"
              dataSource={financialChartData}
            />
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Financial;
