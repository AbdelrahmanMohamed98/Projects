import React from "react";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject,
  AccumulationLegend,
  PyramidSeries,
  AccumulationTooltip,
  AccumulationDataLabel,
  AccumulationSelection,
} from "@syncfusion/ej2-react-charts";
import { PyramidData } from "../../data/dummy";

import { useStateContext } from "../../context/ContextProvider";
import { ChartsHeader } from "../../components";
const Pyramid = () => {
  const { currentMode } = useStateContext();

  return (
    <div
      className="m-4 md:m-10 mt-24 p-10
     bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader
        title="Pyramid"
        subject="Food Comparison Chart"
        category="Chart"
      />
      <div className="w-full">
        <AccumulationChartComponent
          id="pyramid-chart"
          legendSettings={{
            visible: true,
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
              PyramidSeries,
              AccumulationLegend,
              AccumulationTooltip,
              AccumulationDataLabel,
              AccumulationSelection,
            ]}
          />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              name="food"
              dataSource={PyramidData}
              xName="x"
              yName="y"
              type="Pyramid"
              width="45%"
              height="80%"
              dataLabel={{
                visible: true,
                position: "Inside",
                name: "text",
                font: {
                  fontWeight: "600",
                  color: "#fff",
                },
              }}
              explode
              explodeOffset="10"
              gapRatio={0.03}
              emptyPointSettings={{
                mode: "Drop",
                fill: "red",
              }}
            />
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>
    </div>
  );
};

export default Pyramid;
