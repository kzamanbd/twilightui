// total sales report
new ApexCharts(document.querySelector('#total-sales-charts'), {
    grid: {
        show: false,
        padding: {
            left: 0,
            top: -100,
            bottom: -10,
        },
    },
    chart: {
        height: 260,
        type: 'line',
        toolbar: {
            show: false,
        },
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'light',
            type: 'horizontal',
            shadeIntensity: 0,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 0.4,
            stops: [0, 100, 100],
        },
    },
    stroke: {
        width: 5,
        curve: 'smooth',
        lineCap: 'round',
    },
    colors: ['#009ef7'],
    legend: {
        show: false,
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        labels: {
            // show: false,
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    yaxis: {
        labels: {
            show: false,
        },
        min: 0,
    },
    series: [
        {
            name: 'Total Sales',
            data: [0, 258, 30, 240, 150, 400],
        },
    ],
}).render()

// Revenue Report
new ApexCharts(document.querySelector('#revenue-report-charts'), {
    chart: {
        height: 315,
        stacked: true,
        type: 'bar',
        toolbar: { show: false },
    },
    grid: {
        yaxis: {
            lines: { show: false },
        },
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        labels: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
    },
    legend: {
        markers: {
            radius: 15,
        },
    },
    stroke: {
        width: 5,
        colors: ['#fff'],
    },
    dataLabels: {
        enabled: false,
    },
    colors: ['#7FD461', '#9B9EA3'],
    plotOptions: {
        bar: {
            columnWidth: '70%',
            borderRadius: 8,
            startingShape: 'rounded',
            endingShape: 'rounded',
        },
    },
    yaxis: {
        labels: {
            show: false,
        },
    },
    responsive: [
        {
            breakpoint: 3000,
            options: {
                plotOptions: {
                    bar: {
                        columnWidth: '50%',
                    },
                },
            },
        },
        {
            breakpoint: 1580,
            options: {
                stroke: {
                    width: 3,
                },
            },
        },
        {
            breakpoint: 1300,
            options: {
                stroke: {
                    width: 1,
                },
            },
        },
        {
            breakpoint: 958,
            options: {
                stroke: {
                    width: 5,
                },
            },
        },
        {
            breakpoint: 750,
            options: {
                stroke: {
                    width: 4,
                },
            },
        },
        {
            breakpoint: 600,
            options: {
                stroke: {
                    width: 3,
                },
            },
        },
    ],
    series: [
        {
            name: 'Earning',
            data: [95, 177, 284, 256, 105, 63, 168, 218, 72],
        },
        {
            name: 'Expense',
            data: [-145, -80, -60, -180, -100, -60, -85, -75, -100],
        },
    ],
}).render()

// Sales Overview
new ApexCharts(document.querySelector('#sales-overview-charts'), {
    labels: ['Apparel', 'Electronics', 'FMCG', 'Other Sales'],
    colors: ['#009ef7', '#AC39FF', '#C574FF', '#DDDDDD'],
    chart: {
        type: 'donut',
        sparkline: {
            enabled: true,
        },
    },
    plotOptions: {
        pie: {
            donut: {
                size: '70%',
                labels: {
                    show: true,
                    name: {
                        fontSize: '14px',
                        offsetY: 25,
                    },
                    value: {
                        fontSize: '2.125rem',
                        fontWeight: 600,

                        offsetY: -15,
                        formatter(value) {
                            return `${value}k`
                        },
                    },
                    total: {
                        show: true,
                        label: 'Weekly Visits',
                        color: 'rgba(94, 86, 105, 0.68)',
                        formatter(value) {
                            return `${value.globals.seriesTotals.reduce((total, num) => total + num)}k`
                        },
                    },
                },
            },
        },
    },
    series: [12, 24.5, 15, 50],
}).render()

// Weekly Sales
new ApexCharts(document.querySelector('#weekly-sales-charts'), {
    colors: ['#F7EBFF', '#F7EBFF', '#F7EBFF', '#F7EBFF', '#B857FF', '#F7EBFF', '#F7EBFF'],
    chart: {
        type: 'bar',
        toolbar: {
            show: false,
        },
    },
    plotOptions: {
        bar: {
            columnWidth: '60%',
            distributed: true,
            borderRadius: 4,
            startingShape: 'rounded',
            endingShape: 'rounded',
        },
    },
    dataLabels: {
        enabled: false,
    },
    legend: {
        show: false,
    },
    xaxis: {
        categories: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
        tickPlacement: 'on',
        labels: {
            style: {
                fontSize: '12px',
            },
        },
    },
    yaxis: {
        show: false,
    },
    grid: {
        show: false,
        padding: {
            top: -20,
            left: -10,
            right: -10,
        },
    },
    series: [
        {
            data: [40, 60, 50, 60, 90, 40, 50],
        },
    ],
}).render()

// total growth
new ApexCharts(document.querySelector('#total-growth-charts'), {
    grid: {
        show: false,
    },
    chart: {
        type: 'area',
        toolbar: {
            show: false,
        },
        sparkline: {
            enabled: true,
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: 'smooth',
        width: 2.5,
    },

    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 0.9,
            opacityFrom: 0.5,
            opacityTo: 0.1,
            stops: [0, 80, 100],
        },
    },
    xaxis: {
        type: 'numeric',
        lines: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
        labels: { show: false },
    },
    yaxis: [
        {
            y: 0,
            offsetX: 0,
            offsetY: 0,
            padding: {
                left: 0,
                right: 0,
            },
        },
    ],
    tooltip: {
        x: { show: false },
    },
    theme: {
        monochrome: {
            enabled: true,
            color: '#56ca00',
            shadeTo: 'light',
            shadeIntensity: 0.65,
        },
    },
    series: [
        {
            name: 'Subscribers',
            data: [28, 40, 36, 52, 38, 60, 55],
        },
    ],
}).render()
