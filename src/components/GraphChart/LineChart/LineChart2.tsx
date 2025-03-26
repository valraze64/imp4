import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Modal, Box, Typography } from "@mui/material";
import ExpenseDumbbellChart from "./ExpenseSplitChart";
import { useSelector } from "react-redux";
import { sortArray, filterQuarters } from "../../utils/util";
import { StyledTypography, GlobalStyles } from "../../Dashboard/Dashboard.styled";
import CustomChartLegend from "../CustomChartLegend";

interface BarAndLineChartProps {
    name: string;
    runRate: number[]
    currentPeriod: number[];
    budget: number[][];
  }

const BarAndLineChart: React.FC<BarAndLineChartProps> = ({
    name,
    runRate,
    currentPeriod,
    budget: refPeriod,
}) => {
    const data = useSelector((state: any) => state.data);


    Highcharts.SVGRenderer.prototype.symbols.custom = function (
        x: any,
        y: any,
        w: any,
        h: any
    ) {
        return ["M", x, y, "L", x, y + h]; // Create a simple line (from x, y to x, y+h)
    };

    // Highcharts.SVGRenderer.prototype.symbols.custom3 = function (
    //     x: any,
    //     y: any,
    //     w: any,
    //     h: any
    // ) {
    //     return [
    //         "M",
    //         x,
    //         y, // Move to top-left corner
    //         "L",
    //         x + w,
    //         y, // Draw top edge
    //         "L",
    //         x + w,
    //         y + h, // Draw right edge
    //         "L",
    //         x,
    //         y + h, // Draw bottom edge
    //         "L",
    //         x,
    //         y, // Draw left edge
    //         "Z", // Close the path
    //     ];
    // };

    const [openModal, setOpenModal] = useState(false);

    const categories = data.local.qAndP && data.local.qAndP.length > 0 ? sortArray(filterQuarters(data.local.qAndP)):[];

    console.log("63", runRate);

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    console.log("66",(Highcharts as any)?.seriesTypes?.column?.prototype?.options);
    console.log("67",data.local.qAndP && data.local.qAndP.length > 0 ? sortArray(filterQuarters(data.local.qAndP)):[]);

    const options: Highcharts.Options = {
        chart: {
            type: "column",
            height: "60%",
        },
        title: {
            text: name,
            align: "left",
            style: {
                fontWeight: "bold",
            },
        },
        xAxis: {
            labels: {
                step: 1,
            },
            tickInterval: 1,
            categories: categories, //
            // categories: [
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
            // ],
        },
        yAxis: {
            type: "logarithmic",
            // tickPixelInterval: 25,
            title: {
                text: "",
            },
            labels: {
                format: "${value}",
            },
        },
        legend: {
            enabled: false,
            layout: "horizontal", // Horizontal or vertical layout
            align: "center", // Align legend to the center
            verticalAlign: "bottom", // Position legend at the bottom
            symbolHeight: 10, // Custom height for legend symbols
            symbolWidth: 10, // Custom width for legend symbols
            symbolRadius: 5, // Rounded corners for legend symbols
            labelFormatter: function () {
                // Custom label formatting
                return `<span style="color:${this.color}; font-weight: bold;">${this.name}</span>`;
            },
        },
        plotOptions: {
            column: {
                groupPadding: 0.2, // Adjust for spacing between bars
                pointPadding: 0.1, // Adjust for bar width
            },
            scatter: {
                marker: {
                    enabled: true,
                    symbol: "line",
                    lineWidth: 3,
                    radius: 5,
                },
            },
            series: {
                cursor: "pointer",
                point: {
                    events: {
                        click: function (e) {
                            if (e.point.category === "P03") {
                                handleOpenModal();
                            }
                        },
                    },
                },
            },
        },
        series: [
            {
                name: "Current Period",
                type: "column",
                data: currentPeriod,
                color: "#ff8200",
            },
            {
                name: "Budget",
                type: "scatter", // Simulating horizontal lines as reference points
                data: refPeriod,
                color: "#0000a0",

                marker: {
                    symbol: "custom", // Define a custom symbol
                    lineWidth: 200 , // Line width
                    // lineWidth: 200 / categories.length, // Line width
                    radius: 2, // No radius (no circle)
                    enabled: true, // Ensure the marker is enabled
                    lineColor: "#0000a0", // Set the color of the line
                },
            },
            {
                name: "Run Rate",
                type: "spline",
                data: runRate,
                color: "#00d7b9",
                lineWidth: 2,
                marker: {
                    enabled: true,
                    symbol: "circle",
                },
            },
        ],
        credits: {
            enabled: false,
        },
    };

    return (
        <>
            <GlobalStyles /> {/* Apply global styles */}
            <div id="chart-container">
                <HighchartsReact highcharts={Highcharts} options={options} />
            </div>
            {/* <div id="legend-container" style={{ margin: "1.1rem 0 0.8rem 0" }}> */}
                <CustomChartLegend
                    items={[
                        { color: "#ff8200", label: "Current Period" },
                        { color: "#0000a0", label: "Budget" },
                        { color: "#00d7b9", label: "Run Rate" },
                    ]}
                />
            {/* </div> */}
            {name.includes("Exp") && (
                <Modal
                    open={openModal}
                    onClose={handleCloseModal}
                    sx={{
                        left: "30%",
                        display: "flex",
                        alignItems: "center",
                        width: "60%",
                    }}
                >
                    <ExpenseDumbbellChart />
                </Modal>
            )}
        </>
    );
};

export default BarAndLineChart;