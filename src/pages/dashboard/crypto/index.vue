<script setup lang="ts">
    import { ref, computed } from 'vue';

    const isShowCryptoMenu = ref(false);
    import {
        coins,
        bitcoinOptions,
        ethereumOptions,
        binanceOptions,
        litecoinOptions,
        solanaOptions,
        tetherOptions,
        selectedBitCoinOptions
    } from './data';

    const selectedCoinObj = ref(coins[0]);
    const selectedBitCoin = ref({
        series: bitcoinOptions.series,
        options: selectedBitCoinOptions().options
    });

    const selectedItem = ref('BTC');

    const financeOptions = computed(() => {
        return {
            bitcoin: bitcoinOptions,
            ethereum: ethereumOptions,
            binance: binanceOptions,
            litecoin: litecoinOptions,
            solana: solanaOptions,
            tether: tetherOptions,
            zcash: bitcoinOptions
        };
    });

    const getChartOptions = (title: string) => {
        const key = title.toLowerCase() as keyof typeof financeOptions.value;
        return financeOptions.value[key]?.options;
    };

    const selectBitCoin = ({ series, ...item }: any) => {
        selectedCoinObj.value = item;

        selectedBitCoin.value.series = [{ data: series }];
        isShowCryptoMenu.value = false;
    };
</script>

