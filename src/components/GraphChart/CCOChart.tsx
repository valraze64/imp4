import React, { useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Checkbox } from "@mui/material";
import { useSelector } from "react-redux";

interface CCOChartProps {
    name: string;
    runRate: number[]
    currentPeriod: number[];
    budget: number[][];
    fpiPeriodSpend?:any;
    fpiPeriodBudget?:any;
  }

const CCOChart: React.FC<CCOChartProps> = ({
    name,
    runRate,
    currentPeriod,
    budget: refPeriod,
    fpiPeriodSpend,
    fpiPeriodBudget,
}) => {
//   const categories = ["LAR", "SRM", "Management", "Strategic Channel", "All"];

  const currentPeriodValues = [55, 40, 35, 30]; // Orange bars (current period)
  const targetValues = [60, 45, 30, 50]; // Purple reference lines (targets)
  const data = useSelector((state: any) => state.data);
  const [categories, setCategories] = React.useState<string[]>([]);
  const [seriesDataPeriodSpend, setSeriesDataPeriodSpend] = React.useState<number[]>([]);
  const [seriesDataPeriodBudget, setSeriesDataPeriodBudget] = React.useState<number[]>([]);
//   const seriesData = overallData?.value ? Object.values(overallData.value) : [];

  console.log("27", fpiPeriodSpend);

  const dataPropHardCode = 
  [
    {
        "title": "Overall",
        "value": {
            "SQA": 151,
            "Procurement Excellence": -53,
            "Sourcing": 1297,
            "Commercial operations": 2495,
            "Sustainability": -2999
        }
    },
    {
        "title": "SWB",
        "value": {
            "SQA": 151,
            "Procurement Excellence": -53
        }
    },
    {
        "title": "Expense",
        "value": {
            "Sourcing": 1297,
            "Commercial operations": 2495,
            "Sustainability": -2999
        }
    }
]


// const categories = dataPropHardCode.map((item: any) => Object.keys(item.value)).flat();

const handleRadioClick = (event: any) => {
  if (event.target.value === "option1") {
    const overallDataSpend = fpiPeriodSpend.find((item: { title: string; }) => item.title === "Overall");
    setCategories( overallDataSpend?.value ? Object.keys(overallDataSpend.value) : []);
    console.log("72", overallDataSpend?.value ? Object.keys(overallDataSpend.value) : []);
    setSeriesDataPeriodSpend( overallDataSpend?.value ? Object.values(overallDataSpend.value) : []);
    console.log("74", overallDataSpend?.value ? Object.values(overallDataSpend.value) : []);
    console.log("74",fpiPeriodBudget );
    // const overallDataBudget = fpiPeriodBudget.data.find((item: { title: string; }) => item.title === "Overall");
    // // setCategories( overallDataBudget?.value ? Object.keys(overallDataBudget.value) : []);
    // setSeriesDataPeriodBudget( overallDataBudget?.value ? Object.values(overallDataBudget.value) : []);
  }
  else 
  if (event.target.value === "option2") {
    const SWBDataSpend = fpiPeriodSpend.find((item: { title: string; }) => item.title === "SWB");
    setCategories( SWBDataSpend?.value ? Object.keys(SWBDataSpend.value) : []);
    setSeriesDataPeriodSpend( SWBDataSpend?.value ? Object.values(SWBDataSpend.value) : []);
    const SWBDataBudget = fpiPeriodBudget.data.find((item: { title: string; }) => item.title === "SWB");
    // setCategories( SWBDataBudget?.value ? Object.keys(SWBDataBudget.value) : []);
    console.log("87", SWBDataSpend?.value ? Object.keys(SWBDataSpend.value) : []);

    setSeriesDataPeriodBudget( SWBDataBudget?.value ? Object.values(SWBDataBudget.value) : []);
    console.log("88", SWBDataSpend?.value ? Object.values(SWBDataSpend.value) : []);
    console.log("89",fpiPeriodBudget );
  }
  else
  if (event.target.value === "option3") {
    const ExpenseDataSpend = fpiPeriodSpend.find((item: { title: string; }) => item.title === "Expense");
    setCategories( ExpenseDataSpend?.value ? Object.keys(ExpenseDataSpend.value) : []);
    setSeriesDataPeriodSpend( ExpenseDataSpend?.value ? Object.values(ExpenseDataSpend.value) : []);
    const ExpenseDataBudget = fpiPeriodBudget.data.find((item: { title: string; }) => item.title === "Expense");
    // setCategories( SWBDataBudget?.value ? Object.keys(SWBDataBudget.value) : []);
    setSeriesDataPeriodBudget( ExpenseDataBudget?.value ? Object.values(ExpenseDataBudget.value) : []);
  }
};

useEffect(() => {
    console.log("99", categories, seriesDataPeriodSpend);
    console.log("100", seriesDataPeriodSpend);
}, [categories, seriesDataPeriodSpend]);

  // Error bars to create horizontal reference lines (targets)
const targetErrorBars = targetValues.map((value, index) => ({
    x: index,
    low: value - 0.5, // Offset for horizontal thickness
    high: value + 0.5, // Offset for horizontal thickness
  }));
     Highcharts.SVGRenderer.prototype.symbols.custom2 = function (x: any, y: any, w: any, h: any) {
         return  ['M', x, y, 'L', x + w, y]; // Create a simple line (from x, y to x, y+h)
        //  return ['M', x, y, 'L', x, y + h]; // Create a simple line (from x, y to x, y+h)`
       };
  const options: Highcharts.Options = {
    // exporting: {
    //     enabled: false // disable default export button
    //   },
    chart: {
      type: "bar",
      height: "40%",
      inverted: false,
    //   threshold: null,
    },
    title: {
      text: name, // data.local.team
      align: "left",
      style: {
        fontWeight: "bold",
      },
    },
    xAxis: {
        type:"category",
        // type:"logarithmic",
        // tickPixelInterval: 50,
        // tickInterval: Math.ceil(categories.length / 5), // Show only 5 categories
      categories: categories, //dataPropHardCode.map((item: any) => item.title),

        labels: {
            rotation: -45, // Rotate labels for better visibility
            // style: {
            // fontSize: '6px', // Reduce font size
            // },
      },
      title: {
        text: "Sub Team",
      },
    },
    yAxis: {
        // min: Math.min(...seriesDataPeriodSpend), // Set the minimum value to the smallest value in the series data
        type:"logarithmic",
        // tickPixelInterval: 50,
      title: {
        text: "",
      },
      labels: {
        format: "${value}K",
      },
    },
    legend: {
      enabled: true,
    },
    plotOptions: {
    //   bar: {
    //     groupPadding: 0.2,
    //     pointPadding: 0.1,
    //   },
    //   column: {
    //     pointWidth: 1, // adjust this value to make the bars thinner
    // },
    },
    series: [
      // Orange bars for Current Period
      {
        name: "Current Period",
        type: "bar",
        data: seriesDataPeriodSpend,
        // data: [0,0,0,0,12],
        color: "#ff8200",
      },

      // Purple horizontal reference lines (Target)
      {
        name: "Budget",
        type: "scatter",
        data: seriesDataPeriodBudget,
        // data: [
        // //     // [0, 60],
        // //     //  [1, 32], [2, 54], [3, 28],
        // //      [4, 28]
        //      [4, 21], [5, 11], [6, 18], [7, 16], [8, 9], [9, 12], [10, 21], [11, 18], [12, 20]
        // ],
        color: "#0000a0",
        // whiskerWidth: 10, // Horizontal thickness
        // whiskerLength: 0, // No vertical lines
        lineWidth: 0, // Thick purple reference lines
        enableMouseTracking: false,


        marker: {
            symbol: 'custom2', // Define a custom symbol
            lineWidth: 30,     // Line width
            radius: 2,        // No radius (no circle)
            // states: {
            //   hover: {
            //     lineWidth: 5 // Optional: set hover line width
            //   }
            // },
            enabled: true, // Ensure the marker is enabled
            // fillColor: 'transparent', // Ensure the fill is transparent (for a simple line)
            lineColor: '#0000a0' // Set the color of the line
          },
      },
    ],
    credits: {
      enabled: false,
    },
    tooltip: {
      shared: true,
      split: true,
      valueSuffix: "K",
    },
  };

  return (
    <div>
      <div style={{ position: 'relative' }}>
        <HighchartsReact highcharts={Highcharts} options={options} />
        <div style={{ position: 'absolute', top: 15, right: 50 }}>
          <input type="radio" id="radio1" name="filter" value="option1" onClick={handleRadioClick} />
          <label htmlFor="radio1" style={{ marginRight: 10 }}>Overall</label>
          <input type="radio" id="radio2" name="filter" value="option2" onClick={handleRadioClick} />
          <label htmlFor="radio2" style={{ marginRight: 10 }}>SWB</label>
          <input type="radio" id="radio3" name="filter" value="option3" onClick={handleRadioClick} />
          <label htmlFor="radio3" style={{ marginRight: 10 }}>Expense</label>
          <input type="radio" id="radio4" name="filter" value="option4" />
          <label htmlFor="radio4">Run rate</label>
          <input type="radio" id="radio5" name="filter" value="option5" />
          <label htmlFor="radio4">YEE</label>
        </div>
      </div>
    </div>
  );
};

export default CCOChart;