import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { MenuItem, Select, Card, CardContent, Typography, Box } from "@mui/material";
// import  Grid2  from "@mui/material/Unstable_Grid2"
import Grid2 from '@mui/material/Grid2';
// or
// import { Grid2 } from '@mui/material';

const Dashboard = () => {
  const [team, setTeam] = useState("CCO (Regional Sales)");
  const [subTeam, setSubTeam] = useState("All");
  const [timePeriod, setTimePeriod] = useState("YTD");
  const [year, setYear] = useState("2024");
  const [quarter, setQuarter] = useState("Q1");
  const [currency, setCurrency] = useState("USD");

  const chartOptions = {
    chart: { type: "column" },
    title: { text: "Overall Spends" },
    xAxis: {
      categories: ["P01", "P02", "P03", "P04", "P05", "P06", "P07", "P08", "P09", "P10", "P11", "P12", "P13"]
    },
    series: [
      {
        name: "Overall Spend",
        data: [20, 18, 15, 13, 20, 15, 14, 16, 12, 10, 14, 13, 10]
      },
      {
        name: "Total Budget",
        data: [220, 200, 180, 160, 140, 120, 100, 80, 60, 40, 20, 10, 5]
      }
    ]
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Grid2 container spacing={2}>
        {/* Filters */}
        <Grid2 container 
        // xs={12}
        >
          <Select value={team} onChange={(e) => setTeam(e.target.value)}>
            <MenuItem value="CCO (Regional Sales)">CCO (Regional Sales)</MenuItem>
          </Select>
          <Select value={subTeam} onChange={(e) => setSubTeam(e.target.value)}>
            <MenuItem value="All">All</MenuItem>
          </Select>
          <Select value={timePeriod} onChange={(e) => setTimePeriod(e.target.value)}>
            <MenuItem value="Period">Period</MenuItem>
            <MenuItem value="QTD">QTD</MenuItem>
            <MenuItem value="YTD">YTD</MenuItem>
          </Select>
          <Select value={year} onChange={(e) => setYear(e.target.value)}>
            <MenuItem value="2021">2021</MenuItem>
            <MenuItem value="2022">2022</MenuItem>
            <MenuItem value="2023">2023</MenuItem>
            <MenuItem value="2024">2024</MenuItem>
            <MenuItem value="2025">2025</MenuItem>
          </Select>
          <Select value={currency} onChange={(e) => setCurrency(e.target.value)}>
            <MenuItem value="USD">USD</MenuItem>
          </Select>
        </Grid2>

        {/* Summary Cards */}
        {["Total Budget: $220K", "Overall Spend: $210K", "Total SWB: $150K", "Total vxc: $60K", "Current Run Rate: $16.2K", "Year End Estimate: $210K"].map((text, index) => (
          <Grid2 container 
        //   xs={12} sm={4} md={2} key={index}
          >
            <Box sx={{padding: 2, backgroundColor: "green", border: "10px solid red", borderRadius:"10px"}}>
              <CardContent>
                <Typography variant="h6">{text}</Typography>
              </CardContent>
            </Box>
          </Grid2>
        ))}

        {/* Charts */}
        <Grid2 container 
        // xs={12}
        >
          <Card>
            <CardContent>
              <Typography variant="h6">Overall Spends</Typography>
              <HighchartsReact highcharts={Highcharts} options={chartOptions} />
            </CardContent>
          </Card>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Dashboard;