<template>
    <main class="tw--content">
        <!-- Start:Breadcrumb -->
        <nav class="breadcrumb">
            <div class="left-link">
                <ol class="breadcrumb-nav">
                    <li class="inline-flex items-center">
                        <a href="/" class="breadcrumb-item"> Dashboard </a>
                    </li>

                    <li aria-current="page">
                        <div class="flex items-center">
                            <span class="icon-[mdi--chevron-right]"></span>
                            <span class="breadcrumb-item-current"> Crypto </span>
                        </div>
                    </li>
                </ol>
            </div>
        </nav>
        <!-- End:Breadcrumb -->
        <div class="mb-6 grid grid-cols-1 gap-6 text-white sm:grid-cols-2 xl:grid-cols-4">
            <!-- Sessions -->
            <div class="card card-body bg-gradient-to-r from-primary to-violet-400">
                <div class="flex justify-between">
                    <div class="text-md mr-1 font-semibold">Sessions</div>
                    <div class="dropdown">
                        <a href="javascript:;" class="dropdown-toggle">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5 opacity-70 hover:opacity-80">
                                <circle cx="5" cy="12" r="2" stroke="currentColor" stroke-width="1.5"></circle>
                                <circle
                                    opacity="0.5"
                                    cx="12"
                                    cy="12"
                                    r="2"
                                    stroke="currentColor"
                                    stroke-width="1.5"></circle>
                                <circle cx="19" cy="12" r="2" stroke="currentColor" stroke-width="1.5"></circle>
                            </svg>
                        </a>
                        <ul class="dropdown-menu dark:text-white-dark right-0 text-black">
                            <li><a href="javascript:;" class="dropdown-link">View Report</a></li>
                            <li><a href="javascript:;" class="dropdown-link">Edit Report</a></li>
                        </ul>
                    </div>
                </div>
                <div class="mt-5 flex items-center">
                    <div class="mr-3 text-3xl font-bold">74,137</div>
                    <div class="badge bg-white/30">- 2.35%</div>
                </div>
                <div class="mt-5 flex items-center font-semibold">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="mr-2 h-5 w-5">
                        <path
                            opacity="0.5"
                            d="M3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C4.97196 6.49956 7.81811 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957Z"
                            stroke="currentColor"
                            stroke-width="1.5"></path>
                        <path
                            d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                            stroke="currentColor"
                            stroke-width="1.5"></path>
                    </svg>
                    Last Week 84,709
                </div>
            </div>

            <!-- Time On-Site -->
            <div class="card card-body bg-gradient-to-r from-info to-blue-400">
                <div class="flex justify-between">
                    <div class="text-md mr-1 font-semibold">Time On-Site</div>
                    <div class="dropdown">
                        <a href="javascript:;" class="dropdown-toggle">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5 opacity-70 hover:opacity-80">
                                <circle cx="5" cy="12" r="2" stroke="currentColor" stroke-width="1.5"></circle>
                                <circle
                                    opacity="0.5"
                                    cx="12"
                                    cy="12"
                                    r="2"
                                    stroke="currentColor"
                                    stroke-width="1.5"></circle>
                                <circle cx="19" cy="12" r="2" stroke="currentColor" stroke-width="1.5"></circle>
                            </svg>
                        </a>
                        <ul class="dropdown-menu dark:text-white-dark right-0 text-black">
                            <li><a href="javascript:;" class="dropdown-link">View Report</a></li>
                            <li><a href="javascript:;" class="dropdown-link">Edit Report</a></li>
                        </ul>
                    </div>
                </div>
                <div class="mt-5 flex items-center">
                    <div class="mr-3 text-3xl font-bold">38,085</div>
                    <div class="badge bg-white/30">+ 1.35%</div>
                </div>
                <div class="mt-5 flex items-center font-semibold">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="mr-2 h-5 w-5">
                        <path
                            opacity="0.5"
                            d="M3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C4.97196 6.49956 7.81811 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957Z"
                            stroke="currentColor"
                            stroke-width="1.5"></path>
                        <path
                            d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                            stroke="currentColor"
                            stroke-width="1.5"></path>
                    </svg>
                    Last Week 37,894
                </div>
            </div>

            <!-- Bounce Rate -->
            <div class="card card-body bg-gradient-to-r from-indigo-500 to-fuchsia-400">
                <div class="flex justify-between">
                    <div class="text-md mr-1 font-semibold">Bounce Rate</div>
                    <div class="dropdown">
                        <a href="javascript:;" class="dropdown-toggle">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5 opacity-70 hover:opacity-80">
                                <circle cx="5" cy="12" r="2" stroke="currentColor" stroke-width="1.5"></circle>
                                <circle
                                    opacity="0.5"
                                    cx="12"
                                    cy="12"
                                    r="2"
                                    stroke="currentColor"
                                    stroke-width="1.5"></circle>
                                <circle cx="19" cy="12" r="2" stroke="currentColor" stroke-width="1.5"></circle>
                            </svg>
                        </a>
                        <ul class="dropdown-menu dark:text-white-dark right-0 text-black">
                            <li><a href="javascript:;" class="dropdown-link">View Report</a></li>
                            <li><a href="javascript:;" class="dropdown-link">Edit Report</a></li>
                        </ul>
                    </div>
                </div>
                <div class="mt-5 flex items-center">
                    <div class="mr-3 text-3xl font-bold">49.10%</div>
                    <div class="badge bg-white/30">- 0.35%</div>
                </div>
                <div class="mt-5 flex items-center font-semibold">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="mr-2 h-5 w-5">
                        <path
                            opacity="0.5"
                            d="M3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C4.97196 6.49956 7.81811 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957Z"
                            stroke="currentColor"
                            stroke-width="1.5"></path>
                        <path
                            d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                            stroke="currentColor"
                            stroke-width="1.5"></path>
                    </svg>
                    Last Week 50.01%
                </div>
            </div>
            <!-- Users Visit -->
            <div class="card card-body bg-gradient-to-r from-cyan-500 to-cyan-400">
                <div class="flex justify-between">
                    <div class="text-md mr-1 font-semibold">Users Visit</div>
                    <div class="dropdown">
                        <a href="javascript:;" class="dropdown-toggle">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5 opacity-70 hover:opacity-80">
                                <circle cx="5" cy="12" r="2" stroke="currentColor" stroke-width="1.5"></circle>
                                <circle
                                    opacity="0.5"
                                    cx="12"
                                    cy="12"
                                    r="2"
                                    stroke="currentColor"
                                    stroke-width="1.5"></circle>
                                <circle cx="19" cy="12" r="2" stroke="currentColor" stroke-width="1.5"></circle>
                            </svg>
                        </a>
                        <ul class="dropdown-menu dark:text-white-dark right-0 text-black">
                            <li><a href="javascript:;" class="dropdown-link">View Report</a></li>
                            <li><a href="javascript:;" class="dropdown-link">Edit Report</a></li>
                        </ul>
                    </div>
                </div>
                <div class="mt-5 flex items-center">
                    <div class="mr-3 text-3xl font-bold">$170.46</div>
                    <div class="badge bg-white/30">+ 2.35%</div>
                </div>
                <div class="mt-5 flex items-center font-semibold">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="mr-2 h-5 w-5">
                        <path
                            opacity="0.5"
                            d="M3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C4.97196 6.49956 7.81811 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957Z"
                            stroke="currentColor"
                            stroke-width="1.5"></path>
                        <path
                            d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                            stroke="currentColor"
                            stroke-width="1.5"></path>
                    </svg>
                    Last Week 44,700
                </div>
            </div>
        </div>

        <div class="grid grid-cols-1 gap-6 xl:grid-cols-2">
            <!-- Favorites -->
            <div>
                <div class="mb-5 flex items-center font-bold">
                    <span class="text-lg">Favorites</span>
                    <a href="javascript:;" class="dark:hover:text-white-dark ml-auto text-primary hover:text-black">
                        See All
                    </a>
                </div>
                <div class="grid grid-cols-1 gap-6 sm:grid-cols-3 md:mb-5">
                    <!-- Bitcoin -->
                    <div class="card card-body">
                        <div class="mb-5 flex items-center font-semibold">
                            <div class="grid h-10 w-10 place-content-center rounded-full">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xml:space="preserve"
                                    width="100%"
                                    height="100%"
                                    version="1.1"
                                    shape-rendering="geometricPrecision"
                                    text-rendering="geometricPrecision"
                                    image-rendering="optimizeQuality"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    viewBox="0 0 4091.27 4091.73"
                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                    xmlns:xodm="http://www.corel.com/coreldraw/odm/2003">
                                    <g id="Layer_x0020_1">
                                        <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                                        <g id="_1421344023328">
                                            <path
                                                fill="#F7931A"
                                                fill-rule="nonzero"
                                                d="M4030.06 2540.77c-273.24,1096.01 -1383.32,1763.02 -2479.46,1489.71 -1095.68,-273.24 -1762.69,-1383.39 -1489.33,-2479.31 273.12,-1096.13 1383.2,-1763.19 2479,-1489.95 1096.06,273.24 1763.03,1383.51 1489.76,2479.57l0.02 -0.02z"></path>
                                            <path
                                                fill="white"
                                                fill-rule="nonzero"
                                                d="M2947.77 1754.38c40.72,-272.26 -166.56,-418.61 -450,-516.24l91.95 -368.8 -224.5 -55.94 -89.51 359.09c-59.02,-14.72 -119.63,-28.59 -179.87,-42.34l90.16 -361.46 -224.36 -55.94 -92 368.68c-48.84,-11.12 -96.81,-22.11 -143.35,-33.69l0.26 -1.16 -309.59 -77.31 -59.72 239.78c0,0 166.56,38.18 163.05,40.53 90.91,22.69 107.35,82.87 104.62,130.57l-104.74 420.15c6.26,1.59 14.38,3.89 23.34,7.49 -7.49,-1.86 -15.46,-3.89 -23.73,-5.87l-146.81 588.57c-11.11,27.62 -39.31,69.07 -102.87,53.33 2.25,3.26 -163.17,-40.72 -163.17,-40.72l-111.46 256.98 292.15 72.83c54.35,13.63 107.61,27.89 160.06,41.3l-92.9 373.03 224.24 55.94 92 -369.07c61.26,16.63 120.71,31.97 178.91,46.43l-91.69 367.33 224.51 55.94 92.89 -372.33c382.82,72.45 670.67,43.24 791.83,-303.02 97.63,-278.78 -4.86,-439.58 -206.26,-544.44 146.69,-33.83 257.18,-130.31 286.64,-329.61l-0.07 -0.05zm-512.93 719.26c-69.38,278.78 -538.76,128.08 -690.94,90.29l123.28 -494.2c152.17,37.99 640.17,113.17 567.67,403.91zm69.43 -723.3c-63.29,253.58 -453.96,124.75 -580.69,93.16l111.77 -448.21c126.73,31.59 534.85,90.55 468.94,355.05l-0.02 0z"></path>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <div class="ml-2">
                                <h6 class="text-dark dark:text-white-light">BTC</h6>
                                <p class="text-white-dark text-xs">Bitcoin</p>
                            </div>
                        </div>
                        <div class="mb-5">
                            <apexchart height="45" :options="bitcoinOptions.options" :series="bitcoinOptions.series" />
                        </div>
                        <div class="flex items-center justify-between text-base font-bold">
                            $20,000 <span class="text-sm font-normal text-success">+0.25%</span>
                        </div>
                    </div>

                    <!-- Ethereum -->
                    <div class="card card-body">
                        <div class="mb-5 flex items-center font-semibold">
                            <div class="grid h-10 w-10 place-content-center rounded-full bg-warning p-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xml:space="preserve"
                                    width="100%"
                                    height="100%"
                                    version="1.1"
                                    shape-rendering="geometricPrecision"
                                    text-rendering="geometricPrecision"
                                    image-rendering="optimizeQuality"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    viewBox="0 0 784.37 1277.39"
                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                    xmlns:xodm="http://www.corel.com/coreldraw/odm/2003">
                                    <g id="Layer_x0020_1">
                                        <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                                        <g id="_1421394342400">
                                            <g>
                                                <polygon
                                                    fill="#343434"
                                                    fill-rule="nonzero"
                                                    points="392.07,0 383.5,29.11 383.5,873.74 392.07,882.29 784.13,650.54 "></polygon>
                                                <polygon
                                                    fill="#8C8C8C"
                                                    fill-rule="nonzero"
                                                    points="392.07,0 -0,650.54 392.07,882.29 392.07,472.33 "></polygon>
                                                <polygon
                                                    fill="#3C3C3B"
                                                    fill-rule="nonzero"
                                                    points="392.07,956.52 387.24,962.41 387.24,1263.28 392.07,1277.38 784.37,724.89 "></polygon>
                                                <polygon
                                                    fill="#8C8C8C"
                                                    fill-rule="nonzero"
                                                    points="392.07,1277.38 392.07,956.52 -0,724.89 "></polygon>
                                                <polygon
                                                    fill="#141414"
                                                    fill-rule="nonzero"
                                                    points="392.07,882.29 784.13,650.54 392.07,472.33 "></polygon>
                                                <polygon
                                                    fill="#393939"
                                                    fill-rule="nonzero"
                                                    points="0,650.54 392.07,882.29 392.07,472.33 "></polygon>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <div class="ml-2">
                                <h6 class="text-dark dark:text-white-light">ETH</h6>
                                <p class="text-white-dark text-xs">Ethereum</p>
                            </div>
                        </div>
                        <div class="mb-5">
                            <apexchart
                                height="45"
                                :options="ethereumOptions.options"
                                :series="ethereumOptions.series" />
                        </div>
                        <div class="flex items-center justify-between text-base font-bold">
                            $21,000 <span class="text-sm font-normal text-danger">-1.25%</span>
                        </div>
                    </div>

                    <!-- Litecoin -->
                    <div class="card card-body">
                        <div class="mb-5 flex items-center font-semibold">
                            <div class="grid h-10 w-10 place-content-center rounded-full">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    height="100%"
                                    viewBox="0.847 0.876 329.254 329.256">
                                    <title>Litecoin</title>
                                    <path
                                        d="M330.102 165.503c0 90.922-73.705 164.629-164.626 164.629C74.554 330.132.848 256.425.848 165.503.848 74.582 74.554.876 165.476.876c90.92 0 164.626 73.706 164.626 164.627"
                                        fill="#345d9d"></path>
                                    <path
                                        d="M295.15 165.505c0 71.613-58.057 129.675-129.674 129.675-71.616 0-129.677-58.062-129.677-129.675 0-71.619 58.061-129.677 129.677-129.677 71.618 0 129.674 58.057 129.674 129.677"
                                        fill="#345d9d"></path>
                                    <path
                                        d="M155.854 209.482l10.693-40.264 25.316-9.249 6.297-23.663-.215-.587-24.92 9.104 17.955-67.608h-50.921l-23.481 88.23-19.605 7.162-6.478 24.395 19.59-7.156-13.839 51.998h135.521l8.688-32.362h-84.601"
                                        fill="#fff"></path>
                                </svg>
                            </div>
                            <div class="ml-2">
                                <h6 class="text-dark dark:text-white-light">LTC</h6>
                                <p class="text-white-dark text-xs">Litecoin</p>
                            </div>
                        </div>
                        <div class="mb-5">
                            <apexchart
                                height="45"
                                :options="litecoinOptions.options"
                                :series="litecoinOptions.series" />
                        </div>
                        <div class="flex items-center justify-between text-base font-bold">
                            $11,657 <span class="text-sm font-normal text-success">+0.25%</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Live Prices -->
            <div>
                <div class="mb-5 flex items-center font-bold">
                    <span class="text-lg">Live Prices</span>
                    <a href="javascript:;" class="dark:hover:text-white-dark ml-auto text-primary hover:text-black">
                        See All
                    </a>
                </div>
                <div class="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
                    <!-- Binance -->
                    <div class="card card-body">
                        <div class="mb-5 flex items-center font-semibold">
                            <div class="grid h-10 w-10 place-content-center rounded-full">
                                <svg
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 1024 1024"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g id="Icon">
                                        <circle cx="512" cy="512" r="512" style="fill: #f3ba2f"></circle>
                                        <path
                                            class="st1 fill-white"
                                            d="M404.9 468 512 360.9l107.1 107.2 62.3-62.3L512 236.3 342.6 405.7z"></path>
                                        <path
                                            transform="rotate(-45.001 298.629 511.998)"
                                            class="st1 fill-white"
                                            d="M254.6 467.9h88.1V556h-88.1z"></path>
                                        <path
                                            class="st1 fill-white"
                                            d="M404.9 556 512 663.1l107.1-107.2 62.4 62.3h-.1L512 787.7 342.6 618.3l-.1-.1z"></path>
                                        <path
                                            transform="rotate(-45.001 725.364 512.032)"
                                            class="st1 fill-white"
                                            d="M681.3 468h88.1v88.1h-88.1z"></path>
                                        <path
                                            class="st1 fill-white"
                                            d="M575.2 512 512 448.7l-46.7 46.8-5.4 5.3-11.1 11.1-.1.1.1.1 63.2 63.2 63.2-63.3z"></path>
                                    </g>
                                </svg>
                            </div>
                            <div class="ml-2">
                                <h6 class="text-dark dark:text-white-light">BNB</h6>
                                <p class="text-white-dark text-xs">Binance</p>
                            </div>
                        </div>
                        <div class="mb-5">
                            <apexchart height="45" :options="binanceOptions.options" :series="binanceOptions.series" />
                        </div>
                        <div class="flex items-center justify-between text-base font-bold">
                            $21,000 <span class="text-sm font-normal text-danger">-1.25%</span>
                        </div>
                    </div>

                    <!-- Tether -->
                    <div class="card card-body">
                        <div class="mb-5 flex items-center font-semibold">
                            <div class="grid h-10 w-10 place-content-center rounded-full">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 2000 2000">
                                    <path
                                        d="M1000,0c552.26,0,1000,447.74,1000,1000S1552.24,2000,1000,2000,0,1552.38,0,1000,447.68,0,1000,0"
                                        fill="#53ae94"></path>
                                    <path
                                        d="M1123.42,866.76V718H1463.6V491.34H537.28V718H877.5V866.64C601,879.34,393.1,934.1,393.1,999.7s208,120.36,484.4,133.14v476.5h246V1132.8c276-12.74,483.48-67.46,483.48-133s-207.48-120.26-483.48-133m0,225.64v-0.12c-6.94.44-42.6,2.58-122,2.58-63.48,0-108.14-1.8-123.88-2.62v0.2C633.34,1081.66,451,1039.12,451,988.22S633.36,894.84,877.62,884V1050.1c16,1.1,61.76,3.8,124.92,3.8,75.86,0,114-3.16,121-3.8V884c243.8,10.86,425.72,53.44,425.72,104.16s-182,93.32-425.72,104.18"
                                        fill="#fff"></path>
                                </svg>
                            </div>
                            <div class="ml-2">
                                <h6 class="text-dark dark:text-white-light">USDT</h6>
                                <p class="text-white-dark text-xs">Tether</p>
                            </div>
                        </div>
                        <div class="mb-5">
                            <apexchart height="45" :options="tetherOptions.options" :series="tetherOptions.series" />
                        </div>
                        <div class="flex items-center justify-between text-base font-bold">
                            $20,000 <span class="text-sm font-normal text-success">+0.25%</span>
                        </div>
                    </div>

                    <!-- Solana -->
                    <div class="card card-body">
                        <div class="mb-5 flex items-center font-semibold">
                            <div class="grid h-10 w-10 place-content-center rounded-full bg-warning p-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 508.07 398.17">
                                    <defs>
                                        <linearGradient
                                            id="linear-gradient"
                                            x1="463"
                                            y1="205.16"
                                            x2="182.39"
                                            y2="742.62"
                                            gradientTransform="translate(0 -198)"
                                            gradientUnits="userSpaceOnUse">
                                            <stop offset="0" stop-color="#00ffa3"></stop>
                                            <stop offset="1" stop-color="#dc1fff"></stop>
                                        </linearGradient>
                                        <linearGradient
                                            id="linear-gradient-2"
                                            x1="340.31"
                                            y1="141.1"
                                            x2="59.71"
                                            y2="678.57"
                                            xlink:href="#linear-gradient"></linearGradient>
                                        <linearGradient
                                            id="linear-gradient-3"
                                            x1="401.26"
                                            y1="172.92"
                                            x2="120.66"
                                            y2="710.39"
                                            xlink:href="#linear-gradient"></linearGradient>
                                    </defs>
                                    <path
                                        class="cls-1 fill-[url(#linear-gradient)]"
                                        d="M84.53,358.89A16.63,16.63,0,0,1,96.28,354H501.73a8.3,8.3,0,0,1,5.87,14.18l-80.09,80.09a16.61,16.61,0,0,1-11.75,4.86H10.31A8.31,8.31,0,0,1,4.43,439Z"
                                        transform="translate(-1.98 -55)"></path>
                                    <path
                                        class="cls-2 fill-[url(#linear-gradient)]"
                                        d="M84.53,59.85A17.08,17.08,0,0,1,96.28,55H501.73a8.3,8.3,0,0,1,5.87,14.18l-80.09,80.09a16.61,16.61,0,0,1-11.75,4.86H10.31A8.31,8.31,0,0,1,4.43,140Z"
                                        transform="translate(-1.98 -55)"></path>
                                    <path
                                        class="cls-3 fill-[url(#linear-gradient)]"
                                        d="M427.51,208.42a16.61,16.61,0,0,0-11.75-4.86H10.31a8.31,8.31,0,0,0-5.88,14.18l80.1,80.09a16.6,16.6,0,0,0,11.75,4.86H501.73a8.3,8.3,0,0,0,5.87-14.18Z"
                                        transform="translate(-1.98 -55)"></path>
                                </svg>
                            </div>
                            <div class="ml-2">
                                <h6 class="text-dark dark:text-white-light">SOL</h6>
                                <p class="text-white-dark text-xs">Solana</p>
                            </div>
                        </div>
                        <div class="mb-5">
                            <apexchart height="45" :options="solanaOptions.options" :series="solanaOptions.series" />
                        </div>
                        <div class="flex items-center justify-between text-base font-bold">
                            $21,000 <span class="text-sm font-normal text-danger">-1.25%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div class="relative mt-5 flex flex-col gap-5 xl:flex-row">
                <div
                    class="card absolute z-10 hidden w-80 flex-none divide-y divide-[#ebedf2] overflow-visible border-0 p-0 dark:divide-[#191e3a] lg:overflow-y-auto xl:relative xl:block"
                    :class="{ '!block h-full': isShowCryptoMenu }">
                    <button
                        type="button"
                        v-for="item in coins"
                        :key="item.title"
                        class="flex w-full items-center p-4 hover:bg-gray-100 dark:hover:bg-[#192A3A]"
                        :class="{ 'bg-gray-100 dark:bg-[#192A3A]': selectedCoinObj.title === item.title }"
                        @click="selectBitCoin(item)">
                        <div class="pr-4">
                            <div class="flex items-baseline font-semibold">
                                <div class="text-md mr-1" v-html="item.title"></div>
                                <div class="text-white-dark text-xs uppercase" v-html="`(${item.alias})`"></div>
                            </div>
                            <div class="mt-2 flex items-center" :class="[item.isUp ? 'text-success' : 'text-danger']">
                                <div class="mr-3 min-w-20 text-xl" v-html="`$${item.value}`"></div>
                                <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-4 w-4"
                                        :class="{ 'rotate-180': !item.isUp }"
                                        viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path
                                            fill-rule="evenodd"
                                            d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                                <div class="text-sm font-medium">{{ `${item.perc}%` }}</div>
                            </div>
                        </div>
                        <div class="flex-1">
                            <div :id="item.title.toLowerCase()" class="chart">
                                <apexchart :options="getChartOptions(item.title)" :series="[{ data: item.series }]" />
                            </div>
                        </div>
                    </button>
                </div>

                <div
                    class="absolute z-[5] hidden h-full w-full rounded-md bg-black/60"
                    :class="{ '!block xl:!hidden': isShowCryptoMenu }"
                    @click="isShowCryptoMenu = !isShowCryptoMenu"></div>

                <div class="card flex-1 p-0">
                    <div class="flex-wrap items-center border-b border-[#ebedf2] p-4 dark:border-[#191e3a] md:flex">
                        <div class="flex flex-1 items-start pr-4">
                            <button
                                type="button"
                                class="mr-5 block hover:text-primary xl:hidden"
                                @click="isShowCryptoMenu = !isShowCryptoMenu">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-6 w-6">
                                    <path
                                        d="M20 7L4 7"
                                        stroke="currentColor"
                                        stroke-width="1.5"
                                        stroke-linecap="round"></path>
                                    <path
                                        opacity="0.5"
                                        d="M20 12L4 12"
                                        stroke="currentColor"
                                        stroke-width="1.5"
                                        stroke-linecap="round"></path>
                                    <path
                                        d="M20 17L4 17"
                                        stroke="currentColor"
                                        stroke-width="1.5"
                                        stroke-linecap="round"></path>
                                </svg>
                            </button>
                            <div>
                                <div class="flex items-center">
                                    <div class="text-md mr-1 font-semibold" v-html="selectedCoinObj.title"></div>
                                    <div
                                        class="text-white-dark text-xs font-semibold uppercase"
                                        v-html="`(${selectedCoinObj.alias})`"></div>
                                </div>
                                <div
                                    class="mt-2 flex items-center text-success"
                                    :class="selectedCoinObj.isUp ? 'text-success' : 'text-danger'">
                                    <div class="mr-3 min-w-20 text-2xl" v-html="`$${selectedCoinObj.value}`"></div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="mb-px h-4 w-4"
                                        :class="{ 'rotate-180': !selectedCoinObj.isUp }"
                                        viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path
                                            fill-rule="evenodd"
                                            d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <div class="mb-px text-sm font-medium" v-html="`${selectedCoinObj.perc}%`"></div>
                                </div>
                            </div>
                        </div>
                        <ul
                            class="text-white-dark mt-5 grid grid-cols-2 divide-[#ebedf2] font-semibold dark:divide-[#253b5c] sm:mt-0 sm:grid-cols-4 sm:divide-x md:ml-auto">
                            <li class="px-4 py-1">
                                Market Cap
                                <span
                                    class="mt-1.5 block text-lg text-black dark:text-white-light"
                                    v-html="`$${selectedCoinObj.marketcap}B`">
                                </span>
                            </li>
                            <li class="px-4 py-1">
                                Volume
                                <span
                                    class="mt-1.5 block text-lg text-black dark:text-white-light"
                                    v-html="`$${selectedCoinObj.volume}B`">
                                </span>
                            </li>
                            <li class="px-4 py-1">
                                Supply
                                <span
                                    class="mt-1.5 block text-lg text-black dark:text-white-light"
                                    v-html="`${selectedCoinObj.supply}M`">
                                </span>
                            </li>
                            <li class="px-4 py-1">
                                All Time High
                                <span
                                    class="mt-1.5 block text-lg text-black dark:text-white-light"
                                    v-html="`$${selectedCoinObj.highest}`">
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div
                        class="mb-5 grid grid-rows-1 gap-4 border-b border-[#ebedf2] p-4 dark:border-[#253b5c] sm:grid-cols-4">
                        <div>
                            <div class="mb-1.5 font-semibold">Action</div>
                            <select class="text-white-dark form-select">
                                <option>Buy</option>
                                <option>Sell</option>
                            </select>
                        </div>
                        <div>
                            <div class="mb-1.5 font-semibold">Wallet</div>
                            <select class="text-white-dark form-select">
                                <option>Bitcoin</option>
                                <option>Ethereum</option>
                                <option>Zcash</option>
                                <option>Litecoin</option>
                                <option>Binance</option>
                                <option>Solana</option>
                                <option>Tether</option>
                            </select>
                        </div>
                        <div>
                            <div class="mb-1.5 font-semibold">Amount</div>
                            <div class="relative flex">
                                <input type="text" class="form-input rounded-r-none border-r-0" />
                                <div class="dropdown">
                                    <div
                                        class="dropdown-toggle flex cursor-pointer items-center justify-center gap-1 rounded-none rounded-r-md border bg-[#f1f2f3] px-3 py-2.5 font-semibold dark:border-[#253b5c] dark:bg-[#1b2e4b]">
                                        <span v-html="selectedItem"></span>
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-4 w-4">
                                            <path
                                                d="M19 9L12 15L5 9"
                                                stroke="currentColor"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"></path>
                                        </svg>
                                    </div>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <button class="dropdown-link" @click="selectedItem = 'BTC'">BTC</button>
                                        </li>
                                        <li>
                                            <button class="dropdown-link" @click="selectedItem = 'ETH'">ETH</button>
                                        </li>
                                        <li>
                                            <button class="dropdown-link" @click="selectedItem = 'ZEC'">ZEC</button>
                                        </li>
                                        <li>
                                            <button class="dropdown-link" @click="selectedItem = 'LTC'">LTC</button>
                                        </li>
                                        <li>
                                            <button class="dropdown-link" @click="selectedItem = 'BNB'">BNB</button>
                                        </li>
                                        <li>
                                            <button class="dropdown-link" @click="selectedItem = 'SOL'">SOL</button>
                                        </li>
                                        <li>
                                            <button class="dropdown-link" @click="selectedItem = 'USDT'">USDT</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <button type="button" class="btn-primary btn self-end py-2.5">Buy</button>
                    </div>
                    <!-- selected chart -->
                    <div class="flex-1 px-4">
                        <apexchart height="425" :options="selectedBitCoin.options" :series="selectedBitCoin.series" />
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
