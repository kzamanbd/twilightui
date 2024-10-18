function buildChart(id, options, theme = {}, dataLabels = {}) {
    const chart = new ApexCharts(document.querySelector(id), {
        ...options('light'),
        theme: {
            mode: 'light',
            palette: 'palette1',
            ...theme,
        },
        dataLabels: {
            enabled: false,
            ...dataLabels,
        },
    });

    chart.render();

    return chart;
}

window.addEventListener('load', () => {
    // Apex Lines Chart
    const lineCharts = [
        {
            id: '#hs-cryptocurrency-market-cap-1',
            data: [21, 20, 24, 20, 18, 17, 11, 17, 18, 30, 31, 30, 30, 35, 25, 35, 35, 40, 60, 90, 90],
        },
        {
            id: '#hs-cryptocurrency-market-cap-2',
            data: [21, 20, 24, 20, 18, 27, 25, 27, 30, 30, 35, 25, 18, 30, 31, 35, 35, 90, 90, 90, 85],
        },
        {
            id: '#hs-cryptocurrency-market-cap-3',
            data: [25, 48, 10, 11, 11, 15, 60, 60, 60, 75, 21, 20, 24, 20, 38, 37, 35, 37, 30, 120, 120],
        },
        {
            id: '#hs-cryptocurrency-market-cap-4',
            data: [21, 20, 24, 45, 47, 30, 30, 35, 35, 35, 40, 60, 42, 90, 90, 85, 70, 75, 43, 75, 90],
        },
        {
            id: '#hs-cryptocurrency-market-cap-5',
            data: [21, 20, 24, 20, 18, 17, 11, 17, 18, 30, 31, 30, 30, 35, 25, 35, 35, 40, 60, 90, 90],
        },
        {
            id: '#hs-cryptocurrency-market-cap-6',
            data: [21, 20, 24, 20, 18, 27, 25, 27, 30, 30, 35, 25, 18, 30, 31, 35, 35, 90, 90, 90, 85],
        },
        {
            id: '#hs-cryptocurrency-market-cap-7',
            data: [25, 48, 10, 11, 11, 15, 60, 60, 60, 75, 21, 20, 24, 20, 38, 37, 35, 37, 30, 120, 120],
        },
        {
            id: '#hs-cryptocurrency-market-cap-8',
            data: [21, 20, 24, 45, 47, 30, 30, 35, 35, 35, 40, 60, 42, 90, 90, 85, 70, 75, 43, 75, 90],
        },
        {
            id: '#hs-cryptocurrency-market-cap-9',
            data: [21, 20, 24, 20, 18, 27, 25, 27, 30, 30, 35, 25, 18, 30, 31, 35, 35, 90, 90, 90, 85],
        },
        {
            id: '#hs-cryptocurrency-market-cap-10',
            data: [25, 48, 10, 11, 11, 15, 60, 60, 60, 75, 21, 20, 24, 20, 38, 37, 35, 37, 30, 120, 120],
        },
    ];

    lineCharts.forEach(({ id, data }) => {
        buildChart(
            id,
            mode => ({
                series: [
                    {
                        name: 'Sales',
                        data,
                    },
                ],
                chart: {
                    width: 100,
                    height: 30,
                    type: 'line',
                    sparkline: {
                        enabled: true,
                    },
                },
                stroke: {
                    curve: 'straight',
                    width: 2,
                },
                xaxis: {
                    type: 'category',
                    categories: [
                        '25 January 2023',
                        '26 January 2023',
                        '27 January 2023',
                        '28 January 2023',
                        '29 January 2023',
                        '30 January 2023',
                        '31 January 2023',
                        '1 February 2023',
                        '2 February 2023',
                        '3 February 2023',
                        '4 February 2023',
                        '5 February 2023',
                        '6 February 2023',
                        '25 January 2023',
                        '26 January 2023',
                        '27 January 2023',
                        '28 January 2023',
                        '29 January 2023',
                        '30 January 2023',
                        '31 January 2023',
                        '1 February 2023',
                    ],
                    crosshairs: {
                        show: false,
                    },
                },
                markers: {
                    hover: {
                        size: 0,
                    },
                },
            }),
            {
                colors: ['#3b82f6'],
            },
            {
                colors: ['#3b82f6'],
            },
        );
    });
});
