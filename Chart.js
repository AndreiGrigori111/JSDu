
var options = {
    series: [{
        name: 'Males',
        data: [0.3, 0.5, 0.8, 1.5, 2.5, 2.7, 3.5, 4.3, 4.3, 3.4, 3.6, 4.6, 3.6, 3.2, 3.1,
            3.2, 3.2, 3.1
        ]
    },
    {
        name: 'Females',
        data: [-0.4, -0.6, -1.0, -1.6, -2.6, -2.7, -3.4, -4.2, -4.1, -3.3, -3.4, -4.3,
        -3.2, -2.8, -2.7, -2.7, -2.8, -2.7
        ]
    }
    ],
    chart: {
        type: 'bar',
        height: 440,
        stacked: true,
        foreColor: '#FFFFFF'
    },
    colors: ['#008FFB', '#FF4560'],
    plotOptions: {
        bar: {
            horizontal: true,
            barHeight: '80%',
        },
    },
    dataLabels: {
        enabled: false,
        

    },
    stroke: {
        width: 1,
        colors: ["#FFFF00"]
    },

    grid: {
        borderColor: '#000000',
        xaxis: {      
            lines: {
                show: false,
               
            }
        }
    },
    yaxis: {
        min: -10,
        max: 10,
        title: {
            // text: 'Age',
        },
    },
    tooltip: {
        shared: false,
        x: {
            formatter: function (val) {
                return val
            }
        },
        y: {
            formatter: function (val) {
                return Math.abs(val) + "%"
            }
        }
    },
    title: {
        text: 'Chinese population pyramid 2021'
    },
    xaxis: {
        categories: ['85+', '80-84', '75-79', '70-74', '65-69', '60-64', '55-59', '50-54',
            '45-49', '40-44', '35-39', '30-34', '25-29', '20-24', '15-19', '10-14', '5-9',
            '0-4'
        ],
        title: {
            text: 'Percent'
        },
        labels: {
            formatter: function (val) {
                return Math.abs(Math.round(val)) + "%"
            }
        }
    },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();