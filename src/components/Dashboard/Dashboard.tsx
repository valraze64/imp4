import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import {
    MenuItem,
    Select,
    Card,
    CardContent,
    Typography,
    Grid2,
    Box,
    ToggleButtonGroup,
    ToggleButton,
    Button,
} from "@mui/material";
import Grid from "@mui/material/Grid2";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    LineChart,
} from "recharts";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import KPICard from "../reusableComponents/Card";
import Header from "../Header/Header";
import { grey } from "@mui/material/colors";
import {
    // DashboardContainer,
    GlobalStyles,
    StyledGrid2,
    StyledLabel,
    StyledPara,
    StyledSelect,
    StyledSpan,
    StyledToggleButtonContainer,
    StyledToggleButtonGroup,
    sxButton,
    sxSelect,
} from "./Dashboard.styled";
// import ExpenseChart from "../GraphChart/ExpenseChart";
// import OverallSpendsChart from "../GraphChart/OverallSpendsChart";
// import SalesChart from "../GraphChart/SalesChart";
// import HalfPieChart from "../GraphChart/LineChart/HalfPieChart";
import LineChart2 from "../GraphChart/LineChart/LineChart2";
import BudgetWaterfallChart from "../GraphChart/WaterfallChart";
import WaterfallChart from "../GraphChart/WaterfallChart";
import CCOChart from "../GraphChart/CCOChart";
import BarGraphChart from "../GraphChart/BarGraphChart";
import ExpenseSplitChart from "../GraphChart/LineChart/ExpenseSplitChart";
import {
    totalBudgetAction,
    spendSummaryAction,
    setCalculatedDataAction,
    setDashboardLocalStateAction,
    periodBudgetAction,
    periodSpendAction,
    getTeamsAction,
} from "../../redux/actions/actions";
import { filterQuarters } from "../utils/util";
import OverallSpend from "../reusableComponents/Card2";
import WaterfallChart2 from "../GraphChart/WaterfallChart2";

interface SpendSummaryType {
    title: string;
    value: number;
    change?: string;
    run_rate?: number;
}

interface BudgetDataType {
    value: number;
    change: number;
    optimal_run_rate: number;
}

