import React from 'react';
import Highcharts from 'highcharts';
// import HighchartsReact from 'react-highcharts';
import { Card, CardContent, Typography, Box } from '@mui/material';

const OverallSpend = () => {
  const config = {
    chart: {
      type: 'pie',
      backgroundColor: 'transparent',
    },
    title: {
      text: '',
    },
    series: [
      {
        name: 'Spend',
        colorByPoint: true,
        data: [
          {
            name: 'Expense',
            y: 30,
            color: '#283593',
          },
          {
            name: 'SWB',
            y: 70,
            color: '#F4A261',
          },
        ],
      },
    ],
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
    },
  };

  return (
    <Card sx={{ width: 320, bgcolor: 'grey.100', borderRadius: 2, boxShadow: 3, p: 2 }}>
      <CardContent>
        <Typography variant="h6" color="text.secondary">
          Overall Spend
        </Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center" mt={1}>
          <Box>
            <Typography variant="h4" color="primary.main">
              $210K
            </Typography>
            <Typography color="success.main" display="flex" alignItems="center" mt={1}>
              <span style={{ marginRight: 4 }}>↘</span> 11% YTD
            </Typography>
          </Box>
          {/* <HighchartsReact highcharts={Highcharts} options={config} /> */}
        </Box>
        <Box display="flex" justifyContent="flex-end" mt={2}>
          <Box display="flex" alignItems="center" mr={2}>
            <Box sx={{ width: 8, height: 8, bgcolor: '#283593', borderRadius: '50%', mr: 1 }}></Box>
            <Typography variant="caption">dsa</Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <Box sx={{ width: 8, height: 8, bgcolor: '#F4A261', borderRadius: '50%', mr: 1 }}></Box>
            <Typography variant="caption">SWB</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default OverallSpend;
