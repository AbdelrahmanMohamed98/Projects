import React from "react";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject,
  AccumulationLegend,
  PieSeries,
  AccumulationTooltip,
  AccumulationDataLabel,
} from "@syncfusion/ej2-react-charts";
import { pieChartData } from "../../data/dummy";

import { useStateContext } from "../../context/ContextProvider";
import { ChartsHeader } from "../../components";
const Pie = () => {
  const { currentMode } = useStateContext();

  return (
    <div
      className="m-4 md:m-10 mt-24 p-10
     bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader
        title="Pie"
        subject="Project Cost Breakdown"
        category="Chart"
      />
      <div className="w-full">
        <AccumulationChartComponent
          id="pie-chart"
          height="420px"
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
              PieSeries,
              AccumulationLegend,
              AccumulationTooltip,
              AccumulationDataLabel,
            ]}
          />
          <AccumulationSeriesCollectionDirective>
            {pieChartData.map((item, i) => (
              <AccumulationSeriesDirective
                name="cost"
                dataSource={pieChartData}
                xName="x"
                yName="y"
                type="Pie"
                startAngle="0"
                endAngle="360"
                innerRadius="40%"
                explode={true}
                explodeOffset="10%"
                explodeIndex={2}
                dataLabel={{
                  visible: true,
                  position: "Inside",
                  name: "text",
                  font: {
                    fontWeight: "600",
                    color: "#fff",
                  },
                }}
                radius="70%"
              />
            ))}
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>
    </div>
  );
};

export default Pie;
