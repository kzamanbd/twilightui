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
                                d="M9,10h2.5c0.276123,0,0.5-0.223877,0.5-0.5S11.776123,9,11.5,9H10V8c0-0.276123-0.223877-0.5-0.5-0.5S9,7.723877,9,8v1c-1.1045532,0-2,0.8954468-2,2s0.8954468,2,2,2h1c0.5523071,0,1,0.4476929,1,1s-0.4476929,1-1,1H7.5C7.223877,15,7,15.223877,7,15.5S7.223877,16,7.5,16H9v1.0005493C9.0001831,17.2765503,9.223999,17.5001831,9.5,17.5h0.0006104C9.7765503,17.4998169,10.0001831,17.276001,10,17v-1c1.1045532,0,2-0.8954468,2-2s-0.8954468-2-2-2H9c-0.5523071,0-1-0.4476929-1-1S8.4476929,10,9,10z M21.5,12H17V2.5c0.000061-0.0875244-0.0228882-0.1735229-0.0665283-0.2493896c-0.1375732-0.2393188-0.4431152-0.3217773-0.6824951-0.1842041l-3.2460327,1.8603516L9.7481079,2.0654297c-0.1536865-0.0878906-0.3424072-0.0878906-0.4960938,0l-3.256897,1.8613281L2.7490234,2.0664062C2.6731567,2.0227661,2.5871582,1.9998779,2.4996338,1.9998779C2.2235718,2.000061,1.9998779,2.223938,2,2.5v17c0.0012817,1.380188,1.119812,2.4987183,2.5,2.5H19c1.6561279-0.0018311,2.9981689-1.3438721,3-3v-6.5006104C21.9998169,12.2234497,21.776001,11.9998169,21.5,12z M4.5,21c-0.828064-0.0009155-1.4990845-0.671936-1.5-1.5V3.3623047l2.7412109,1.5712891c0.1575928,0.0872192,0.348877,0.0875854,0.5068359,0.0009766L9.5,3.0761719l3.2519531,1.8583984c0.157959,0.0866089,0.3492432,0.0862427,0.5068359-0.0009766L16,3.3623047V19c0.0008545,0.7719116,0.3010864,1.4684448,0.7803345,2H4.5z M21,19c0,1.1045532-0.8954468,2-2,2s-2-0.8954468-2-2v-6h4V19z"></path>
                        </svg>
                    </div>
                    <h6 class="my-auto mb-2 text-lg font-semibold text-gray-800 dark:text-white">Total Revenue</h6>
                </div>
                <span class="badge !my-auto bg-primary/10 py-1 text-primary ltr:ml-auto rtl:mr-auto">
                    <i class="ti ti-trending-up"></i> 20%
                </span>
            </div>
            <div class="mt-2">
                <h2 class="text-3xl font-bold text-gray-800 dark:text-white">$26,35,262</h2>
                <p class="text-xs text-gray-400">in last week</p>
            </div>
        </div>
        <apexchart height="150" :options="options" :series="series" />
    </div>
</template>
