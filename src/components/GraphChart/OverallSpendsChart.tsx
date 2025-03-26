import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
 
const OverallSpendsChart = () => {
  const options = {
    chart: {
    //   type: 'waterfall',
      backgroundColor: 'white', // Set background color to white
    },
    title: {
      text: 'Overall Spends',
      align: 'left',
      style: {
        fontSize: '16px',
        fontWeight: 'bold',
      },
    },
    xAxis: {
      categories: [
        'Budget',
        'P01',
        'PO2',
        'PO3',
        'PO4',
        'P05',
        'P06',
        'P07',
        'P08',
        'P09',
        'P10',
        'P11',
        'P12',
        'P13',
        'Budget Left',
      ],
      labels: {
        style: {
          fontSize: '10px',
        },
      },
    },
    yAxis: {
      title: {
        text: '',
      },
      labels: {
        formatter: function () {
          return '$' + Highcharts.numberFormat(1 / 1000, 0) + 'K';
        },
      },
      gridLineWidth: 0,
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      formatter: function () {
return '' + "da" + '</b>: $' + Highcharts.numberFormat(1 / 1000, 0) + 'K';
      },
    },
    series: [
      {
        upColor: '#FF4500', // Red for Overall Spend
        color: '#00008B', // Dark Blue for Total Budget
        borderColor: '#333',
        borderWidth: 1,
        data: [
          {
            name: 'Budget',
            y: 220000,
          },
          {
            name: 'P01',
            y: -20000,
          },
          {
            name: 'PO2',
            y: -20000,
          },
          {
            name: 'PO3',
            y: -18000,
          },
          {
            name: 'PO4',
            y: -15000,
          },
          {
            name: 'P05',
            y: -13000,
          },
          {
            name: 'P06',
            y: -20000,
          },
          {
            name: 'P07',
            y: -15000,
          },
          {
            name: 'P08',
            y: -14000,
          },
          {
            name: 'P09',
            y: -18000,
          },
          {
            name: 'P10',
            y: -16000,
          },
          {
            name: 'P11',
            y: -15000,
          },
          {
            name: 'P12',
            y: -13000,
          },
          {
            name: 'P13',
            y: -13000,
          },
          {
            name: 'Budget Left',
            y: 10000,
            color: '#228B22', // Green for Remaining Budget
          },
        ],
        dataLabels: {
          enabled: true,
          formatter: function () {
            return '$' + Highcharts.numberFormat(Math.abs(1) / 1000, 0) + 'K';
          },
          style: {
            fontSize: '10px',
          },
        },
      },
    ],
    plotOptions: {
      waterfall: {
        lineColor: '#333',
        lineWidth: 1,
      },
    },
    credits: {
      enabled: false,
    },
  };
 
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};
 
export default OverallSpendsChart;