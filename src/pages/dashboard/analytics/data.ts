// mini-1
export const miniChart1 = {
    series: [
        {
            data: [2, 10, 18, 22, 36, 15, 47, 75, 65, 19, 14, 2, 47, 42, 15]
        }
    ],
    chart: {
        type: 'line',
        height: 50,
        sparkline: {
            enabled: true
        }
    },
    colors: ['#009EF7'],
    stroke: {
        curve: 'smooth',
        width: 2
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function () {
                    return '';
                }
            }
        },
        marker: {
            show: false
        }
    }
};

// mini-2
export const miniChart2 = {
    series: [
        {
            data: [15, 42, 47, 2, 14, 19, 65, 75, 47, 15, 42, 47, 2, 14, 12]
        }
    ],
    chart: {
        type: 'line',
        height: 50,
        sparkline: {
            enabled: true
        }
    },
    colors: ['#34c38f'],
    stroke: {
        curve: 'smooth',
        width: 2
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function () {
                    return '';
                }
            }
        },
        marker: {
            show: false
        }
    }
};

// mini-3
export const miniChart3 = {
    series: [
        {
            data: [47, 15, 2, 67, 22, 20, 36, 60, 60, 30, 50, 11, 12, 3, 8]
        }
    ],
    chart: {
        type: 'line',
        height: 50,
        sparkline: {
            enabled: true
        }
    },
    colors: ['#FEB322'],
    stroke: {
        curve: 'smooth',
        width: 2
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function () {
                    return '';
                }
            }
        },
        marker: {
            show: false
        }
    }
};

// mini-4
export const miniChart4 = {
    series: [
        {
            data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14, 2, 47, 42, 15]
        }
    ],
    chart: {
        type: 'line',
        height: 50,
        sparkline: {
            enabled: true
        }
    },
    colors: ['#ec4899'],
    stroke: {
        curve: 'smooth',
        width: 2
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function () {
                    return '';
                }
            }
        },
        marker: {
            show: false
        }
    }
};

// Wallet Balance
export const walletBalance = {
    series: [35, 70, 15],
    chart: {
        width: 227,
        height: 227,
        type: 'pie'
    },
    labels: ['Ethereum', 'Bitcoin', 'Litecoin'],
    colors: ['#FEB322', '#009EF7', '#FF4560'],
    stroke: {
        width: 0
    },
    legend: {
        show: false
    },
    responsive: [
        {
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                }
            }
        }
    ]
};

// Invested Overview
const radialChartColors = ['#009EF7', '#34c38f'];
export const investedOverview = {
    chart: {
        height: 270,
        type: 'radialBar',
        offsetY: -10
    },
    plotOptions: {
        radialBar: {
            startAngle: -130,
            endAngle: 130,
            dataLabels: {
                name: {
                    show: false
                },
                value: {
                    offsetY: 10,
                    fontSize: '18px',
                    color: undefined,
                    formatter: function (val: string) {
                        return val + '%';
                    }
                }
            }
        }
    },
    colors: [radialChartColors[0]],
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'dark',
            type: 'horizontal',
            gradientToColors: [radialChartColors[1]],
            shadeIntensity: 0.15,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [20, 60]
        }
    },
    stroke: {
        dashArray: 4
    },
    legend: {
        show: false
    },
    series: [80],
    labels: ['Series A']
};

// Market Overview
const barChartColors = ['#009EF7', '#34c38f'];
export const markerOverview = {
    series: [
        {
            name: 'Profit',
            data: [12.45, 16.2, 8.9, 11.42, 12.6, 18.1, 18.2, 14.16, 11.1, 8.09, 16.34, 12.88]
        },
        {
            name: 'Loss',
            data: [-11.45, -15.42, -7.9, -12.42, -12.6, -18.1, -18.2, -14.16, -11.1, -7.09, -15.34, -11.88]
        }
    ],
    chart: {
        type: 'bar',
        height: 400,
        stacked: true,
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        bar: {
            columnWidth: '20%'
        }
    },
    colors: barChartColors,
    fill: {
        opacity: 1
    },
    dataLabels: {
        enabled: false
    },
    legend: {
        show: false
    },
    yaxis: {
        labels: {
            formatter: function (y: number) {
                return y.toFixed(0) + '%';
            }
        }
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        labels: {
            rotate: -90
        }
    }
};
