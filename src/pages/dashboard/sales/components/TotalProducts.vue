<script setup lang="ts">
    const options = {
        chart: {
            animations: {
                enabled: false
            },
            height: 150,
            type: 'line',
            toolbar: {
                show: false
            }
        },
        stroke: {
            width: [1, 2],
            curve: 'straight',
            dashArray: [0, 5]
        },
        colors: ['#5a66f1', '#d1dae5'],
        grid: {
            borderColor: 'transparent'
        },
        fill: {
            colors: undefined,
            opacity: [0.1, 1],
            type: ['gradient', 'solid'],
            gradient: {
                shade: 'light',
                type: 'vertical',
                shadeIntensity: 0.5,
                gradientToColors: undefined,
                inverseColors: true,
                opacityFrom: 0.5,
                opacityTo: 0,
                stops: [0, 80, 100],
                colorStops: []
            }
        },
        labels: {
            enabled: true
        },
        markers: {
            size: 0
        },
        xaxis: {
            show: false,
            labels: {
                show: false
            }
        },
        yaxis: {
            show: false,
            labels: {
                show: false
            }
        },
        tooltip: {
            show: false
        }
    };
    const series = [
        {
            type: 'area',
            data: [20, 65, 38, 72, 55, 80, 65, 76, 55, 80, 40, 80]
        },
        {
            type: 'line',
            data: [85, 45, 75, 50, 85, 43, 80, 40, 70, 64, 50, 89]
        }
    ];
</script>

<template>
    <div class="card overflow-hidden">
        <div class="card-body pb-0">
            <div class="flex">
                <div class="flex space-x-3 rtl:space-x-reverse">
                    <div class="avatar dark:primary/10 rounded-sm bg-primary/10 p-2">
                        <svg
                            class="fill-primary"
                            xmlns="http://www.w3.org/2000/svg"
                            enable-background="new 0 0 24 24"
                            viewBox="0 0 24 24"
                            id="shopping-bag">
                            <path
                                class="fill-primary"
                                fill="#4B5563"
                                d="M19.5,7H16V5.9169922c0-2.2091064-1.7908325-4-4-4s-4,1.7908936-4,4V7H4.5C4.4998169,7,4.4996338,7,4.4993896,7C4.2234497,7.0001831,3.9998169,7.223999,4,7.5V19c0.0018311,1.6561279,1.3438721,2.9981689,3,3h10c1.6561279-0.0018311,2.9981689-1.3438721,3-3V7.5c0-0.0001831,0-0.0003662,0-0.0006104C19.9998169,7.2234497,19.776001,6.9998169,19.5,7z M9,5.9169922c0-1.6568604,1.3431396-3,3-3s3,1.3431396,3,3V7H9V5.9169922z M19,19c-0.0014038,1.1040039-0.8959961,1.9985962-2,2H7c-1.1040039-0.0014038-1.9985962-0.8959961-2-2V8h3v2.5C8,10.776123,8.223877,11,8.5,11S9,10.776123,9,10.5V8h6v2.5c0,0.0001831,0,0.0003662,0,0.0005493C15.0001831,10.7765503,15.223999,11.0001831,15.5,11c0.0001831,0,0.0003662,0,0.0006104,0C15.7765503,10.9998169,16.0001831,10.776001,16,10.5V8h3V19z"></path>
                        </svg>
                    </div>
                    <h6 class="my-auto mb-2 text-lg font-semibold text-gray-800 dark:text-white">Total Products</h6>
                </div>
                <span class="badge !my-auto bg-warning/10 py-1 text-warning ltr:ml-auto rtl:mr-auto">
                    <i class="ti ti-trending-down"></i> 1.8%
                </span>
            </div>
            <div class="mt-2">
                <h2 class="text-3xl font-bold text-gray-800 dark:text-white">$4,262</h2>
                <p class="text-xs text-gray-400">in last week</p>
            </div>
        </div>
        <apexchart height="150" :options="options" :series="series" />
    </div>
</template>
