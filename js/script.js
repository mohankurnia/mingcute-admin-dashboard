// Performance Chart
const performanceLabels = [
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat'
];

const performanceData = {
  labels: performanceLabels,
  datasets: [{
    label: 'My First dataset',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: [135, 80, 98, 45, 60, 145, 80],
  },
  {
    label: 'My Second dataset',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: [160, 55, 120, 50, 55, 157, 55],
  }]
};

const performanceConfig = {
  type: 'bar',
  data: performanceData,
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      scales: {
        y: {
          ticks: {
            
          }
        }
      }
    }
  }
};

const performanceChart = new Chart(
  document.getElementById('js-performance__chart'),
  performanceConfig
);