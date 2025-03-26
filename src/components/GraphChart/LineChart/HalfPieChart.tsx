import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Box, Typography } from "@mui/material";
import { StyledTypography } from "../../Dashboard/Dashboard.styled";
 
// if (typeof Highcharts === "object") {
//   require("highcharts/highcharts-more")(Highcharts);
// }

 
const HalfPieChart= (item: any) => {
    const {overallSWBSpends,overallExpenses} = item.item
    console.log("13",overallExpenses , overallSWBSpends);
  const options: Highcharts.Options = {
    chart: {
      type: "pie",
      backgroundColor: "transparent",
    //   plotBorderColor: "red",
    //   borderWidth: 10,
      spacing: [10, -10, -20, 0],
    //   spacingBottom: 200,
      height: "65%", // Ensures half-pie shape
    //   width: "50%", // Ensures half-pie shape
    },
    title: {
      text: "",
    },
    credits: {
      enabled: false,
    },
    tooltip: {
      enabled: true, // Disable tooltip for a cleaner look
    //   enabled: false, // Disable tooltip for a cleaner look
    },
    plotOptions: {
      pie: {
        // showInLegend: true,
        startAngle: -90,
        endAngle: 90,
        center: ["50%", "45%"],
        size: "180%",
        // size: "160%",
        innerSize: "0%", // No hole in the middle (regular pie)
        dataLabels: {
          enabled: false, // Hide labels
        },
        borderWidth: 0, // Removes borders between slices
      },
    },
    series: [
      {
        type: "pie",
        data: [
          {
            name: "Expense",
            y: overallExpenses,
            color: "#8080d0", // Dark Purple
            pointWidth: 11,
            pointPadding: 110,
            x: 10,
        },
        {
            name: "SWB",
            y: overallSWBSpends,
            color: "#ffd1a1", // Beige color
            pointWidth: 10,
            pointPadding: 110,
            z: 21
          },
        ],
      },
    ],
    legend: {
      layout: "horizontal",
      align: "left",
      verticalAlign: "bottom",
      symbolRadius: 10, // Square legend markers
      itemWidth:50,
      itemMarginTop: 0,
      itemMarginBottom: 0,
      symbolPadding: -1,
      itemDistance: -20,
      x: -15,
    //   useHTML: true,
    //   labelFormatter: function () {
    //     if (this.name === "Expense") {
    //     return `<span style="display:inline-block; width: 80px;">${this.name}</span>`;
    //     } else if (this.name === "SWB") {
    //     return `<span style="display:inline-block; width: 50px;">${this.name}</span>`;;
    //           }
    //     return this.name;
    //         },

      itemStyle: {
        // fontWeight: "bold",
        color: "#000",
        fontSize: "10px",
        // lineWidth: 2,
        // width: 1,
        // height: 10,
      },
    },
  };
 

  return (
    <div>
      {/* Inject CSS styles directly in JSX */}
      {/* <style>
        {`
          .highcharts-legend-item:nth-child(1) text {
            width: 800px !important;
            display: inline-block;
            overflow: visible;
            white-space: nowrap;
          }
          .highcharts-legend-item:nth-child(2) text {
            width: 50px !important;
            display: inline-block;
            overflow: visible;
            white-space: nowrap;
          }
        `}
      </style> */}
      
      {/* Render Highcharts Pie Chart */}
      <HighchartsReact highcharts={Highcharts} options={options} />
            <Box display="flex" justifyContent="center"
             mt={-3}
             >
              <Box display="flex" alignItems="center" mr={2}
            //    marginLeft={"120px"}
               margin={0}>
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    bgcolor: "#283593",
                    borderRadius: "50%",
                    mr: 1,
                    marginX: "2px",
                  }}
                ></Box>
                <StyledTypography variant="caption">Expense</StyledTypography>
              </Box>
              <Box display="flex" alignItems="center" margin={0}>
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    bgcolor: "#F4A261",
                    borderRadius: "50%",
                    mr: 1,
                    marginX: "2px",
                    ml:1
                  }}
                ></Box>
                <StyledTypography variant="caption">SWB</StyledTypography>
              </Box>
            </Box>
    </div>
  );
//   return <HighchartsReact highcharts={Highcharts} options={options} />;
};
 
export default HalfPieChart;