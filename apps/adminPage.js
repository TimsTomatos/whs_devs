var ctx = document.getElementById('myChart').getContext('2d');
var cta = document.getElementById('thisChart').getContext('2d');

var myLineChart = new Chart(cta, {
  type: 'line',
  data: [0.1, 0.2, 0.3, 5, 2, 3],
  options: {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
}
});


var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Mcdonalds', 'Caslabs', 'Taco Bell', 'YMCA', 'Aloha Market', 'Walmart'],
        datasets: [{
            label: 'Current Donation Amount',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'purple',
                'blue',
                'red',
                'yellow',
                'green',
                'orange'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


