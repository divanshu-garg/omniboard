import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  HiloSeries,
  Inject,
  Tooltip,
  DateTime,
  Zoom,
  Crosshair,
  Logarithmic,
  Legend
} from "@syncfusion/ej2-react-charts";

import { Header } from "../../components";

import {
  financialChartData,
  FinancialPrimaryXAxis,
  FinancialPrimaryYAxis,
} from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";

function filterValue(value) {
  const date1 = new Date("2016, 1, 1").getFullYear();
  const newVal = value.x.getFullYear()
  // console.log("date:", date1);
  // console.log("value.x:",newVal);
  if(newVal >= date1){
    // return value.x, value.high, value.low;
    return value;
  }
}
const returnValue = financialChartData.filter(filterValue);
// console.log("return val:", returnValue);


const Financial = () => {
  const { currentMode } = useStateContext();
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header
        category="Financial Chart"
        title="Historical Data of APPLE Inc's Stock"
      />
      <div className="w-full">
        <ChartComponent
          id="financial-chart"
          primaryXAxis={FinancialPrimaryXAxis}
          primaryYAxis={FinancialPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true, shared: true }}
          crosshair={{ enable: true, lineType: "Vertical", line: { width: 0 } }}
          background={currentMode === "Dark" ? "#33373E" : "#fff"}
        >
          <Inject
            services={[
              HiloSeries,
              Tooltip,
              DateTime,
              Logarithmic,
              Crosshair,
              Legend,
              Zoom,
            ]}
          />
          <SeriesCollectionDirective>
            {/* {financialChartData.map((item, index) => {
            return <SeriesDirective key={index} {...item} />;
          })} */}
            <SeriesDirective
              dataSource={returnValue}
              xName="x"
              yName="low"
              name="Apple Inc"
              type="Hilo"
              low="low"
              high="high"
            />
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Financial;
