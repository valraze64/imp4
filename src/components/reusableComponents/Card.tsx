import React, { JSX, useEffect } from "react";
import { PieChart, Pie, Cell } from "recharts";
import {
    Card,
    CardContent,
    Typography,
    Box,
    Grid2,
    Button,
    Tooltip,
} from "@mui/material";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import HalfPieChart from "../GraphChart/LineChart/HalfPieChart";
import GaugeChart from "../GraphChart/GaugeChart";
import GaugeChart2 from "../GraphChart/GaugeChart2";
// import InfoIcon from "@mui/icons-material/Info";
import RunRateInfo from "./RunRateInfo";
import { useSelector } from "react-redux";
import greenArrow from "../../assets/green-arrow.png";
import redArrow from "../../assets/red arrow.png";

const data = [
    { name: "Expense", value: 30, color: "#213593" }, // Dark 0000a0
    { name: "SWB", value: 70, color: "#F4A261" }, // Light Orange
];
interface KPICardProps {
    // cardData: {
    index: number;
    name: string;
    value?: string | number;
    children?: React.ReactNode; // Optional children prop
    item: any;
    // cardData?: {
    //     name: string;
    //     value: string;
    // }[]
    // }
}

const KPICard = ({ index, name, value, item }: KPICardProps): JSX.Element => {
    console.log("41", item, value);
    // const {cardDataProps} = props
    const apiData = useSelector(
        (state: { budgetData: any; loading: any; error: any; spendSummary: any;  }) => ({
            apibudgetData: state.budgetData,
            loading: state.loading,
            error: state.error,
            apiSpendSummary: state.spendSummary,
          }));


    console.log("47", apiData);
    useEffect(() => {
        console.log("35apiData in KPICard:", apiData);
    }, [apiData]);
    // const onClickFilter = () => {
    useEffect(() => {
        console.log("31", index);
    }, [index]);
    // }
    return (
        <Box
            sx={{
                // width: 260,
                // width: "25rem",
                // width: "14.6%",
                width: (index ===2 || index === 3 || index === 1) ? (item.isPieChart)?"14.7vw" : "10vw": "19vw",
                // width: (index === 1 || index === 2 || index === 3) ?  "19.6%": "22%",
                // width: "14.6%",
                // height: "22vh",
                // width: (index !== 2 && index !== 3) ?  "19.6%": "12%",
                //  bgcolor: "grey.100",
                borderRadius: 2,
                border: "1px solid rgb(131, 131, 131)",
                fontSize: "0.1rem",
                // display: "flex",
                // justifyContent: "space-evenly"
                //  alignItems: "center"
                height:"18vh",
                maxHeight:"10rem",
                // maxHeight
            }}
        >
            {/* <CardContent> */}
            <Grid2
                container
                display={"flex"}
                justifyContent={"space-between"}
                height={"30%"}
                bgcolor={
                    name.includes("SWB")
                        ? "#ffd1a1"
                        : name.includes("Expense")
                        ? "#8080d0"
                        : "#ebebf7"
                }
                fontSize={"0.4rem"}
            >
                <Typography
                    fontSize={"1rem"}
                    padding="1vh 1vw"
                    variant="h6"
                    align="left"
                    color="text.secondary"
                    // bgcolor={name.includes("SWB") ? "#ffd1a1" : name.includes("Expense")?"#8080d0":"#ebebf7"}
                >
                    {name}
                </Typography>
                {/* <RunRateInfo/> */}
                <Typography
                    padding="1vh"
                    variant="h6"
                    align="right"
                    color="text.secondary"
                    // bgcolor={name.includes("SWB") ? "#ffd1a1" : name.includes("Expense")?"#8080d0":"#ebebf7"}
                >
                    {/* <InfoIcon/> */}
                    {[4, 5].includes(index) && <RunRateInfo />}
                    {/* <Tooltip children={<InfoIcon/>} title={"undefined"}></Tooltip> */}
                </Typography>
                {/* <Typography>
        dsa
      </Typography> */}
            </Grid2>
            {/* <Grid2
      border= "10px solid red"
        // display="flex"
        // justifyContent="space-between"
        // alignItems="center"
        // mt={1}
        // paddingLeft="10px"
      > */}
            <Grid2
                container
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
                // justifyItems={"center"}
                // border= "2px solid red"
                height={"6rem"}
                // minWidth={"max-content"}
                padding={"0 0 0 3%"}
            >
                <Grid2
                    size={4}
                    minWidth={"max-content"}
                    // justifyContent={"left"}
                    // border={"1px solid green"}
                    // width={"40%"}
                    // justifyContent={"space-between"}
                    // alignItems={"center"}
                    //  marginLeft={-5}
                    // border= "10px solid red"
                >
                    <Typography
                        variant="h4"
                        color="#3b47b0"
                        width={"max-content"}
                        fontSize={"1.5vw"}
                        // fontSize={"1.5rem"}
                    >
                        $ {value}
                    </Typography>
                    {item.yOY && (item.yOY>0? (
                    // {!(name.includes("Overa") || name.includes("Budget")) && (
                        <span style={{ marginRight: 4, fontSize: "12px",color:"red" }}>
                            <img src={redArrow} alt="Red arrow" />
                            {item.yOY}%  YoY
                        </span>
                    ):(<span style={{ marginRight: 4, fontSize: "12px",color:"green" }}>
                        <img src={greenArrow} alt="Green arrow" />
                        {item.yOY}%  YoY
                    </span>))}
                </Grid2>
                {/* <Grid2
            // border= "10px solid red"
            >

          <Typography
            color="success.main"
            display="flex"
            alignItems="center"
            mt={1}
          >
            <span style={{ marginRight: 4 }}>↘</span> 11% YTD
          </Typography>
          </Grid2> */}
                <Grid2
                    size={index === 0 || index === 1 ? 6 : 8}
                    //    height={"100%"}
                    //   border= "10px solid yellow"
                      display={"flex"}
                    alignItems={"right"}
                    width={"max-content"}
                    // margin={(index === 0 || index === 1) ?"0 0 0 0": "0 -2vw 0 0"}
                    // justifyContent={"right"}

                    //   border= "10px solid red"
                >
                    {item.change && (item.change>0? (
                    // {!(name.includes("Overa") || name.includes("Budget")) && (
                        <span style={{ marginRight: 4, fontSize: "10px",color:"red" }}>
                            <img src={redArrow} alt="Green arrow" />
                            {item.change}%  {index === 4 ? "more than optimal RR" : "over the budget"}
                        </span>
                    ):(<span style={{ marginRight: 4, fontSize: "10px",color:"green" }}>
                        <img src={greenArrow} alt="Green arrow" />
                        {item.change}%  {index === 4 ? "less than optimal RR" : "under the budget"}
                    </span>))}
                    {/* 12% more than optimal rr */}
                    {
                        item.isPieChart && (
                            // <PieChart
                            //  width={80} height={80}
                            //  >
                            //   <Pie
                            //     data={data}
                            //     cx="40%"
                            //     cy="50%"
                            <>
                                <HalfPieChart item={item}></HalfPieChart>
                            </>
                        )
                        //     // innerRadius={0}
                        //     outerRadius={35}
                        //     startAngle={180}
                        //     endAngle={0}
                        //     dataKey="value"
                        //     >
                        //     {data.map((entry, index) => (
                        //         <Cell key={`cell-${index}`} fill={entry.color} />
                        //     ))}
                        //   </Pie>
                        // </PieChart>
                    }
                    {
                        item.isGaugeChart && (
                            // <PieChart
                            //  width={80} height={80}
                            //  >
                            //   <Pie
                            //     data={data}
                            //     cx="40%"
                            //     cy="50%"
                            <div style={{width: "8rem"}}>
                                {/* <GaugeChart2></GaugeChart2> */}
                                <GaugeChart gaugeUtilize={item.gaugeUtilize}></GaugeChart>
                            </div>
                        )
                        //     // innerRadius={0}
                        //     outerRadius={35}
                        //     startAngle={180}
                        //     endAngle={0}
                        //     dataKey="value"
                        //     >
                        //     {data.map((entry, index) => (
                        //         <Cell key={`cell-${index}`} fill={entry.color} />
                        //     ))}
                        //   </Pie>
                        // </PieChart>
                    }
                </Grid2>
                {/* <Grid2
            // border= "10px solid red"
            >

          <Typography
            color="success.main"
            display="flex"
            alignItems="center"
            mt={1}
          >
            <span style={{ marginRight: 4 }}>↘</span> 11% YTD
          </Typography>
          </Grid2> */}
                {/* </Grid2> */}

                {/* <Box display="flex" justifyContent="flex-end" mt={0}>
        <Box display="flex" alignItems="center" mr={2} marginLeft={"120px"}>
          <Box
            sx={{
              width: 8,
              height: 8,
              bgcolor: "#283593",
              borderRadius: "50%",
              mr: 1,
            }}
          ></Box>
          <Typography variant="caption">Expense</Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <Box
            sx={{
              width: 8,
              height: 8,
              bgcolor: "#F4A261",
              borderRadius: "50%",
              mr: 1,
            }}
          ></Box>
          <Typography variant="caption">SWB</Typography>
        </Box>
      </Box> */}
                {/* </CardContent> */}
            </Grid2>
        </Box>
    );
};

export default KPICard;
