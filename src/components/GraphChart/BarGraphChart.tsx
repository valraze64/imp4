import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React from "react";
import CustomChartLegend from "./CustomChartLegend";


interface RunRateChartProps {
currentPeriod: number[];
requiredRR: number[]
}
const RunRateChart: React.FC< RunRateChartProps> = ( {currentPeriod, requiredRR: refPeriod}) => {
  const config = {
    chart: {
      type: "column",
      height: "40%",
    },
    title: {
      text: "Run Rate",
    },
    xAxis: {
      categories: ["P01", "P02", "P03", "P04", "P05", "P06", "P07", "P08", "P09", "P10", "P11", "P12", "P13"],
    },
    yAxis: {
        // type: "linear",
        type: "logarithmic",
        tickPixelInterval: 50,
      title: {
        text: "",
        // text: "$ (in thousands)",
      },
      labels: {
        format: "${value}K",
      },
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      column: {
        grouping: true,
        shadow: false,
        borderWidth: 0,
      },
    },
    credits: {
        enabled :false
    },
    series: [
      {
        name: "Current Period",
        data: currentPeriod,
        color: "#ff8200",
      },
      {
        name: "Required Run Rate",
        data: refPeriod,
        color: "#0000a0",
      },
    ],
  };

  return (

    <>
                <div id="chart-container">

  <HighchartsReact highcharts={Highcharts} options={config} />
                </div>
                <CustomChartLegend
                    items={[
                        { color: "#ff8200", label: "Current Period" },
                        { color: "#0000a0", label: "Required Run Rate" },
                        // { color: "#00d7b9", label: "Run Rate" },
                    ]}
                />
  </>
    )
};

export default RunRateChart;