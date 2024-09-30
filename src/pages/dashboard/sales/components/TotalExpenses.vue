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
                            viewBox="0 0 24 24">
                            <path
                                class="fill-primary"
                                d="M10.75,8H12h0.0006104H15.5C15.776123,8,16,7.776123,16,7.5S15.776123,7,15.5,7h-3V5.5C12.5,5.223877,12.276123,5,12,5s-0.5,0.223877-0.5,0.5V7h-0.75C9.2312012,7,8,8.2312012,8,9.75s1.2312012,2.75,2.75,2.75h2.5c0.9664917,0,1.75,0.7835083,1.75,1.75S14.2164917,16,13.25,16H8.5C8.223877,16,8,16.223877,8,16.5S8.223877,17,8.5,17h3v1.5c0,0.0001831,0,0.0003662,0,0.0005493C11.5001831,18.7765503,11.723999,19.0001831,12,19c0.0001831,0,0.0003662,0,0.0006104,0c0.2759399-0.0001831,0.4995728-0.223999,0.4993896-0.5V17h0.75c1.5187988,0,2.75-1.2312012,2.75-2.75s-1.2312012-2.75-2.75-2.75h-2.5C9.7835083,11.5,9,10.7164917,9,9.75S9.7835083,8,10.75,8z M12,1C5.9248657,1,1,5.9248657,1,12s4.9248657,11,11,11c6.0722656-0.0068359,10.9931641-4.9277344,11-11C23,5.9248657,18.0751343,1,12,1z M12,22C6.4771729,22,2,17.5228271,2,12S6.4771729,2,12,2c5.5201416,0.0064697,9.9935303,4.4798584,10,10C22,17.5228271,17.5228271,22,12,22z"></path>
                        </svg>
                    </div>
                    <h6 class="my-auto mb-2 text-lg font-semibold text-gray-800 dark:text-white">Total Expenses</h6>
                </div>
                <span class="badge !my-auto bg-success/10 py-1 text-success ltr:ml-auto rtl:mr-auto"
                    ><i class="ti ti-trending-up"></i> 1.2%</span
                >
            </div>
            <div class="mt-2">
                <h2 class="text-3xl font-bold text-gray-800 dark:text-white">$35,262</h2>
                <p class="text-xs text-gray-400">in last week</p>
            </div>
        </div>
        <apexchart height="150" :options="options" :series="series" />
    </div>
</template>
