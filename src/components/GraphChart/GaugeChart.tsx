// import React, { useEffect } from "react";
// import Highcharts from "highcharts";
// import HighchartsReact from "highcharts-react-official";
// import  "highcharts/modules/solid-gauge";
// import 'highcharts/modules/solid-gauge.js';
 
// console.log("8", Highcharts);
// const GaugeChart: React.FC = () => {
//   const options: Highcharts.Options = {
//     chart: {
//       type: "solidgauge",
//     //   plotBackgroundColor: undefined,
//     //   plotBackgroundImage: undefined,
//       plotBorderWidth: 0,
//       plotShadow: false
//     },
//     title: {
//       text: ""
//     },
//     pane: {
//       startAngle: -150,
//       endAngle: 150,
//       background: [
//         {
//           borderWidth: 0,
//           outerRadius: "100%",
//           innerRadius: "50%",
//           backgroundColor: "transparent"
//         }
//       ]
//     },
//     yAxis: {
//       min: 0,
//       max: 100,
//       tickPixelInterval: 30,
//       tickWidth: 2,
//       tickLength: 10,
//       tickPosition: "inside",
//       labels: {
//         step: 2,
//         rotation: 2
//       },
//       plotBands: [
//         {
//           from: 0,
//           to: 50,
//           color: "#55BF3B" // Green
//         },
//         {
//           from: 50,
//           to: 75,
//           color: "#DDDF0D" // Yellow
//         },
//         {
//           from: 75,
//           to: 100,
//           color: "#DF5353" // Red
//         }
//       ]
//     },
//     series: [
//       {
//         type: "gauge",
//         name: "Utilization",
//         data: [60], // The needle position
//         tooltip: {
//           valueSuffix: "%"
//         }
//       }
//     ]
//   };
 
//   return <HighchartsReact highcharts={Highcharts} options={options} />;
// };
 
// export default GaugeChart;

// import React from 'react';
// import Highcharts from 'highcharts';
// import HighchartsReact from 'highcharts-react-official';
// // import 'highcharts/modules/solid-gauge';

// const SolidGaugeChart = () => {
//   const options = {
//     chart: {
//       type: 'solidgauge',
//       height: '110%',
//       width: '110%',
//       margin: [0, 0, 0, 0],
//     },
//     title: {
//       text: 'Solid Gauge',
//       style: {
//         fontSize: '24px',
//       },
//     },
//     pane: {
//       startAngle: 0,
//       endAngle: 360,
//       background: {
//         backgroundColor: '#EEE',
//         innerRadius: '60%',
//         outerRadius: '100%',
//         borderWidth: 0,
//       },
//     },
//     yAxis: {
//       min: 0,
//       max: 100,
//       lineWidth: 0,
//       tickPositions: [],
//     },
//     series: [{
//       name: 'Speed',
//       data: [80],
//       dataLabels: {
//         enabled: true,
//         format: '{y}%',
//       },
//       tooltip: {
//         valueSuffix: '%',
//       },
//     }],
//   };

//   return (
//     <div>
//       <HighchartsReact highcharts={Highcharts} options={options} />
//     </div>
//   );
// };

// export default SolidGaugeChart;

import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import 'highcharts/highcharts-more';
import 'highcharts/modules/solid-gauge';

const SolidGaugeChart = (gaugeUtilize: any) => {
    console.log("change",gaugeUtilize );

    const options: Highcharts.Options = {
        chart: {
          type: "gauge",
          backgroundColor: "transparent",
          height: "70%",
        },
        credits: {
          enabled: false,
        },
        title: {
          text: undefined,
        },
        pane: {
          startAngle: -90,
          endAngle: 90,
          size: "140%",
          center: ["50%", "75%"],
          background: [
            {
              outerRadius: "100%",
              innerRadius: "70%",
              shape: "arc",
              backgroundColor: {
                linearGradient: {
                  x1: 0,
                  y1: 0,
                  x2: 1,
                  y2: 0,
                //   transform: "rotate(30 0.5 0.5)",
                },
                // linearGradient: { x1: 0, y1: 0.5, x2: 0.5, y2: 0 }, // **FIXED: True Smooth Gradient**
                stops: [
                  [0, "#4CAF50"], // Green (smoother start)
                  [0.5, "#FFC107"], // Yellow (gentler transition)
                  [2, "#F44336"], // Red (soft fade)
                ],
              },
            },
          ],
        },
        yAxis: {
          min: 0,
          max: 100,
          lineWidth: 0,
          tickPositions: [],
        },
        series: [
          {
            type: "gauge",
            data: [23],
            dial: {
              backgroundColor: "black", // **FIXED: Proper needle color**
              baseLength: "5%",
              baseWidth: 3, // **FIXED: Slimmer Needle Base**
              radius: "80%",
              rearLength: "0%",
            },
            pivot: {
              backgroundColor: "black",
              radius: 2, // **FIXED: Smaller Pivot Circle**
            },
            dataLabels: {
                // borderColor:"red",
                borderWidth: 0,
                x: -2,
              useHTML: true,
              format: `
                <div 
                style="
                  text-align: center;
                  font-size: 12px;
                  font-weight: bold;
                  display: inline-block;
                width: max-content;
                margin-left:0;
                border-radius: 51px;"
                >
                  Utilised {y}%
                </div>`,
              y: -6, // **FIXED: Proper Label Placement**
            },
          } as Highcharts.SeriesGaugeOptions,
        ],
      };

  return (
      <HighchartsReact highcharts={Highcharts} options={options} />
  );
};
 
export default SolidGaugeChart;

