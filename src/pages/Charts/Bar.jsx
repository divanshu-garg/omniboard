import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  BarSeries,
  Category,
  Tooltip,
  DataLabel,
  Inject,
  Legend,
} from "@syncfusion/ej2-react-charts";

import { Header } from "../../components";

import {
  barCustomSeries,
  barPrimaryXAxis,
  barPrimaryYAxis,
} from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";

const Bar = () => {
  const { currentMode } = useStateContext();
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Chart" title="Olympic Medals count by Country" />
      <ChartComponent
        id="bar-chart"
        height="450px"
        width="650px"
        primaryXAxis={barPrimaryXAxis}
        primaryYAxis={barPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background={currentMode === "Dark" ? "#33373E" : "#fff"}
      >
        <Inject services={[BarSeries, Tooltip, Category, DataLabel, Legend]} />
        <SeriesCollectionDirective>
          {barCustomSeries.map((item, index) => {
            // console.log("item: ", item);
            return <SeriesDirective key={index} {...item} />
})}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Bar;
