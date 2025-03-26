import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React from "react";
import { MarsCentraBookFont } from "../Dashboard/Dashboard.styled";
import { useSelector } from "react-redux";
import { sortArray } from "../utils/util";

interface WaterfallChartProps {
    // currentPeriod: number[];
    refPeriod: number[][];
    apiData: any;
    // setRefPeriod: React.Dispatch<React.SetStateAction<number[]>>;
}
interface LocalObjectType {
    title: string;
    remainingBudget: number;
  }
//   interface LocalObject {
//     title: string;
//     remainingBudget: number;
//   }
const WaterfallChart: React.FC = () => {

    const reducerStateData = useSelector((state: any) => state.data);
    console.log("16", reducerStateData);
    const categories=          sortArray([       "Budget",
        ...reducerStateData?.local?.periods || [],
        "Budget Left",])
        console.log("28", categories);
    // console.log("17", reducerStateData?.local?.find((x: { title: string; })=> x.title === "Total Budget").value || 0);

    if (!reducerStateData) {
        console.error("Waterfall state is undefined");
        return null;
    }

    console.log("65",reducerStateData);

    Highcharts.SVGRenderer.prototype.symbols.custom3 = function (
        x: any,
        y: any,
        w: any,
        h: any
    ) {
        const startY = 11690000; // Starting Y-coordinate
        const endY = 11690000 - 891; // Ending Y-coordinate
        return [
            "M",
            x,
            startY, // Move to starting point (0, 11690000)
            "L",
            x + w,
            startY, // Draw top edge
            "L",
            x + w,
            endY, // Draw right edge to (0, 11690000 - 891)
            "L",
            x,
            endY, // Draw bottom edge
            "L",
            x,
            startY, // Draw left edge back to starting point
            "Z", // Close the path
        ];
    };
    // console.log("36",refPeriod);
    // console.log("36",api);
    const config = {
        style: {
            fontFamily: `${MarsCentraBookFont}, sans-serif`,
            fontSize: '0.8rem',
            fontWeight: 'normal'
          },
        chart: {
            type: "column",
            height: "60%",
        },
        title: {
            text: "Overall Spends",
            align: "left",
            style: {
                fontWeight: "bold",
                // fontSize: "0.8rem"
            },
        },
        xAxis: {
            categories: categories,
            // categories: [
            //     "Budget",
            //     "P01",
            //     "P02",
            //     "P03",
            //     "P04",
            //     "P05",
            //     "P06",
            //     "P07",
            //     "P08",
            //     "P09",
            //     "P10",
            //     "P11",
            //     "P12",
            //     "P13",
            //     "Budget Left",
            // ],

        },
        yAxis: {
            // type: "linear",
            type: "logarithmic",
            // tickPixelInterval: 25,
            // title: {
            //     text: "$ (in millions)",
            // },
            labels: {
                format: "${value}",
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
            enabled: false,
        },
        series: [
            {
                name: "Overall Spend",
                type: "scatter", // Simulating horizontal lines as reference points
                // data: refPeriod,
                data: [
                    [1, Number(reducerStateData?.apiFetched?.spendSummary?.find((x: { title: string; })=> x?.title === "Overall Spends").value) || 0],
                    // [2, 16],
                    // [3, 14],
                    // [4, 12],
                    // [5, 10],
                    // [6, 8],
                    // [7, 7],
                    // [8, 6],
                    // [9, 5],
                    // [10, 4],
                    // [11, 3],
                    // [12, 2],
                ],
                // color: "#0000a0",

                marker: {
                    symbol: "custom3", // Define a custom symbol
                    lineWidth: 20, // Line width
                    radius: 2, // No radius (no circle)
                    // states: {
                    //   hover: {
                    //     lineWidth: 5 // Optional: set hover line width
                    //   }
                    // },
                    enabled: true, // Ensure the marker is enabled
                    // fillColor: 'transparent', // Ensure the fill is transparent (for a simple line)
                    lineColor: "#ff8200", // Set the color of the line
                },
            },
            {
                name: "Total Budget",
                data: [
                    [0, Number(reducerStateData?.apiFetched?.budgetData?.value) || 0],
                    // [1, 0],
                    // [2, 0],
                    // [3, 0],
                    // [4, 0],
                    // [5, 0],
                    // [6, 0],
                    // [7, 0],
                    // [8, 0],
                    // [9, 0],
                    // [10, 0],
                    // [11, 0],
                    // [12, 0],
                ],
                color: "#0000a0",
            },
            {
                name: "Remaining Budget",
                data: [
                    [0, 0],
                    // [1, 0],
                    // [2, 0],
                    // [3, 0],
                    // [4, 0],
                    // [5, 0],
                    // [6, 0],
                    // [7, 0],
                    // [8, 0],
                    // [9, 0],
                    // [10, 0],
                    // [11, 0],
                    // [12, 0],
                    [categories.length - 1, (Object.values(reducerStateData?.local).find((x) => (x as LocalObjectType)?.title === "Total Budget") as LocalObjectType)?.remainingBudget || 0],
                ],
                color: "#00d7b9",
            },
        ],
    };

    return <HighchartsReact highcharts={Highcharts} options={config} />;
};

export default WaterfallChart;


