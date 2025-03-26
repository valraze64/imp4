import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import 'highcharts/highcharts-more';
import 'highcharts/modules/solid-gauge';

const SolidGaugeChart = () => {
  const options = {
    chart: {
      type: 'solidgauge',
      height: '110%',
      width: '110%',
      margin: [0, 0, 0, 0],
    },
    title: {
      text: 'Solid Gauge',
      style: {
        fontSize: '24px',
      },
    },
    pane: {
      startAngle: 0,
      endAngle: 360,
      background: {
        backgroundColor: '#EEE',
        innerRadius: '60%',
        outerRadius: '100%',
        borderWidth: 0,
      },
    },
    yAxis: {
      min: 0,
      max: 100,
      lineWidth: 0,
      tickPositions: [],
    },
    series: [{
      name: 'Speed',
      data: [80],
      dataLabels: {
        enabled: true,
        format: '{y}%',
      },
      tooltip: {
        valueSuffix: '%',
      },
    }],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default SolidGaugeChart;