const Dashboard = () => {
    const dispatch = useDispatch();
    const { budgetData, loading, error, spendSummary,periodSpend: fpiPeriodSpend,periodBudget: fpiPeriodBudget, teamsData  } = useSelector(
        (state: {
                data: any;

                budgetData: BudgetDataType;
                loading: boolean;
                error: any;
                spendSummary: SpendSummaryType[];
                periodSpend: any;
                periodBudget: any;
                teamsData: any;

        }) => state.data.apiFetched
    );

    // const spendSummary = useSelector(
    //     (state: { api: { spendSummary: any } }) => state.api.spendSummary
    // );
    console.log("90", spendSummary);

    // useEffect(() => {
    //     dispatch(totalBudgetAction());
    //     dispatch(spendSummaryAction());
    // }, [dispatch]);

    useEffect(() => {
        console.log("98", teamsData);
        // console.log("98",  budgetData, loading, error, spendSummary,periodSpend,periodBudget);
    }, [budgetData, error, loading, fpiPeriodBudget, fpiPeriodSpend, spendSummary, teamsData]);
    useEffect(() => {
        dispatch(getTeamsAction());
    }, [dispatch]);

    const [team, setTeam] = useState("Commercial");
    const [subTeam, setSubTeam] = useState("All");
    const [duration, setDuration] = useState("");
    const [qAndP, setQAndP] = useState<string[]>([]);
    const [quarters, setQuarters] = useState<string[]>([]);
    const [periods, setPeriods] = useState<string[]>([]);
    const [year, setYear] = useState("");
    const [currency, setCurrency] = useState("USD");
    const [dashboardLocalState, setDashboardLocalState] = useState({});

    const allQAndP = [
        "Q1",
        "P01",
        "P02",
        "P03",
        "Q2",
        "P04",
        "P05",
        "P06",
        "Q3",
        "P07",
        "P08",
        "P09",
        "Q4",
        "P10",
        "P11",
        "P12",
        "P13",
    ];
    // const allQAndP2 = {
    //     Q1: ["Q1", "P01", "P02", "P03"],
    //     Q2: ["Q2", "P04", "P05", "P06"],
    //     Q3: ["Q3", "P07 ", "P08", "P09"],
    //     Q4: ["Q4", "P10 ", "P11", "P12", "P13"],
    // };
    const allQAndP2 = {
        Q1: ["P01", "P02", "P03"],
        Q2: ["P04", "P05", "P06"],
        Q3: ["P07", "P08", "P09"],
        Q4: ["P10", "P11", "P12", "P13"],
    };
    const allQAndP3 = {
        Q1: ["P01", "P02", "P03"],
        Q2: ["P04", "P05", "P06"],
        Q3: ["P07 ", "P08", "P09"],
        Q4: ["", "P11", "P12", "P13"],
    };
    console.log("102", allQAndP2.Q1);
    const dummyCardData = [
        { name: "Total Budget", value: "$100", newValue: "" },
        { name: "Overall Spend", value: "$200" },
        { name: "Total SWB", value: "$300" },
        { name: "Total Expense", value: "$400" },
        { name: "Current Run Rate", value: "$500" },
        { name: "Year End Estimate", value: "$600" },
    ];
    const dataDummy = [
        { name: "P01", overallSpend: 20, totalBudget: 220 },
        { name: "P02", overallSpend: 18, totalBudget: 200 },
        { name: "P03", overallSpend: 15, totalBudget: 180 },
        { name: "P04", overallSpend: 13, totalBudget: 160 },
        { name: "P05", overallSpend: 20, totalBudget: 140 },
        { name: "P06", overallSpend: 15, totalBudget: 120 },
        { name: "P07", overallSpend: 14, totalBudget: 100 },
        { name: "P08", overallSpend: 16, totalBudget: 80 },
        { name: "P09", overallSpend: 12, totalBudget: 60 },
        { name: "P10", overallSpend: 10, totalBudget: 40 },
        { name: "P11", overallSpend: 14, totalBudget: 20 },
        { name: "P12", overallSpend: 13, totalBudget: 10 },
        { name: "P13", overallSpend: 10, totalBudget: 5 },
    ];

    const chartOptions = {
        chart: { type: "column", height: "50%" },
        title: { text: "Overall Spends" },
        xAxis: {
            categories: [
                "P01",
                "P02",
                "P03",
                "P04",
                "P05",
                "P06",
                "P07",
                "P08",
                "P09",
                "P10",
                "P11",
                "P12",
                "P13",
            ],
        },
        series: [
            {
                name: "Overall Spend",
                data: [20, 18, 15, 13, 20, 15, 14, 16, 12, 10, 14, 13, 10],
            },
            {
                name: "Total Budget",
                data: [
                    220, 200, 180, 160, 140, 120, 100, 80, 60, 40, 20, 10, 5,
                ],
            },
        ],
        credits: {
            enabled: false,
        },
    };

        useEffect(() => {
        setDashboardLocalState({
            team,
            subTeam,
            duration,
            qAndP,
            year,
            currency,
            quarters,
            periods,
        });
    }, [team, subTeam, duration, qAndP, year, currency]);

        useEffect(() => {
        if (Object.keys(dashboardLocalState).length > 0) {
            dispatch(setDashboardLocalStateAction(dashboardLocalState));
        }
    }, [dashboardLocalState, dispatch]);

    useEffect(() => {
        console.log("122", duration);
    }, [duration]);

    useEffect(() => {
        console.log("210", team, subTeam, year, qAndP);
        // const payload = {
        //     team,
        //     filter: {
        //         y_q_p: {
        //             year,
        //             quarter: qAndP.filter((item) => item.startsWith("Q")),
        //             // period: qAndP.filter((item) => item.startsWith("P")),
        //             // period: qAndP.filter((item) => item.startsWith("P")),
        //         },
        //     },
        // };
        // dispatch(totalBudgetAction(payload));
        // dispatch(spendSummaryAction(payload));
    }, [team, subTeam, year, qAndP, dispatch]);
    const spendSummaryDataRes = spendSummary
    // const spendSummaryDataRes =
    // [
    //     {
    //         title: "Overall Spends",
    //         value: 891.0,
    //         change: "N/A",
    //         run_rate: 111.375,
    //     },
    //     {
    //         title: "Overall SWB Spends",
    //         value: 98.0,
    //     },
    //     {
    //         title: "Overall Expenses",
    //         value: 793.0,
    //     },
    //     {
    //         title: "Overall Expenses",
    //         value: 793.0,
    //     },
    //     {
    //         title: "Year End Estimate",
    //         value: 793.0, //mapCardsData()[0].yEE
    //     },
    // ];
    const totalBudgetDataRes: BudgetDataType =
    budgetData
    // const totalBudgetDataRes = {
    //     value: 11691350.090000002,
    //     change: 1651.85,
    //     optimal_run_rate: 899334.6223076924,
    // };
    const graph2SWBPeriodSpend: number[] = Object.entries(fpiPeriodSpend?.[0]?.OverallSWBSpends?.data ?? {})
    .map(([key, value]) => Number(value) as number);
// .sort((a, b) => a - b)
// .map(index => fpiPeriodSpend?.[0]?.OverallSWBSpends?.data?.[`P${index + 1}`] || 0); //2nd graph orange
    // const as = fpiPeriodSpend?.[0]?.OverallSWBSpends?.data?.Object.keys()
    //     .sort()
    //     .map((key: string | number) => graph2SWBPeriodSpend[key as keyof typeof graph2SWBPeriodSpend])
    console.log("2829 ", Object.entries(fpiPeriodSpend?.[0]?.OverallSWBSpends?.data ?? {}));
    console.log("289 ", graph2SWBPeriodSpend);
    // {
    //     // "P02": 91,
    //     "P01": 98,
    //     // "P05": 10004
    // }
    // const graph3ExpensePeriodSpend: number[]=
    // Object.entries(fpiPeriodSpend?.[0]?.OverallSpends?.data ?? {})
    // .map(([key, value]) => parseInt(key.replace("P", ""), 10) - 1)
    // .sort((a, b) => a - b)
    // .map(index => fpiPeriodSpend?.[0]?.OverallSpends?.data?.[`P${index + 1}`] || 0);//3rd graph orange
const graph3ExpensePeriodSpend: number[] = Object.entries(fpiPeriodSpend?.[0]?.OverallSpends?.data ?? {})
  .map(([key, value]) => Number(value) as number);
    // {
    //     // "P02": 91,
    //     "P01": 793,
    //     // "P05": 10004
    // }

    // console.log("313", spendSummary[0]?.run_rate);
    const rrPeriodRes =//3rd graph orange
    {
        // "P02": 91,
        "P01": 891,
        // "P05": 10004
    }
    const swbBudgetRes : number = fpiPeriodBudget?.P?.SWBBudget //2nd graph blue
    // const as = Object.keys(swbBudgetRes)
    //     .sort()
    //     .map((key) => [
    //         parseInt(key.replace("P", ""), 10) - 1, // Extract the number from the key
    //         expenseBudgetRes[key as keyof typeof expenseBudgetRes],
    //     ])
        console.log("310", swbBudgetRes);
    // {
    //     // "P02": 91,
    //     // "P01": 1169,
    //     "P01": 11690000,
    //     // "P05": 10004
    // }
    const expenseBudgetRes : number =fpiPeriodBudget?.P?.budgetDetails//3rd graph blue
    console.log("318", expenseBudgetRes);
    // {
    //     // "P02": 91,
    //     // "P01": 1169,
    //     "P01": 11690000,
    //     // "P05": 10004
    // }
    const rrperiodRes =//4th graph orange
    {
        // "P02": 91,
        // "P01": 1169,
        "P01": 891,
        // "P05": 10004
    }
    const requiredrrRes =//4th graph blue
    {
        // "P02": 91,
        // "P01": 1169,
        "P01": 11690000,
        // "P05": 10004
    }

    useEffect(() => {
        console.log("234",spendSummary,budgetData );
        // if (spendSummary && budgetData)mapCardsData();
    }, [spendSummary, budgetData]);
    const formatNumber = (num: number) => {
        const suffixes = ["K", "M", "B", "T"];
        const thresholds = [1000, 1000000, 1000000000, 1000000000000];

        for (let i = 0; i < thresholds.length; i++) {
            if (num >= thresholds[i]) {
                const suffix = suffixes[i];
                const formattedNum = (num / thresholds[i]).toFixed(2);
                return formattedNum + suffix;
            }
        }

        return num.toFixed(2);
    };
    const formatNumber2 = (num: number | string) => {
        num = Number(num);
        const units = ["K", "M", "B"];
        let unitIndex = -1;

        while (num >= 1000 && unitIndex < units.length - 1) {
            num /= 1000;
            unitIndex++;
        }

        if (num % 1 === 0) { // check if num is an integer
            return num.toFixed(0) + (unitIndex === -1 ? "" : units[unitIndex]);
        } else {
            return num.toFixed(2) + (unitIndex === -1 ? "" : units[unitIndex]);
        }
    };

    const [mappedCardData, setMappedCardData] = useState<any[]>([]);

    useEffect(() => {
        if (totalBudgetDataRes && spendSummaryDataRes) {
            const totalBudget = totalBudgetDataRes.value;
            const overallSpend = spendSummaryDataRes.find(
                (item: { title: string }) => item.title === "Overall Spends"
            )!;
            const remainingBudget = totalBudget - overallSpend.value;

            const gaugeUtilize = overallSpend.value
                ? (overallSpend.value / totalBudget) * 100
            // ? Math.round((overallSpend.value / totalBudget) * 100)
                : 1;
            const overallSWBSpends = spendSummaryDataRes.find(
                (item: { title: string }) => item.title === "Overall SWB Spends"
            )?.value ?? 0;
            const overallExpenses = spendSummaryDataRes.find(
                (item: { title: string }) => item.title === "Overall Expenses"
            )?.value ?? 0;
            console.log("410", ((filterQuarters(qAndP)).length));
            const currentRR = overallSpend.value / 1
            const requiredRR = (totalBudget-overallSpend.value)/12

            // ((filterQuarters(qAndP)).length > 0 ? (filterQuarters(qAndP)).length : 1);//1 since 1 period
            console.log("381",currentRR);
            const roundedcurrentRR = (overallSpend.value / 1).toFixed(2);
            const yEE = currentRR * 13;// 13 fixed
            // const yEE = (overallSpend.run_rate ?? 0) * 1;
            const yEEChange = Math.floor(((totalBudget - yEE) / totalBudget) * 100);


            const mappedDataDefault = [
                {
                    title: "Total Budget",
                    value: formatNumber2(totalBudget),
                    isPieChart: false,
                    gaugeUtilize,
                    isGaugeChart: true,
                    yOY: "",
                    remainingBudget,
                    // yOY: "1",
                },
                {
                    title: "Overall Spends",
                    value: formatNumber2(overallSpend.value),
                    isPieChart: true,
                    isGaugeChart: false,
                    yOY: "",
                    // yOY: "1",
                    overallSWBSpends,
                    overallExpenses,
                },
                {
                    title: "Total SWB",
                    value: formatNumber2(overallSWBSpends),
                    isPieChart: false,
                    isGaugeChart: false,
                },
                {
                    title: "Total Expense",
                    value: formatNumber2(overallExpenses),
                    isPieChart: false,
                    isGaugeChart: false,
                },
                {
                    title: "Current Run Rate",
                    value: formatNumber2(roundedcurrentRR),
                    change: "1",
                    isPieChart: false,
                    isGaugeChart: false,
                    requiredRR
                },
                {
                    title: "Year End Estimate",
                    value: formatNumber2(yEE),
                    change: yEEChange,
                    isPieChart: false,
                    isGaugeChart: false,
                },
            ];

            setMappedCardData(mappedDataDefault);
        }
    }, [qAndP, spendSummaryDataRes, totalBudgetDataRes]);

    useEffect(() => {
        if (mappedCardData) {
            console.log("384", mappedCardData);
            dispatch(
                setCalculatedDataAction(mappedCardData)
            );
        }
    }, [dispatch, mappedCardData]);

    const handleChangeDuration = (
        event: React.MouseEvent<HTMLElement>,
        newValue: string
    ) => {
        console.log("101", newValue);
        setDuration(newValue);
        if (newValue) {
            setYear(""); // Clear year when duration is selected
        } else {
            handleClearFilter();
        }
    };
    console.log("489", fpiPeriodBudget?.P?.budgetSummary);
    const handleChangeYear = (
        event: React.MouseEvent<HTMLElement>,
        newValue: string
    ) => {
        console.log("108", newValue);
        setYear(newValue);
        if (newValue) {
            setDuration(""); // Clear duration when year is selected
            handleChangeEnableAll();
            // const payload = {
            //     team,
            //     filter: {
            //         y_q_p: {
            //             year,
            //             quarter: qAndP.filter((item) => item.startsWith("Q")),
            //             // period: qAndP.filter((item) => item.startsWith("P")),
            //             // period: qAndP.filter((item) => item.startsWith("P")),
            //         },
            //     },
            // };
            // dispatch(totalBudgetAction(payload));
            // dispatch(spendSummaryAction(payload));
            // dispatch(totalBudgetAction(newValue));
            // dispatch(spendSummaryAction(newValue));
        } else {
            setQAndP([]);
        }
    };

    useEffect(() => {
        console.log("441", year);
        // console.log("442", payload);
        // if(year)
        // {
        // dispatch(totalBudgetAction(payload));
        // dispatch(spendSummaryAction(payload));
        // dispatch(periodSpendAction(payload));
        // dispatch(periodBudgetAction(payload));
        // dispatch(getTeamsAction());
        console.log("519", fpiPeriodSpend);
        console.log("519", fpiPeriodSpend);
        console.log("520", fpiPeriodBudget);

    }, [year, qAndP, team, dispatch, fpiPeriodSpend, fpiPeriodBudget]);
    useEffect(() => {
        const payload = {
            team,
            filter: {
                y_q_p: {
                    year,
                    quarter:[],
                    // quarter: qAndP.filter((item) => item.startsWith("Q")),
                    period: qAndP.filter((item) => item.startsWith("P")),
                    // period: qAndP.filter((item) => item.startsWith("P")),
                },
            },
        };
        console.log("441", year);
        console.log("442", payload);
        if(year)
        {
        dispatch(totalBudgetAction(payload));
        dispatch(spendSummaryAction(payload));
        dispatch(periodSpendAction(payload));
        dispatch(periodBudgetAction(payload));
        console.log("519", fpiPeriodSpend);
        console.log("519", fpiPeriodSpend);
        console.log("520", fpiPeriodBudget);
    }
    }, [year, qAndP, team, dispatch]);
    const handleChangeToggleAll = () => {
        setQAndP((prevQAndP) => {
            const allValues = allQAndP; // assuming allPossibleValues is an array of all possible values
            //   const allValues = [...new Set(allPossibleValues)]; // assuming allPossibleValues is an array of all possible values
            return allValues.filter((value) => !prevQAndP.includes(value));
        });
    };

    const handleChangeEnableAll = () => {
        setQAndP((prevQAndP) => {
            const updatedQAndP = [
                ...prevQAndP,
                ...allQAndP.filter((value) => !prevQAndP.includes(value)),
            ];

            const quarters = updatedQAndP.filter((item) => item.startsWith("Q"));
            const periods = updatedQAndP.filter((item) => !item.startsWith("Q"));

            console.log("655", quarters, periods);

            setQuarters(quarters);
            setPeriods(periods);

            return updatedQAndP;
        });
    };
    const handleChangeQAndP = (
        event: React.MouseEvent<HTMLElement>,
        newValue: string
    ) => {
        setQAndP((prevQAndP) => {
            let updatedQAndP = [...prevQAndP];

            if (Object.keys(allQAndP2).includes(newValue)) {
                // If the newValue is a quarter (e.g., Q1)
                const quarterValues = allQAndP2[newValue as keyof typeof allQAndP2];
                const allSelected = quarterValues.every((val) =>
                    updatedQAndP.includes(val)
                );

                if (allSelected) {
                    // Remove the quarter and its periods
                    updatedQAndP = updatedQAndP.filter(
                        (item) => !quarterValues.includes(item) && item !== newValue
                    );
                } else {
                    // Add the quarter and its periods
                    updatedQAndP = [
                        ...new Set([...updatedQAndP, ...quarterValues, newValue]),
                    ];
                }
            } else {
                // If the newValue is a period (e.g., P01)
                if (updatedQAndP.includes(newValue)) {
                    // Remove the period
                    updatedQAndP = updatedQAndP.filter((item) => item !== newValue);
                } else {
                    // Add the period
                    updatedQAndP.push(newValue);
                }

                // Check if all periods for a quarter are selected
                Object.keys(allQAndP2).forEach((quarter) => {
                    const quarterValues =
                        allQAndP2[quarter as keyof typeof allQAndP2];
                    const allSelected = quarterValues.every((val) =>
                        updatedQAndP.includes(val)
                    );

                    if (allSelected) {
                        // Add the quarter if all its periods are selected
                        if (!updatedQAndP.includes(quarter)) {
                            updatedQAndP.push(quarter);
                        }
                    } else {
                        // Remove the quarter if not all its periods are selected
                        updatedQAndP = updatedQAndP.filter(
                            (item) => item !== quarter
                        );
                    }
                });
            }
            const quarters = updatedQAndP.filter((item) => item.startsWith("Q"));
            const periods = updatedQAndP.filter((item) => !item.startsWith("Q"));

            console.log("655", quarters, periods);

            setQuarters(quarters);
            setPeriods(periods);
            return updatedQAndP;
        });
    };

    useEffect(() => {
        console.log("655", quarters, periods);

    }, [periods, quarters]);

    const handleDeselectQ1 = () => {
        setQAndP((prevQAndP) => prevQAndP.slice(4));
    };
    const handleDeselectAny = (index: any) => {
        setQAndP((prevQAndP) =>
            prevQAndP.filter((item, index) => index < 4 || index >= 8)
        );
    };
    useEffect(() => {
        console.log("124", qAndP);
    }, [qAndP]);
    const handleClearFilter = () => {
        setDuration("");
        setYear("");
        setQAndP([]);
        setTeam("Commercial");
        setSubTeam("All");
        setCurrency("USD");
    };
    // const labelStyle = {
    //     display: "flex",
    //     alignItems: "center",
    // };

    return (
        //  <GlobalStyles />

        // <DashboardContainer>
            <>
                <Header />

                <Box
                    // sx={{
                    //     padding: 0,
                    //     //   backgroundColor: "grey",
                    //     "& .MuiToggleButtonGroup-root": {
                    //         ".MuiToggleButtonGroup-lastButton, .MuiToggleButtonGroup-firstButton"
                    //         :
                    //             {
                    //                 margin: "-1px",
                    //                 border: "1px solid red",
                    //                 borderTopLeftRadius: 40,
                    //                 borderBottomLeftRadius: 0,
                    //             },
                    //     },
                    // }}
                >
                                            {/* <div style={{ fontFamily: 'MarsCentra-Book' }}>
    Test MarsCentra-Books Font
</div> */}
                    {/* <ExpenseSplitChart></ExpenseSplitChart> */}

                    <Grid2
                        container
                        spacing={2}
                        sx={{
                            //   border: "10px solid red",
                            backgroundColor: "#ebebf8",
                            // height: "10vh", // Adjust t
                        }}
                        // height={"10%"}
                        // padding={10}
                    >
                        {/* Filters */}
                        <Grid2
                            container
                            // columnSpacing={30}
                            // // flexWrap="nowrap"
                            spacing={1}
                            sx={{ height: "9vh" }}
                            size={11}
                            height={"1%"}
                            padding={1}
                        >
                            <StyledSpan>
                                <StyledLabel>Team</StyledLabel>
                                <StyledSelect
                                    // className="Button"
                                    sx={{
                                        padding: "0% 0",
                                        margin: "10%",
                                        // border: "1px solid Black",
                                        // borderRadius: "15%",
                                        backgroundColor: "white",
                                    }}
                                    value={team}
                                    onChange={(e) => {
                                        if (
                                            typeof e.target.value === "string"
                                        ) {
                                            setCurrency(e.target.value);
                                        }
                                    }}
                                >
                                    {Object.keys(teamsData || {}).map(
                                        (team, index) => (
                                            <MenuItem key={index} value={team} onClick={()=> setTeam(team)}>
                                                {team}
                                            </MenuItem>
                                        )
                                    )}
                                    {/* <MenuItem value="CCO (Regional Sales)">
                                        CCO (Regional Sales)
                                    </MenuItem> */}
                                    {/* <MenuItem value="Commercial">
                                    Commercial
                                    </MenuItem> */}
                                </StyledSelect>
                            </StyledSpan>
                            <Grid2
                                container
                                display={"flex"}
                                alignItems={"center"}
                                // justifyContent={"space-between"}
                                // height={"30%"}
                                size={3}
                                    >
                                <StyledLabel>Sub Team</StyledLabel>
                                <StyledSelect
                                    sx={sxSelect}
                                    value={subTeam}
                                    onChange={(e) => {
                                        if (
                                            typeof e.target.value === "string"
                                        ) {
                                            setCurrency(e.target.value);
                                        }
                                    }}
                                >
                                    {Object.keys(teamsData || {}).map((team, index) =>
                                        teamsData[team].map(
                                            (
                                                subteam: string,
                                                subIndex: number
                                            ) => (
                                                <MenuItem
                                                    key={`${team}-${subIndex}`}
                                                    value={subteam}
                                                    onClick={() =>
                                                        setSubTeam(subteam)
                                                    }
                                                >
                                                    {subteam}
                                                </MenuItem>
                                            )
                                        )
                                    )}
                                </StyledSelect>
                            </Grid2>
                            {/* <Button
                              sx={{ alignItems: "flex-end" }}
                              onClick={() => handleClearFilter()}
                          >
                              Clear filters
                          </Button> */}
                        </Grid2>
                        <Grid2
                            container
                            // columnSpacing={30}
                            // // flexWrap="nowrap"
                            spacing={2}
                            // sx={{ border: "10px solid green", }}
                            size={1}
                            justifyContent="flex-start"
                        >
                            <StyledSpan>
                                <StyledSelect
                                    className="dropdown"
                                    // sx={{ marginRight: "1px" }}
                                    value={currency}
                                    onChange={(e) => {
                                        if (
                                            typeof e.target.value === "string"
                                        ) {
                                            setCurrency(e.target.value);
                                        }
                                    }}
                                    //   sx={sxSelect}
                                >
                                    <MenuItem value="USD">USD $</MenuItem>
                                    <MenuItem value="EUR">EUR €</MenuItem>
                                </StyledSelect>
                            </StyledSpan>
                        </Grid2>

                        {/* next grid  */}
                        <Grid2
                            container
                            // columnSpacing={30}
                            // // flexWrap="nowrap"
                            spacing={2}
                            // sx={{ border: "10px solid green" }}
                            size={12}
                        >
                            <StyledLabel>Select a time period</StyledLabel>
                            <Box>
                                {/* <StyledPara
                                  style={{
                                      // marginBottom: "10px",
                                      fontSize: "16px",
                                  }}
                              >
                                  Duration
                              </StyledPara> */}
                                <Grid2
                                    container
                                    spacing={1}
                                    alignItems={"center"}
                                    padding={"1% 0"}
                                >
                                    <Grid2
                                        size={4}
                                        border={"1px solid rgb(201, 201, 211)"}
                                        fontSize={0}
                                        // padding={"2%"}
                                        // display={"inline-flex"}
                                        // height={"90%"}
                                    >
                                        -------------------------
                                        {/* <StyledSpan>2024 Compared to previous year </StyledSpan> */}
                                    </Grid2>
                                    <Grid2
                                        size={5}
                                        // border={"10px solid red"}
                                        fontSize={14}
                                        // padding={"2%"}
                                        // display={"inline-flex"}
                                        // height={"90%"}
                                        color={"#6E6E6E"}
                                    >
                                        Duration
                                        {/* <StyledSpan>Financial Performance</StyledSpan> */}
                                    </Grid2>
                                    <Grid2
                                        size={2}
                                        border={"1px solid rgb(201, 201, 211)"}
                                        fontSize={0}
                                        // padding={"2%"}
                                        // display={"inline-flex"}
                                        // height={"90%"}
                                    >
                                        -------------------------
                                        {/* <StyledSpan>2024 Compared to previous year </StyledSpan> */}
                                    </Grid2>
                                    {/* <Grid2
                          size={8}
                          // border={"10px solid red"}
                          // display={"inline-flex"}
                          // height={"90%"}
                      >
                          <StyledSpan>-------------------------</StyledSpan>
                      </Grid2> */}
                                </Grid2>
                                <StyledToggleButtonGroup
                                    value={duration}
                                    exclusive
                                    onChange={handleChangeDuration}
                                    // onClick={(e) => setYear("2021")}
                                    aria-label="Year selection"
                                >
                                    {["PTD", "QTD", "YTD"].map((yr) => (
                                        <ToggleButton
                                            key={yr}
                                            value={yr}
                                            sx={sxButton(year, yr)}
                                            disabled={year?.length > 0}
                                        >
                                            {yr}
                                        </ToggleButton>
                                    ))}
                                </StyledToggleButtonGroup>
                            </Box>
                            <div
                            // style={{
                            //   textAlign: "center",
                            //   marginTop: "20px",
                            // }}
                            >
                                {/* <StyledPara
                                  style={{
                                      // marginBottom: "10px",
                                      fontSize: "16px",
                                  }}
                              >
                                  Year
                              </StyledPara> */}
                                <Grid2
                                    container
                                    spacing={1}
                                    alignItems={"center"}
                                    //   padding={"1% 0"}
                                >
                                    <Grid2
                                        size={5}
                                        border={"1px solid rgb(201, 201, 211)"}
                                        fontSize={0}
                                        // padding={"2%"}
                                        // display={"inline-flex"}
                                        // height={"90%"}
                                    >
                                        -------------------------
                                        {/* <StyledSpan>2024 Compared to previous year </StyledSpan> */}
                                    </Grid2>
                                    <Grid2
                                        size={2}
                                        // border={"10px solid red"}
                                        fontSize={12}
                                        display={"contents"}
                                        color={"#6E6E6E"}
                                        // padding={"2%"}
                                        // display={"inline-flex"}
                                        // height={"90%"}
                                    >
                                        Year
                                        {/* <StyledSpan>Financial Performance</StyledSpan> */}
                                    </Grid2>
                                    <Grid2
                                        size={5}
                                        border={"1px solid rgb(201, 201, 211)"}
                                        fontSize={0}
                                        // padding={"2%"}
                                        // display={"inline-flex"}
                                        // height={"90%"}
                                    >
                                        -------------------------
                                        {/* <StyledSpan>2024 Compared to previous year </StyledSpan> */}
                                    </Grid2>
                                </Grid2>
                                <StyledToggleButtonGroup
                                    value={year}
                                    exclusive
                                    onChange={handleChangeYear}
                                    // onClick={(e) => setYear("2021")}
                                    aria-label="Year selection"
                                >
                                    {[
                                        "2021",
                                        "2022",
                                        "2023",
                                        "2024",
                                        "2025",
                                    ].map((yr) => (
                                        <ToggleButton
                                            key={yr}
                                            value={yr}
                                            onClick={handleChangeYear}
                                            // disabled={!duration}
                                            sx={sxButton(year, yr)}
                                        >
                                            {yr}
                                        </ToggleButton>
                                    ))}
                                </StyledToggleButtonGroup>
                            </div>

                            <Box>
                                <Grid>
                                    {/* <StyledPara
                                  style={{
                                      // marginBottom: "10px",
                                      fontSize: "16px",
                                  }}
                                  >
                                  Quarters & Periods
                              </StyledPara> */}
                                    <Grid2
                                        container
                                        spacing={1}
                                        alignItems={"center"}
                                        //   padding={"1% 0"}
                                    >
                                        <Grid2
                                            size={year === "2025" ? 0.4 : 5}
                                            border={
                                                "1px solid rgb(201, 201, 211)"
                                            }
                                            fontSize={0}
                                            // padding={"2%"}
                                            // display={"inline-flex"}
                                            // height={"90%"}
                                        >
                                            -------------------------
                                            {/* <StyledSpan>2024 Compared to previous year </StyledSpan> */}
                                        </Grid2>
                                        <Grid2
                                            size={2}
                                            // border={"10px solid red"}
                                            fontSize={12}
                                            padding={"2px"}
                                            // display={"inline-flex"}
                                            // height={"90%"}
                                            width={"max-content"}
                                            color={"#6E6E6E"}
                                        >
                                            Quarters & Periods
                                            {/* <StyledSpan>Financial Performance</StyledSpan> */}
                                        </Grid2>
                                        <Grid2
                                            size={year === "2025" ? 0.4 : 4.5}
                                            border={
                                                "1px solid rgb(201, 201, 211)"
                                            }
                                            fontSize={0}
                                            // padding={"2%"}
                                            // display={"inline-flex"}
                                            // height={"90%"}
                                        >
                                            -------------------------
                                            {/* <StyledSpan>2024 Compared to previous year </StyledSpan> */}
                                        </Grid2>
                                    </Grid2>
                                </Grid>
                                <>
                                <StyledToggleButtonContainer
                                    sx={{
                                        display: "flex", // Arrange all groups in a single line
                                        justifyContent: "space-between", // Add spacing between groups
                                        alignItems: "center", // Align items vertically
                                        flexWrap: "nowrap", // Prevent wrapping to the next line
                                        overflowX: "auto", // Allow horizontal scrolling if needed
                                        gap: "16px", // Add spacing between groups
                                    }}
                                >
                                    {Object.keys(allQAndP2).map((quarter, index) => (
                                        <StyledToggleButtonGroup
                                            key={quarter}
                                            value={qAndP}
                                            exclusive
                                            onChange={handleChangeQAndP}
                                            aria-label={`${quarter} selection`}
                                            disabled={!year}
                                            sx={{
                                                // width: "47vw",
                                                marginBottom: "16px", // Add spacing between groups
                                            }}
                                        >
                                            <ToggleButton
                                                value={quarter}
                                                sx={sxButton(year, quarter)}
                                                selected={
                                                    qAndP.includes(quarter) ||
                                                    allQAndP2[quarter as keyof typeof allQAndP2].every((period) =>
                                                        qAndP.includes(period)
                                                    )
                                                }
                                            >
                                                {quarter}
                                            </ToggleButton>
                                            {allQAndP2[quarter as keyof typeof allQAndP2].map((period) => (
                                                <ToggleButton
                                                    key={period}
                                                    value={period}
                                                    sx={sxButton(year, period)}
                                                >
                                                    {period}
                                                </ToggleButton>
                                            ))}
                                        </StyledToggleButtonGroup>
                                    ))}
                                </StyledToggleButtonContainer>
                                </>
                            </Box>
                            <Button
                                sx={{
                                    alignItems: "flex-end",
                                    fontSize: "12px",
                                }}
                                onClick={handleClearFilter}
                            >
                                Clear filters
                            </Button>
                        </Grid2>
                        <Grid
                            container
                            columnSpacing={30}
                            // flexWrap="nowrap"
                            spacing={2}
                            // sx={{ border: "10px solid green" }}
                        ></Grid>

                        <Grid
                            container
                            columnSpacing={30}
                            // flexWrap="nowrap"
                            spacing={2}

                            // sx={{ border: "10px solid green" }}
                        >
                            {/* <Box sx={{ width: "100%", display: "block", border: "10px solid red",}}> */}
                        </Grid>
                        {/* </Box> */}
                    </Grid2>
                    <Grid2
                        sx={{ background: "#fff" }}
                        container
                        spacing={0}
                        columns={12}
                        //   border="10px solid red"
                        padding={"1% 1% 0 1%"}
                        //   display={"flex"}
                        // //   backgroundColor={"#ebebf7"}
                        //   justifyContent={"space-evenly"}
                        justifyContent={"space-evenly"}
                    >
                        {mappedCardData.map(
                            (item, index) =>
                                index === 0 && (
                                    <KPICard
                                        key={index}
                                        index={index}
                                        name={item.title}
                                        value={
                                            item.value !== undefined
                                                ? item.value
                                                : 0
                                        }
                                        item={item}
                                        // cardData={cardData}
                                        // props={cardData}
                                    ></KPICard>
                                )
                        )}

                        <Grid2
                            sx={{ background: "#fff" }}
                            container
                            spacing={0}
                            columns={6}
                            // width={"45vw"}
                            width="auto"
                            justifyContent={"center"}
                            //   border="10px solid red"
                            // padding={"1% 1% 0 1%"}
                            //   display={"flex"}
                            // //   backgroundColor={"#ebebf7"}
                            //   justifyContent={"space-evenly"}
                        >
                            {mappedCardData.map(
                                (item, index) =>
                                    (index === 1 ||
                                        index === 2 ||
                                        index === 3) && (
                                        <KPICard
                                            key={index}
                                            index={index}
                                            name={item.title}
                                            value={
                                                item.value !== undefined
                                                    ? item.value
                                                    : 0
                                            }
                                            item={item}
                                            // cardData={cardData}
                                            // props={cardData}
                                        ></KPICard>
                                    )
                            )}
                        </Grid2>
                        {mappedCardData.map(
                            (item, index) =>
                                (index === 4 || index === 5) && (
                                    <KPICard
                                        key={index}
                                        index={index}
                                        name={item.title}
                                        value={
                                            item.value !== undefined
                                                ? item.value
                                                : 0
                                        }
                                        item={item}
                                        // cardData={cardData}
                                        // props={cardData}
                                    ></KPICard>
                                )
                        )}
                    </Grid2>
                    <Grid2
                        container
                        spacing={1}
                        alignItems={"center"}
                        padding={"1% 0"}
                    >
                        <Grid2
                            size={2}
                            fontSize={20}
                            width={"max-content"}
                            padding={"0 2%"}
                        >
                            Financial Performance
                        </Grid2>
                        <Grid2
                            size={9.65}
                            border={"1px solid rgb(201, 201, 211)"}
                            fontSize={0}
                        >
                            -------------------------
                        </Grid2>
                    </Grid2>
                    <Grid2
                        container
                        spacing={2}
                        padding={"0 2%"}
                        height={"40%"}
                    >
                        <StyledGrid2 size={4}>
                            <span>
                                <WaterfallChart2
                                // apiData={budgetData}
                                //     refPeriod={[
                                //         [0, 20],
                                //         [1, 13],
                                //         [2, 18],
                                //         [3, 15],
                                //         [4, 21],
                                //         [5, 11],
                                //         [6, 18],
                                //         [7, 16],
                                //         [8, 9],
                                //         [9, 12],
                                //         [10, 21],
                                //         [11, 18],
                                //         [12, 20],
                                //     ]}
                                ></WaterfallChart2>
                                {/* <WaterfallChart
                                // apiData={budgetData}
                                //     refPeriod={[
                                //         [0, 20],
                                //         [1, 13],
                                //         [2, 18],
                                //         [3, 15],
                                //         [4, 21],
                                //         [5, 11],
                                //         [6, 18],
                                //         [7, 16],
                                //         [8, 9],
                                //         [9, 12],
                                //         [10, 21],
                                //         [11, 18],
                                //         [12, 20],
                                //     ]}
                                ></WaterfallChart> */}
                            </span>
                        </StyledGrid2>
                        <StyledGrid2 size={4}>
                            <span>
                                {
                                    <LineChart2
                                        name={"SWB"}
                                        // currentPeriod={graph2SWBPeriodSpend}
                                        // }
                                        currentPeriod={[
                                            12,
                                            //  18, 9, 15, 6, 14, 10, 7, 16, 13,
                                            // 5, 11, 8,
                                        ]}
                                        // budget={[[0, swbBudgetRes]]} // Transform to [[0, 11690000], [1, 91], [4, 10004]]
                                        // budget={Object.keys(swbBudgetRes)
                                        //     .sort()
                                        //     .map((key) => [
                                        //         parseInt(key.replace("P", ""), 10) - 1, // Extract the number from the key
                                        //         expenseBudgetRes[key as keyof typeof expenseBudgetRes],
                                        //     ])} // Transform to [[0, 11690000], [1, 91], [4, 10004]]
                                        // ])} // Transform to [[0, 1004], [1, 91], [4, 10004]]
                                        budget={[
                                            [0, 21],
                                            // [1, 12],
                                            // [2, 25],
                                            // [3, 6],
                                            // [4, 19],
                                            // [5, 8],
                                            // [6, 22],
                                            // [7, 15],
                                            // [8, 4],
                                            // [9, 28],
                                            // [10, 11],
                                            // [11, 18],
                                            // [12, 24],
                                        ]}
                                        runRate={
                                            spendSummary &&
                                            spendSummary.length > 0
                                                ? [
                                                      Number(
                                                          spendSummary[0].run_rate.toFixed(
                                                              2
                                                          )
                                                      ),
                                                  ]
                                                : []
                                        } //[793,91,10004]
                                        // runRate={[formatNumber2(spendSummary[0]?.run_rate) as unknown as number ?? 0]}//[793,91,10004]
                                        // runRate={Object.keys(rrPeriodRes)
                                        //     .sort()
                                        //     .map((key) => rrPeriodRes[key as keyof typeof rrPeriodRes])}//[793,91,10004]
                                        // runRate={[
                                        //     14,
                                        // 10, 18, 7, 13, 9, 15, 6, 16, 11,
                                        // 5, 12, 8,
                                        // ]}
                                    ></LineChart2>
                                }
                            </span>
                        </StyledGrid2>
                        <StyledGrid2 size={4}>
                            <span>
                                {
                                    <LineChart2
                                        name={"Expense"}
                                        currentPeriod={graph3ExpensePeriodSpend} //[793,91,10004]
                                        budget={[[0, expenseBudgetRes]]} // Transform to [[1, 1004], [2, 91], [5, 10004]]
                                        // budget={Object.keys(expenseBudgetRes)
                                        //     .sort()
                                        //     .map((key) => [
                                        //         parseInt(key.replace("P", ""), 10) - 1, // Extract the number from the key
                                        //         expenseBudgetRes[key as keyof typeof expenseBudgetRes],
                                        //     ])} // Transform to [[1, 1004], [2, 91], [5, 10004]]
                                        // budget={[
                                        //     [0, 14],
                                        //     [1, 25],
                                        //     [2, 6],
                                        //     [3, 19],
                                        //     [4, 8],
                                        //     [5, 22],
                                        //     [6, 15],
                                        //     [7, 4],
                                        //     [8, 28],
                                        //     [9, 11],
                                        //     [10, 18],
                                        //     [11, 24],
                                        //     [12, 9],
                                        // ]}
                                        runRate={
                                            spendSummary &&
                                            spendSummary.length > 0
                                                ? [
                                                      Number(
                                                          spendSummary[0].run_rate.toFixed(
                                                              2
                                                          )
                                                      ),
                                                  ]
                                                : []
                                        }
                                        // runRate={spendSummary && spendSummary.length > 0 ? [spendSummary[0].run_rate.toFixed(2)] : []}
                                        // runRate={[
                                        //     7,
                                        //      19, 10, 5, 14, 16, 9, 18, 11, 13,
                                        //     6, 15, 8,
                                        // ]}
                                    ></LineChart2>
                                }
                            </span>
                        </StyledGrid2>
                        <StyledGrid2 size={6}>
                            <span>
                                <BarGraphChart
                                    currentPeriod={[
                                        Number(mappedCardData.find(
                                            (x) =>
                                                x.title === "Current Run Rate"
                                        )?.value) ?? 0,
                                    ]} //[793,91,10004]
                                    requiredRR={[
                                        mappedCardData.find(
                                            (x) =>
                                                x.title === "Current Run Rate"
                                        )?.requiredRR ?? 0,
                                        //  13.9, 12.6, 15.1, 11.4, 10.9, 9.5,
                                        // 7.2, 6.1, 5.6, 4.8, 2.9, 1.7,
                                    ]}
                                    // currentPeriod={[
                                    //     14.2,
                                    //      12.8, 16.1, 13.5, 10.9, 15.6,
                                    //     11.3, 9.2, 7.8, 6.5, 4.9, 2.1, 1.8,
                                    // ]}
                                    // requiredRR={[
                                    //     14.1,
                                    //      13.9, 12.6, 15.1, 11.4, 10.9, 9.5,
                                    //     7.2, 6.1, 5.6, 4.8, 2.9, 1.7,
                                    // ]}
                                ></BarGraphChart>
                            </span>
                        </StyledGrid2>

                        <StyledGrid2 size={6}>
                            <span>
                                {fpiPeriodSpend && fpiPeriodSpend[0] && (
                                    <CCOChart
                                        fpiPeriodSpend={
                                            fpiPeriodSpend[0]?.spendSummary
                                                ?.data
                                        }
                                        fpiPeriodBudget={
                                            fpiPeriodBudget?.P?.budgetSummary
                                        }
                                        name={team}
                                        runRate={[]}
                                        currentPeriod={[]}
                                        budget={[]}
                                    ></CCOChart>
                                )}
                            </span>
                        </StyledGrid2>
                        <StyledGrid2 size={6}>
                            <span></span>
                        </StyledGrid2>
                    </Grid2>
                </Box>
            </>
        // </DashboardContainer>

    );
};
const mapStateToProps = (state: {
     budgetData: BudgetDataType; loading: any; error: any; spendSummary: SpendSummaryType[] }) => ({
    apibudgetData: state.budgetData,
    // loading: state.api.loading,
    // error: state.api.error,
    // apiSpendSummary: state.api.spendSummary,
});

export default connect(mapStateToProps)(Dashboard);
