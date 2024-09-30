export const salesOverview = {
    options: {
        chart: {
            animations: {
                enabled: false
            },
            height: 250,
            type: 'line',
            zoom: {
                enabled: false
            },
            toolbar: {
                show: false
            }
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false
        },
        stroke: {
            curve: 'straight',
            width: '3',
            dashArray: [0, 5]
        },
        grid: {
            borderColor: 'var(--primary-100)'
        },
        colors: ['var(--primary)', 'rgb(203,213,225)'],
        yaxis: {
            title: {
                style: {
                    color: '#adb5be',
                    fontSize: '14px',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                    cssClass: 'apexcharts-yaxis-label'
                }
            },
            labels: {
                style: {
                    colors: 'rgb(107 ,114 ,128)',
                    fontSize: '12px'
                },
                formatter: function (y: number) {
                    return y.toFixed(0) + '';
                }
            }
        },
        xaxis: {
            type: 'month',
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            axisBorder: {
                show: true,
                color: 'rgba(119, 119, 142, 0.05)',
                offsetX: 0,
                offsetY: 0
            },
            axisTicks: {
                show: true,
                borderType: 'solid',
                color: 'rgba(119, 119, 142, 0.05)',
                width: 6,
                offsetX: 0,
                offsetY: 0
            },
            labels: {
                rotate: -90,
                style: {
                    colors: 'rgb(107 ,114 ,128)',
                    fontSize: '12px'
                }
            }
        }
    },
    series: [
        {
            name: 'Income',
            type: 'line',
            data: [20, 38, 38, 72, 55, 63, 43, 76, 55, 80, 40, 80]
        },
        {
            name: 'Expenses',
            type: 'line',
            data: [85, 65, 75, 38, 85, 35, 62, 40, 40, 64, 50, 89]
        }
    ]
};

export const salesDonut = {
    series: [42, 47, 52, 58, 65],
    options: {
        chart: {
            type: 'polarArea'
        },
        labels: ['Rose A', 'Rose B', 'Rose C', 'Rose D', 'Rose E'],
        fill: {
            opacity: 1
        },
        stroke: {
            width: 1,
            colors: undefined
        },
        yaxis: {
            show: false
        },
        legend: {
            position: 'bottom'
        },
        plotOptions: {
            polarArea: {
                rings: {
                    strokeWidth: 0
                },
                spokes: {
                    strokeWidth: 0
                }
            }
        },
        theme: {
            monochrome: {
                enabled: true,
                shadeTo: 'light',
                shadeIntensity: 0.6
            }
        }
    }
};

export const socialVisitors = {
    series: [
        {
            data: [400, 470, 540, 690, 1100, 1380]
        }
    ],

    options: {
        chart: {
            type: 'bar',
            height: 370,
            toolbar: {
                show: false
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 1,
                colorStops: [
                    {
                        offset: 0,
                        color: '#60a5fa',
                        opacity: 1
                    },
                    {
                        offset: 100,
                        color: '#5a66f1',
                        opacity: 1
                    }
                ]
            }
        },
        plotOptions: {
            bar: {
                borderRadius: 4,
                horizontal: true
            }
        },
        colors: ['#5e76a6'],
        grid: {
            borderColor: 'transparent'
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: ['Facebook', 'Instagram', 'Dribble', 'Twitter', 'Chrome', 'Pininterest'],
            labels: {
                show: true,
                style: {
                    colors: '#adb5be',
                    fontSize: '11px',
                    fontWeight: 600,
                    cssClass: 'apexcharts-xaxis-label'
                }
            }
        },
        yaxis: {
            labels: {
                show: true,
                style: {
                    colors: '#adb5be',
                    fontSize: '11px',
                    fontWeight: 600,
                    cssClass: 'apexcharts-yaxis-label'
                }
            }
        }
    }
};
