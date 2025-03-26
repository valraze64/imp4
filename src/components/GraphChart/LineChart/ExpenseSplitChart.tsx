import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "highcharts/modules/dumbbell";
import { Popper, IconButton, Box, Typography, Paper, Grid2, Modal } from "@mui/material";



const ExpenseDumbbellChart: React.FC = () => {
    // Expense data extracted from the image
const data = [
  ["Communication", 0, 23],
  ["Depreciation", 0, 11],
  ["External & Assoc. Relations", 0, 46],
  ["Facilities", 0, 18],
  ["IT Costs", 0, 32],
  ["Merchandising & Samples", 0, 25],
  ["Other", 0, 14],
  ["Professional Fees", 0, 48],
  ["Project Expenses", 0, 20],
  ["Relocation/Recruitment", 0, 38],
  ["Research & Development", 0, 29],
  ["Travel/Training/Meetings", 0, 17],
  ["Vehicle Expenses", 0, 42],
  ["Cross Charges", 0, 22],
  ["Tax Credit", 0, 35],
];

    const chartOptions: Highcharts.Options = {
        chart: {
            type: "dumbbell",
            inverted: true, // Makes it horizontal
            height: data.length * 35 + 50, // Auto-adjust height
        },
        title: {
            text: "Expense Spend Split Up",
            align: "left",
            style: { fontSize: "16px", fontWeight: "bold" },
        },
        xAxis: {
            categories: data.map((item) => item[0] as string),
            labels: {
                style: { fontSize: "12px" },
            },
            lineWidth: 0,
        },
        yAxis: {
            title: { text: "" },
            labels: {
                format: "${value}K",
            },
            min: 0,
            max: 50, // Adjust range
            gridLineWidth: 0,
        },
        // tooltip: {
        //     formatter: function (this: Highcharts.TooltipFormatterCallbackFunctionContext) {
        //       return `<b>${this.key}</b>: $${(this.point as any).high}K`;
        //     }
        //   },
        series: [
            {
                type: "dumbbell",
                name: "Expenses",
                data: data.map(([category, low, high]) => [
                    category,
                    low,
                    high,
                ]), // ✅ Correct format
                color: "#000",
                marker: {
                    enabled: true,
                    fillColor: "#FF7900",
                    radius: 6,
                },
                dataLabels: {
                    enabled: true,
                    align: "left", // Place text to the right of the marker
                    verticalAlign: "middle",
                    // x: -110, // Adjust horizontal position
                    y: 100,
                    style: {
                      fontSize: "12px",
                      color: "#333",
                      fontWeight: "bold",
                    },
                  },
                lowMarker: { enabled: false },
                //   lineWidth: 1,
            },
        ],
        credits: { enabled: false }, // Remove Highcharts watermark
    };

    return (
        
// <Modal open={true}>
//       {/* Info Icon */}

 
//       {/* Popper Tooltip */}
// <Popper
// //   id={id}
//   open={true}
// //   anchorEl={anchorEl}
// //   placement="bottom"
//   sx={{ zIndex: 1300 }}
//   modifiers={[{
//     name: 'offset',
//     options: {
//       offset: [-110, 0],
//     },
//   }]}
// >

        <Paper
          sx={{
              // p: 1.5,
              // borderRadius: 2,
              // boxShadow: 0,
              display: "flex",
            // alignItems: "center",
            minWidth: "40rem",
            border: "4px solid green",
// left:"80rem"

        }}
        >
    <HighchartsReact highcharts={Highcharts} options={chartOptions} />
            
         </Paper>
//       </Popper>
//     </Modal>
    )
};

export default ExpenseDumbbellChart;










// import React from "react";
// import Highcharts from "highcharts";
// import HighchartsReact from "highcharts-react-official";
// import "highcharts/modules/dumbbell";


