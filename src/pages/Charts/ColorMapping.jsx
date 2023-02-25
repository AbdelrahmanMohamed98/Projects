import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  Tooltip,
  Selection,
  ColumnSeries,
  RangeColorSettingsDirective,
  RangeColorSettingDirective,
} from "@syncfusion/ej2-react-charts";
import {
  rangeColorMapping,
  ColorMappingPrimaryXAxis,
  ColorMappingPrimaryYAxis,
  colorMappingData,
} from "../../data/dummy";

import { useStateContext } from "../../context/ContextProvider";
import { ChartsHeader } from "../../components";
const ColorMapping = () => {
  const { currentMode } = useStateContext();

  return (
    <div
      className="m-4 md:m-10 mt-24 p-10
     bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader
        title="Color Mapping"
        subject="USA CLIMATE - WEATHER BY MONTH"
        category="Chart"
      />
      <div className="w-full">
        <ChartComponent
          id="colorMapping-chart"
          height="420px"
          primaryXAxis={ColorMappingPrimaryXAxis}
          primaryYAxis={ColorMappingPrimaryYAxis}
          legendSettings={{
            mode: "Range",
            visible: true,
            toggleVisibility: false,
          }}
          selectionMode="Point"
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
              ColumnSeries,
            ]}
          />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={colorMappingData[0]}
              name="USA"
              xName="x"
              yName="y"
              type="Column"
              animation={{ enable: false }}
              cornerRadius={{
                topLeft: 10,
                topRight: 10,
              }}
            />
          </SeriesCollectionDirective>
          <RangeColorSettingsDirective>
            {rangeColorMapping.map((item, i) => (
              <RangeColorSettingDirective
                {...item}
                key={i}
              />
            ))}
          </RangeColorSettingsDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default ColorMapping;
