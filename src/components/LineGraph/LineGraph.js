
import React from "react";
import { Chart } from "react-google-charts";


const LineGraph = ({data, options}) => {
  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}

export default LineGraph;
