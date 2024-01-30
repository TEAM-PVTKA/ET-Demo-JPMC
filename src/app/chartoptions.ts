import Highcharts from 'highcharts';

export const homePieChart: any = {
  chart: {
    type: 'pie',
  },
  title: {
    text: 'Montly Expenses',
  },
  tooltip: {
    valueSuffix: '%',
  },
  plotOptions: {
    series: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: [
        {
          enabled: true,
          distance: 20,
        },
        {
          enabled: true,
          distance: -40,
          format: '{point.percentage:.1f}%',
          style: {
            fontSize: '1.2em',
            textOutline: 'none',
            opacity: 0.7,
          },
          filter: {
            operator: '>',
            property: 'percentage',
            value: 10,
          },
        },
      ],
    },
  },
  series: [],
};

export const barCharts: any = {
  chart: {
    type: 'column',
  },
  title: {
    text: 'Yearly Expenses',
    align: 'left',
  },
  
  xAxis: {
    categories: [
      'Groceries',
      'Utilities',
      'Entertainment',
      'My Bills',
      'Transportation',
      'Shopping',
    ],
    crosshair: true,
    accessibility: {
      description: 'Categories',
    },
  },
  yAxis: {
    min: 0,
    title: {
      text: '1000Rs',
    },
  },
  tooltip: {
    valueSuffix: ' (1000 RS)',
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
    },
  },
  series: [],
};