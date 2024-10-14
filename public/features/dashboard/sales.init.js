document.addEventListener('DOMContentLoaded', function () {
    /*  sales overview chart */
    const options5 = {
        series: [
            {
                name: 'Income',
                type: 'line',
                data: [20, 38, 38, 72, 55, 63, 43, 76, 55, 80, 40, 80],
            },
            {
                name: 'Expenses',
                type: 'line',
                data: [85, 65, 75, 38, 85, 35, 62, 40, 40, 64, 50, 89],
            },
        ],
        chart: {
            animations: {
                enabled: false,
            },
            height: 300,
            type: 'line',
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        stroke: {
            curve: 'straight',
            width: '3',
            dashArray: [0, 5],
        },
        grid: {
            borderColor: 'var(--primary-100)',
        },
        colors: ['var(--primary)', 'rgb(203,213,225)'],
        yaxis: {
            title: {
                style: {
                    color: '#adb5be',
                    fontSize: '14px',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                    cssClass: 'apexcharts-yaxis-label',
                },
            },
            labels: {
                style: {
                    colors: 'rgb(107 ,114 ,128)',
                    fontSize: '12px',
                },
                formatter: function (y) {
                    return y.toFixed(0) + '';
                },
            },
        },
        xaxis: {
            type: 'month',
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            axisBorder: {
                show: true,
                color: 'rgba(119, 119, 142, 0.05)',
                offsetX: 0,
                offsetY: 0,
            },
            axisTicks: {
                show: true,
                borderType: 'solid',
                color: 'rgba(119, 119, 142, 0.05)',
                width: 6,
                offsetX: 0,
                offsetY: 0,
            },
            labels: {
                rotate: -90,
                style: {
                    colors: 'rgb(107 ,114 ,128)',
                    fontSize: '12px',
                },
            },
        },
    };
    const chart = new ApexCharts(document.querySelector('#salesOverview'), options5);
    chart.render();

    /* Chart js (#donut)  */
    const myCanvas = document.getElementById('sales-donut');

    new window.Chart(myCanvas, {
        type: 'doughnut',
        data: {
            labels: ['Items', 'Revenue'],
            datasets: [
                {
                    data: [60, 40],
                    backgroundColor: ['rgb(90, 102, 241)', 'rgb(96, 165, 250)'],
                    borderWidth: 0,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                },
            },
            cutout: 90,
        },
    });

    /* Visitors By Country Map */
    const markers = [
        {
            name: 'Usa',
            coords: [40.3, -101.38],
        },
        {
            name: 'India',
            coords: [20.5937, 78.9629],
        },
        {
            name: 'Vatican City',
            coords: [41.9, 12.45],
        },
        {
            name: 'Canada',
            coords: [56.1304, -106.3468],
        },
        {
            name: 'Mauritius',
            coords: [-20.2, 57.5],
        },
        {
            name: 'Singapore',
            coords: [1.3, 103.8],
        },
        {
            name: 'Palau',
            coords: [7.35, 134.46],
        },
        {
            name: 'Maldives',
            coords: [3.2, 73.22],
        },
        {
            name: 'SÃ£o TomÃ© and PrÃ­ncipe',
            coords: [0.33, 6.73],
        },
    ];
    const map = new jsVectorMap({
        map: 'world_merc',
        selector: '#visitors-countries',
        markersSelectable: true,
        zoomOnScroll: false,
        zoomButtons: false,

        onMarkerSelected(index, isSelected, selectedMarkers) {
            console.log(index, isSelected, selectedMarkers);
        },

        // -------- Labels --------
        labels: {
            markers: {
                render: function (marker) {
                    return marker.name;
                },
            },
        },

        // -------- Marker and label style --------
        markers: markers,
        markerStyle: {
            hover: {
                stroke: '#DDD',
                strokeWidth: 3,
                fill: '#FFF',
            },
            selected: {
                fill: '#ff525d',
            },
        },
        markerLabelStyle: {
            initial: {
                fontFamily: 'Poppins',
                fontSize: 13,
                fontWeight: 500,
                fill: '#35373e',
            },
        },
    });
    /* Visitors By Country Map */
});
