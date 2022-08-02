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
    backgroundColor: 'rgb(0, 122, 255)',
    data: [135, 80, 98, 45, 60, 145, 80],
  },
  {
    label: 'My Second dataset',
    backgroundColor: 'rgb(253, 173, 21)',
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
      tooltip: {
        yAlign: 'bottom',
        displayColors: false,
        callbacks: {
          label: function(context) {
            let label = context.parsed.y;
            return label;
          }
        }, 
        titleFont: {
          weight: 'normal',
        },
        bodyFont: {
          size: 20,
          weight: 'bold'
        }
      }
    }
  }
};

const performanceChart = new Chart(
  document.getElementById('js-performance__chart'),
  performanceConfig
);

// Watchlist Chart
const watchlistLabels = [
  'May 5',
  'May 6',
  'May 7',
  'May 8',
  'May 9',
  'May 10',
  'May 11'
];

const watchlistData = {
  labels: watchlistLabels,
  datasets: [{
    label: 'My First dataset',
    backgroundColor: 'rgb(42, 198, 112)',
    borderColor: 'rgb(42, 198, 112)',
    data: [200, 150, 276, 350, 175, 195, 100],
    tension: 0.4,
    borderWidth: 5,
    pointHoverRadius: 6,
    pointHoverBorderWidth: 3,
    pointBorderColor: 'rgb(255, 255, 255)',
  },
  {
    label: 'My Second dataset',
    backgroundColor: 'rgb(253, 173, 21)',
    borderColor: 'rgb(253, 173, 21)',
    data: [100, 80, 125, 200, 100, 20, 50],
    tension: 0.4,
    borderWidth: 5,
    pointHoverRadius: 6,
    pointHoverBorderWidth: 3,
    pointBorderColor: 'rgb(255, 255, 255)',
  }]
};

const watchlistConfig = {
  type: 'line',
  data: watchlistData,
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        yAlign: 'bottom',
        displayColors: false,
        callbacks: {
          label: function(context) {
            let label = context.parsed.y;
            return label;
          }
        }, 
        titleFont: {
          weight: 'normal',
        },
        bodyFont: {
          size: 20,
          weight: 'bold'
        }
      }
    }
  },
  elements: {
    point: {
      pointRadius: 4,
      pointHoverRadius: 6
    }
  }
};

const watchlistChart = new Chart(
  document.getElementById('js-watchlist__chart'),
  watchlistConfig
);

// Total Count Chart
const totalCountLabels = [
  'Blue',
  'Cyan',
  'Yellow',
  'Green',
  'Purple'
];

const totalCountData = {
  labels: totalCountLabels,
  datasets: [{
    label: 'My First dataset',
    backgroundColor: [
      'rgb(0, 112, 255)',
      'rgb(2, 202, 205)',
      'rgb(253, 173, 21)',
      'rgb(42, 198, 112)',
      'rgb(149, 106, 255)'
    ],
    data: [50, 70, 50, 35, 50]
  }]
};

const totalCountConfig = {
  type: 'doughnut',
  data: totalCountData,
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        yAlign: 'bottom',
        displayColors: false,
        bodyFont: {
          size: 15,
          weight: 'normal'
        }
      }
    },
    elements: {
      arc: {
        borderWidth: 5,
        borderColor: '#1B2130',
      }
    } 
  }
};

const totalCountChart = new Chart(
  document.getElementById('js-total-count__chart'),
  totalCountConfig
);