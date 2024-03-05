// BAR CHART with swapped x and y values
const barChartOptions1 = {
  series: [
    {
      data: [
        { x: 'Social Circle', y: 16000 },
        { x: 'Malibu', y: 13000 },
        { x: 'Snohomish', y: 8000 },
        { x: 'New York', y: 6000 },
        { x: 'Everett', y: 3000 },
        { x: 'Seattle', y: 2000 },
        { x: 'London', y: 1000 },
      ],
    },
  ],
  chart: {
    type: 'bar',
    height: 350,
    toolbar: {
      show: false,
    },
  },
  colors: ['#cc3c43', '#cc3c43', '#cc3c43', '#cc3c43', '#cc3c43'],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: true, // Change horizontal to true
      columnWidth: '40%',
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  xaxis: {
    categories: ['Social Circle', 'Malibu', 'Snohomish', 'New York', 'Everett','Seattle', 'London'],
  },
};

const barChartOptions2 = { // Different options for the second chart if needed
  series: [
    {
      data: [
        { x: 'Alarm system', y: 28000 },
        { x: 'Backflow Testing', y: 16000 },
        { x: 'Diagnosis', y: 8000 },
        { x: 'Fire Extinguisher', y: 7000 },
        { x: 'pump', y: 2000 }
      ],
    },
  ],
  chart: {
    type: 'bar',
    height: 350,
    toolbar: {
      show: false,
    },
  },
  colors: ['#cc3c43', '#cc3c43', '#cc3c43', '#cc3c43', '#cc3c43'],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: true, // Change horizontal to true
      columnWidth: '40%',
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  xaxis: {
    categories: ['Alarm system', 'Backflow Testing', 'Diagnosis', 'Fire Extinguisher', 'pump'],
  },
};

// Render the first bar chart
const barChart1 = new ApexCharts(
  document.querySelector('#bar-chart1'),
  barChartOptions1
);
barChart1.render();

// Render the second bar chart
const barChart2 = new ApexCharts(
  document.querySelector('#bar-chart2'),
  barChartOptions2
);
barChart2.render();