// const ExpenseDumbbellChart: React.FC = () => {
//   // Data extracted from the image
//   const data: { category: string; low: number; high: number }[] = [
//     { category: "Communication", low: 0, high: 15 },
//     { category: "Depreciation", low: 0, high: 12 },
//     { category: "External & Assoc. Relations", low: 0, high: 20 },
//     { category: "Facilities", low: 0, high: 18 },
//     { category: "IT Costs", low: 0, high: 10 },
//     { category: "Merchandising & Samples", low: 0, high: 25 },
//     { category: "Other", low: 0, high: 14 },
//     { category: "Professional Fees", low: 0, high: 22 },
//     { category: "Project Expenses", low: 0, high: 30 },
//     { category: "Relocation/Recruitment", low: 0, high: 8 },
//     { category: "Research & Development", low: 0, high: 17 },
//     { category: "Travel/Training/Meetings", low: 0, high: 16 },
//     { category: "Vehicle Expenses", low: 0, high: 9 },
//     { category: "Cross Charges", low: 0, high: 19 },
//     { category: "Tax Credit", low: 0, high: 21 },
//   ];

//   const chartOptions: Highcharts.Options = {
//     chart: {
//       type: "dumbbell",
//       inverted: true, // Horizontal layout
//       height: data.length * 35 + 50, // Auto-adjust height
//     },
//     title: {
//       text: "Expense Spend Split Up",
//       align: "left",
//       style: { fontSize: "16px", fontWeight: "bold" },
//     },
//     xAxis: {
//       categories: data.map((item) => item.category),
//       labels: { style: { fontSize: "12px" } },
//       lineWidth: 0,
//     },
//     yAxis: {
//       title: { text: "" },
//       labels: { format: "${value}K" },
//       min: 0,
//       max: 50, // Adjust range
//       gridLineWidth: 0,
//     },
//     // tooltip: {
//     //   formatter: function (this: Highcharts.TooltipFormatterContextObject) {
//     //     return `<b>${this.key}</b>: $${(this.point as any).high}K`;
//     //   },
//     // },
//     series: [
//       // **Dumbbell Series: Just lines**
//       {
//         type: "dumbbell",
//         name: "Expenses",
//         data: data.map(({ category, low, high }) => [category, low, high]),
//         color: "#000", // Line color
//         marker: {
//           enabled: false, // ❌ Hide default markers
//         },
//         lowMarker: {
//           enabled: false, // ❌ Hide left/low black markers
//         },
//         // lineWidth: 1, // Thin connecting line
//       },

//       // **Scatter Series for High Markers (Orange Circles)**
//       {
//         type: "scatter",
//         name: "Expense Values",
//         data: data.map(({ category, high }) => [category, high]),
//         marker: {
//           symbol: "circle",
//           radius: 6,
//           fillColor: "#FF7900", // 🟠 Orange marker for high values
//         },
//       },
//     ],
//     credits: { enabled: false }, // Remove Highcharts watermark
//   };

//   return (
//     <div style={{ position: "relative" }}>
//       {/* Highcharts Graph */}
//       <HighchartsReact highcharts={Highcharts} options={chartOptions} />

//       {/* Custom HTML Labels Below Each Orange Marker */}
//       <div
//         style={{
//           position: "absolute",
//           top: "1%", // Adjust position based on chart rendering
//           left: "50%",
//         //   pointerEvents: "none", // Prevent interference with chart
//           wordSpacing: "100px",
//         //   letterSpacing: "100px",
//         // border: "10px solid red",
//         bottom: 0,
//         }}
//       >
//         {data.map((item, index) => (
//           <div
//             key={index}
//             style={{
//               position: "absolute",
//               left: `${(item.high / 50) * 100}%`, // Scale position based on max value
//               top: `${index * 35 + 50}px`, // Adjust spacing between labels
//               fontSize: "12px",
//               color: "#333",
//               fontWeight: "bold",

//             //   border: "10px solid red",
//             //   letterSpacing: "1px",
//             }}
//           >
//             ${item.high}K
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ExpenseDumbbellChart;
