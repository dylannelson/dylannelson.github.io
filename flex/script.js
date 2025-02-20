document.addEventListener('DOMContentLoaded', function () {
    // Stacked Bar Chart
    Highcharts.chart('bar-chart', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Monthly Costs: Ownership vs Flexcar'
        },
        xAxis: {
            categories: ['Owning a Car', 'Flexcar Rental']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Monthly Cost ($)'
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: 'black'
                }
            }
        },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true,
                    format: '{y}',
                    color: 'white'
                }
            }
        },
        series: [
            {
                name: 'Repairs',
                data: [65],
                color: '#8e44ad'
            },
            {
                name: 'State Tax + Registration',
                data: [90]
            },
            {
                name: 'Insurance',
                data: [225, 220]
            },
            {
                name: 'Monthly Payment',
                data: [550, 350]
            }
        ]
    });

    // Generate time series data
    let months = [];
    let count1 = 0;
    let series1 = [];
    let count2 = 0;
    let series2 = [];

    for (let i = 1; i <= 120; i++) {
        months.push(i); 
        if (i<60) {
            count1 += 930;
          } else {
            count1 += 380;
          }
          count2 += 570;
        series1.push(count1); 
        series2.push(count2); 
    }

// Time Series Chart
Highcharts.chart('time-series-chart', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Cumulative Costs: Owning vs Flexcar'
    },
    xAxis: {
        categories: months, 
        title: {
            text: 'Month #'
        },
        plotLines: [{
            color: 'red', 
            width: 2,
            value: 59, 
            dashStyle: 'ShortDash', 
            label: {
                text: 'Loan Paid Off', 
                align: 'center',
                verticalAlign: 'top',
                y: 40,
                style: {
                    fontWeight: 'bold',
                    color: '#333',
                    fontSize: '12px'
                }
            }
        }]
    },
    yAxis: {
        title: {
            text: 'Cumulative Costs ($)'
        }
    },
    tooltip: {
        valuePrefix: '$'
    },
    series: [
        {
            name: 'Car Ownership',
            data: series1,
            color: '#007bff',
            marker: {
                enabled: true,
                radius: 4
            }
        },
        {
            name: 'Flexcar Monthly',
            data: series2,
            color: '#ff5733',
            marker: {
                enabled: true,
                radius: 4
            }
        }
    ]
});

});
