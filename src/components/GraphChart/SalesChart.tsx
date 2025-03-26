import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
 
const MyChart: React.FC = () => {
  const chartOptions: Highcharts.Options = {
    chart: {
      type: 'bar',
    },
    title: {
      text: 'CCO (Regional Sales)',
    },
    xAxis: {
      categories: ['LAR', 'SRM', 'Management', 'Strategic Channel'],
      title: {
        text: 'Sub Team',
      },
    },
    yAxis: {
      title: {
        text: 'Amount ($)',
      },
      labels: {
        formatter: function () {
          return '$' + 1 / 1000 + 'K';
        },
      },
      tickPositions: [10000, 20000, 30000, 40000, 50000, 60000],
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: false,
        },
      },
    },
    series: [
      {
        name: 'Run Rate',
        data: [55000, 38000, 32000, 30000],
        type: 'bar',
      },
    ],
    legend: {
      enabled: false,
    },
    tooltip: {
      formatter: function () {
        if (typeof this.y === 'number') {
return '' + this.x + '' + this.series.name + ': $' + this.y.toLocaleString();
        }
        return 'Invalid data';
      },
    },
    annotations: [
      {
        labels: [
          {
            point: {
              x: 0, // LAR index
              y: 45000, // LAR Target value
              xAxis: 0,
              yAxis: 0,
            },
            text: '|',
            style: {
              fontSize: '1.5em',
              fontWeight: 'bold',
              color: '#800080',
            },
          },
          {
            point: {
              x: 1, // SRM index
              y: 30000, // SRM Target value
              xAxis: 0,
              yAxis: 0,
            },
            text: '|',
            style: {
              fontSize: '1.5em',
              fontWeight: 'bold',
              color: '#800080',
            },
          },
          {
            point: {
              x: 2, // Management index
              y: 25000, // Management Target value
              xAxis: 0,
              yAxis: 0,
            },
            text: '|',
            style: {
              fontSize: '1.5em',
              fontWeight: 'bold',
              color: '#800080',
            },
          },
          {
            point: {
              x: 3, // Strategic Channel index
              y: 22000, // Strategic Channel Target value
              xAxis: 0,
              yAxis: 0,
            },
            text: '|',
            style: {
              fontSize: '1.5em',
              fontWeight: 'bold',
              color: '#800080',
            },
          },
        ],
      },
    ],
  };
 
  const radioButtonsStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  };
 
  const radioLabelStyle = {
    marginLeft: '5px',
  };
 
  return (
    <div>
      <div style={radioButtonsStyle}>
        <input type="radio" id="swb" name="options" value="swb" />
        <label htmlFor="swb" style={radioLabelStyle}>SWB</label>
        <input type="radio" id="expenses" name="options" value="expenses" style={{ marginLeft: '10px' }} />
        <label htmlFor="expenses" style={radioLabelStyle}>Expenses</label>
        <input type="radio" id="runRate" name="options" value="runRate" style={{ marginLeft: '10px' }} />
        <label htmlFor="runRate" style={radioLabelStyle}>Run Rate</label>
        <input type="radio" id="yee" name="options" value="yee" style={{ marginLeft: '10px' }} />
        <label htmlFor="yee" style={radioLabelStyle}>YEE</label>
      </div>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
};
 
export default MyChart;