<script setup lang="ts">
    import { revenueStatus } from './data';
</script>

<template>
    <main class="twilight-content">
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
                            <span class="breadcrumb-item-current"> E commerce </span>
                        </div>
                    </li>
                </ol>
            </div>
        </nav>
        <!-- End:Breadcrumb -->

        <div class="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            <div class="sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-2">
                <div class="relative w-full overflow-hidden card">
                    <div
                        class="grid grid-cols-1 gap-0 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xl:gap-4">
                        <div
                            class="col-span-4 border-b border-r border-dashed xs:col-span-1 dark:border-slate-700 sm:col-span-1 lg:col-span-2 xl:col-span-1 xl:border-b-0">
                            <div class="p-4 text-center">
                                <span class="my-1 text-2xl font-semibold dark:text-slate-200"> 520 </span>
                                <h6 class="my-2 text-xs font-semibold uppercase text-slate-400">Today's Orders</h6>
                            </div>
                        </div>
                        <div
                            class="col-span-4 border-b border-r-0 border-dashed xs:col-span-1 dark:border-slate-700 sm:col-span-1 lg:col-span-2 xl:col-span-1 xl:border-b-0 xl:border-r">
                            <div class="p-4 text-center">
                                <span class="my-1 text-2xl font-semibold dark:text-slate-200"> 82.8% </span>
                                <h6 class="my-2 text-xs font-semibold uppercase text-slate-400">Conversion Rate</h6>
                            </div>
                        </div>
                        <div
                            class="col-span-4 border-b border-r border-dashed xs:col-span-1 dark:border-slate-700 sm:col-span-1 md:border-b-0 lg:col-span-2 xl:col-span-1">
                            <div class="p-4 text-center">
                                <span class="my-1 text-2xl font-semibold dark:text-slate-200"> $92.5 </span>
                                <h6 class="my-2 text-xs font-semibold uppercase text-slate-400">Avg. Value</h6>
                            </div>
                        </div>
                        <div class="col-span-4 xs:col-span-1 sm:col-span-1 lg:col-span-2 xl:col-span-1">
                            <div class="p-4 text-center">
                                <span class="my-1 text-2xl font-semibold dark:text-slate-200"> $360.50 </span>
                                <h6 class="my-2 text-xs font-semibold uppercase text-slate-400">Gross sale</h6>
                            </div>
                        </div>
                    </div>
                    <div class="border-b border-dashed dark:border-slate-700"></div>
                    <div class="p-4">
                        <h4 class="py-2 font-medium dark:text-slate-300">Revenue Status</h4>
                        <div
                            id="revenue-status"
                            class="apex-charts bg-[url('/images/widgets/svg-map.svg')] bg-contain bg-center bg-no-repeat dark:bg-[url('/images/widgets/dark-map.svg')]"
                            style="min-height: 350px">
                            <apexchart height="350" :options="revenueStatus" :series="revenueStatus.series" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1">
                <div class="grid h-full grid-cols-2 gap-4">
                    <div class="col-span-2">
                        <div class="relative w-full h-full card">
                            <div class="text-center card-body">
                                <div class="flex flex-wrap justify-between items-cente xl:gap-x-2">
                                    <div class="inline-flex items-center justify-center text-center">
                                        <div
                                            id="weekly_report"
                                            class="relative w-32 h-20"
                                            style="
                                                user-select: none;
                                                -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                                            "></div>
                                    </div>
                                    <div class="self-center">
                                        <span class="my-1 text-2xl font-semibold dark:text-slate-300"> $24,500 </span>
                                        <h6 class="my-2 text-xs font-semibold uppercase text-slate-400">
                                            Today's Revenue
                                        </h6>
                                    </div>
                                    <div class="self-center mt-4 xs:mt-0">
                                        <button
                                            class="flex px-3 py-2 text-sm font-semibold text-white bg-blue-500 rounded hover:bg-blue-600 lg:px-4">
                                            <span class="icon-[mdi--download-multiple]"> </span>
                                            Withdraw
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-2">
                        <div class="relative w-full h-full card">
                            <div class="text-center card-body">
                                <div id="map_1" class="w-full jvm-container h-60"></div>
                                <div
                                    class="grid grid-cols-1 gap-0 mt-2 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-2 xl:gap-4">
                                    <div
                                        class="col-span-4 border-b border-r-0 border-dashed xs:col-span-1 xs:border-r dark:border-slate-700 sm:col-span-1 md:border-b-0 lg:col-span-2 xl:col-span-1 xl:border-b-0">
                                        <div class="p-4 text-center">
                                            <p
                                                class="relative inline-block my-1 text-2xl font-semibold dark:text-slate-300">
                                                $15,520
                                                <span
                                                    class="absolute top-0 right-0 w-1 h-1 bg-pink-500 rounded-full"></span>
                                            </p>
                                            <h6 class="mt-2 text-xs font-semibold uppercase text-slate-400">
                                                Domestic
                                            </h6>
                                        </div>
                                    </div>
                                    <div class="col-span-4 xs:col-span-1 sm:col-span-1 lg:col-span-2 xl:col-span-1">
                                        <div class="p-4 text-center">
                                            <p
                                                class="relative inline-block my-1 text-2xl font-semibold dark:text-slate-300">
                                                $36,880
                                                <span
                                                    class="absolute top-0 right-0 w-1 h-1 bg-blue-500 rounded-full"></span>
                                            </p>
                                            <h6 class="mt-2 text-xs font-semibold uppercase text-slate-400">
                                                International
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--end inner-grid-->
        <div class="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            <div class="order-1 sm:col-span-1 md:col-span-1 lg:order-1 lg:col-span-1 xl:order-1 xl:col-span-1">
                <div class="relative w-full h-full overflow-hidden card">
                    <div class="card-header">
                        <h4 class="font-medium">Order By Device</h4>
                    </div>
                    <div class="card-body">
                        <div id="Sales" class="w-full -mt-8 h-72"></div>
                    </div>
                </div>
            </div>
            <div class="order-2 sm:col-span-1 md:col-span-1 lg:order-3 lg:col-span-2 xl:order-2 xl:col-span-1">
                <div class="relative w-full h-full overflow-hidden card">
                    <div class="card-header">
                        <h4 class="font-medium">Reports overview</h4>
                    </div>
                    <div class="card-body">
                        <h2 class="mb-4 text-3xl font-medium dark:text-slate-300">$8836.68</h2>
                        <div class="w-full mx-auto mb-2">
                            <div class="flex items-center">
                                <div class="mr-0.5 h-2 w-1/4 rounded-bl rounded-tl bg-blue-500"></div>
                                <div class="relative mr-0.5 h-2 w-1/4 bg-gray-200 dark:bg-slate-700">
                                    <div class="h-2 bg-yellow-500"></div>
                                </div>
                                <div class="relative mr-0.5 h-2 w-1/4 bg-gray-200 dark:bg-slate-700">
                                    <div class="w-1/2 h-2 bg-pink-500"></div>
                                </div>
                                <div class="w-1/4 h-2 bg-gray-200 rounded-tr rounded-br dark:bg-slate-700"></div>
                            </div>
                        </div>
                        <div class="flex flex-col">
                            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                    <div class="overflow-hidden">
                                        <table class="min-w-full tw-table">
                                            <thead class="bg-gray-50 dark:bg-gray-700">
                                                <tr>
                                                    <th
                                                        scope="col"
                                                        class="p-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                        Device
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        class="p-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                        Amount
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        class="p-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                        % Change
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <!-- Product 1 -->
                                                <tr
                                                    class="bg-white border-b border-dashed dark:border-gray-700 dark:bg-gray-800">
                                                    <td
                                                        class="flex items-center p-3 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        <span
                                                            class="relative self-center inline-block w-1 h-1 mr-2 bg-blue-500 rounded-full"></span>
                                                        Gross value
                                                    </td>
                                                    <td
                                                        class="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                        $6,543.55
                                                    </td>
                                                    <td
                                                        class="p-3 text-sm text-right text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                        <span
                                                            class="rounded bg-green-100 px-2 py-1 text-[12px] font-medium text-green-700 focus:outline-none dark:text-green-600"
                                                            >+6.8</span
                                                        >
                                                    </td>
                                                </tr>
                                                <!-- Product 2 -->
                                                <tr
                                                    class="bg-white border-b border-dashed dark:border-gray-700 dark:bg-gray-800">
                                                    <td
                                                        class="flex items-center p-3 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        <span
                                                            class="relative self-center inline-block w-1 h-1 mr-2 bg-yellow-500 rounded-full"></span>
                                                        Net volume from sales
                                                    </td>
                                                    <td
                                                        class="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                        $3,654.21
                                                    </td>
                                                    <td
                                                        class="p-3 text-sm text-right text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                        <span
                                                            class="rounded bg-blue-100 px-2 py-1 text-[12px] font-medium text-blue-700 focus:outline-none dark:text-blue-600">
                                                            +4.5
                                                        </span>
                                                    </td>
                                                </tr>
                                                <!-- Product 2 -->
                                                <tr class="bg-white dark:bg-gray-800">
                                                    <td
                                                        class="flex items-center p-3 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        <span
                                                            class="relative self-center inline-block w-1 h-1 mr-2 bg-pink-500 rounded-full"></span>
                                                        Other
                                                    </td>
                                                    <td
                                                        class="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                        $563.20
                                                    </td>
                                                    <td
                                                        class="p-3 text-sm text-right text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                        <span
                                                            class="rounded bg-pink-100 px-2 py-1 text-[12px] font-medium text-pink-700 focus:outline-none dark:text-pink-600">
                                                            -1.2
                                                        </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="order-3 sm:col-span-1 md:col-span-1 lg:order-2 lg:col-span-1 xl:order-3 xl:col-span-1">
                <div class="relative w-full h-full overflow-hidden card">
                    <div class="card-header">
                        <h4 class="font-medium">Top Dealer</h4>
                    </div>
                    <div class="card-body">
                        <div class="w-full">
                            <div class="flex items-center mb-2">
                                <div class="w-12 h-12 rounded">
                                    <img
                                        class="object-cover object-center w-full h-full overflow-hidden rounded"
                                        src="/images/users/avatar-1.png"
                                        alt="logo" />
                                </div>
                                <div class="ml-2">
                                    <a
                                        tabindex="0"
                                        class="text-gray-800 cursor-pointer hover:text-gray-500 focus:text-gray-500 focus:underline focus:outline-none dark:text-gray-100"
                                        ><h5 class="text-base font-medium">Fitbit Incorporation</h5></a
                                    >
                                    <p
                                        tabindex="0"
                                        class="text-xs font-medium text-gray-500 focus:outline-none dark:text-gray-400">
                                        San Diego, California
                                    </p>
                                </div>
                            </div>

                            <div
                                class="grid grid-cols-1 gap-0 mt-2 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-2 xl:gap-4">
                                <div
                                    class="col-span-4 border-b border-r-0 border-dashed xs:col-span-1 xs:border-r dark:border-slate-700 sm:col-span-1 md:border-b-0 lg:col-span-2 xl:col-span-1 xl:border-b-0">
                                    <div class="p-4 text-center">
                                        <p
                                            class="relative inline-block my-1 text-2xl font-semibold dark:text-slate-300">
                                            5,520
                                        </p>
                                        <h6 class="mt-2 text-xs font-semibold uppercase text-slate-400">
                                            Products Sold
                                        </h6>
                                    </div>
                                </div>
                                <div class="col-span-4 xs:col-span-1 sm:col-span-1 lg:col-span-2 xl:col-span-1">
                                    <div class="p-4 text-center">
                                        <p
                                            class="relative inline-block my-1 text-2xl font-semibold dark:text-slate-300">
                                            $36,880
                                        </p>
                                        <h6 class="mt-2 text-xs font-semibold uppercase text-slate-400">
                                            Total Earning
                                        </h6>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-4">
                                <p class="pb-1 text-sm font-semibold leading-none text-right text-indigo-700">73%</p>
                            </div>
                            <div class="relative w-full h-2 bg-gray-200 rounded-full dark:bg-gray-700">
                                <div
                                    class="h-2 rounded-full w-60 bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600"></div>
                            </div>
                            <button
                                class="w-full py-3 mt-5 text-sm font-medium text-indigo-700 bg-gray-100 rounded hover:bg-opacity-50 hover:text-black focus:bg-opacity-50 focus:text-black focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2 dark:bg-slate-700 dark:text-slate-300 dark:hover:text-slate-100">
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--end inner-grid-->
        <div class="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            <div class="sm:col-span-1 md:col-span-2 lg:col-span-4 xl:col-span-1">
                <div class="relative w-full h-full overflow-hidden card">
                    <div class="card-header">
                        <h4 class="font-medium">Earnings Reports</h4>
                    </div>
                    <div class="flex flex-col card-body">
                        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                <div class="overflow-hidden">
                                    <table class="min-w-full tw-table">
                                        <thead class="bg-gray-50 dark:bg-gray-700">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    class="p-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                    Date
                                                </th>
                                                <th
                                                    scope="col"
                                                    class="p-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                    Item Counts
                                                </th>
                                                <th
                                                    scope="col"
                                                    class="p-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                    Tax
                                                </th>
                                                <th
                                                    scope="col"
                                                    class="p-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                    Earning
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <!-- 1 -->
                                            <tr
                                                class="bg-white border-b border-dashed dark:border-gray-700 dark:bg-gray-800">
                                                <td
                                                    class="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                    03 March
                                                </td>
                                                <td
                                                    class="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                    50
                                                </td>
                                                <td
                                                    class="p-3 text-sm text-red-500 whitespace-nowrap dark:text-red-400">
                                                    -$40
                                                </td>
                                                <td
                                                    class="p-3 text-sm font-medium text-gray-600 whitespace-nowrap dark:text-gray-400">
                                                    $15,500.00
                                                </td>
                                            </tr>
                                            <!-- 2 -->
                                            <tr
                                                class="bg-white border-b border-dashed dark:border-gray-700 dark:bg-gray-800">
                                                <td
                                                    class="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                    04 March
                                                </td>
                                                <td
                                                    class="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                    120
                                                </td>
                                                <td
                                                    class="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                    -
                                                </td>
                                                <td
                                                    class="p-3 text-sm font-medium text-gray-600 whitespace-nowrap dark:text-gray-400">
                                                    $20,900.00
                                                </td>
                                            </tr>
                                            <!-- 3 -->
                                            <tr
                                                class="bg-white border-b border-dashed dark:border-gray-700 dark:bg-gray-800">
                                                <td
                                                    class="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                    05 March
                                                </td>
                                                <td
                                                    class="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                    90
                                                </td>
                                                <td
                                                    class="p-3 text-sm text-red-500 whitespace-nowrap dark:text-red-400">
                                                    -$20
                                                </td>
                                                <td
                                                    class="p-3 text-sm font-medium text-gray-600 whitespace-nowrap dark:text-gray-400">
                                                    $10,500.00
                                                </td>
                                            </tr>
                                            <!-- 4 -->
                                            <tr
                                                class="bg-white border-b border-dashed dark:border-gray-700 dark:bg-gray-800">
                                                <td
                                                    class="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                    06 March
                                                </td>
                                                <td
                                                    class="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                    160
                                                </td>
                                                <td
                                                    class="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                    -
                                                </td>
                                                <td
                                                    class="p-3 text-sm font-medium text-gray-600 whitespace-nowrap dark:text-gray-400">
                                                    $35,000.00
                                                </td>
                                            </tr>
                                            <!-- 5 -->
                                            <tr class="bg-white dark:bg-gray-800">
                                                <td
                                                    class="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                    07 March
                                                </td>
                                                <td
                                                    class="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                    80
                                                </td>
                                                <td
                                                    class="p-3 text-sm text-red-500 whitespace-nowrap dark:text-red-400">
                                                    -$60
                                                </td>
                                                <td
                                                    class="p-3 text-sm font-medium text-gray-600 whitespace-nowrap dark:text-gray-400">
                                                    $18,880.00
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--end inner-grid-->
            </div>
            <div class="sm:col-span-1 md:col-span-2 lg:col-span-4 xl:col-span-1">
                <div class="relative w-full h-full overflow-hidden card">
                    <div class="card-header">
                        <h4 class="font-medium">Most Popular Products</h4>
                    </div>
                    <div class="flex flex-col card-body">
                        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                <div class="overflow-hidden">
                                    <table class="min-w-full tw-table">
                                        <thead class="bg-gray-50 dark:bg-gray-700">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    class="p-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                    Product
                                                </th>
                                                <th
                                                    scope="col"
                                                    class="p-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                    Price
                                                </th>
                                                <th
                                                    scope="col"
                                                    class="p-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                    Sell
                                                </th>
                                                <th
                                                    scope="col"
                                                    class="p-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                    Status
                                                </th>
                                                <th
                                                    scope="col"
                                                    class="p-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <!-- 1 -->
                                            <tr
                                                class="bg-white border-b border-dashed dark:border-gray-700 dark:bg-gray-800">
                                                <td class="p-3 text-sm font-medium whitespace-nowrap dark:text-white">
                                                    <img
                                                        src="/images/products/01.png"
                                                        class="inline-block h-5 mr-2" />T-Wind Camera EDM 5D(White)
                                                </td>
                                                <td
                                                    class="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                    $50 <del class="text-gray-400">$90</del>
                                                </td>
                                                <td
                                                    class="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                    450<small class="text-gray-400">(500)</small>
                                                </td>
                                                <td
                                                    class="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                    <span
                                                        class="rounded bg-green-100 px-2 py-1 text-[12px] font-medium text-green-700 focus:outline-none dark:text-green-600">
                                                        Stock
                                                    </span>
                                                </td>
                                                <td
                                                    class="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                    <a href="#">
                                                        <span
                                                            class="icon-[mdi--pen] text-lg text-gray-500 dark:text-gray-400"></span>
                                                    </a>
                                                    <a href="#">
                                                        <span
                                                            class="icon-[mdi--delete-outline] text-lg text-red-500 dark:text-red-400"></span>
                                                    </a>
                                                </td>
                                            </tr>
                                            <!-- 2 -->
                                            <tr
                                                class="bg-white border-b border-dashed dark:border-gray-700 dark:bg-gray-800">
                                                <td class="p-3 text-sm font-medium whitespace-nowrap dark:text-white">
                                                    <img
                                                        src="/images/products/02.png"
                                                        class="inline-block h-5 mr-2" />T-Wind Shoes Max-Zon
                                                </td>
                                                <td
                                                    class="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                    $49 <del class="text-gray-400">$88</del>
                                                </td>
                                                <td
                                                    class="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                    850<small class="text-gray-400">(900)</small>
                                                </td>
                                                <td
                                                    class="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                    <span
                                                        class="rounded bg-green-100 px-2 py-1 text-[12px] font-medium text-green-700 focus:outline-none dark:text-green-600">
                                                        Stock
                                                    </span>
                                                </td>
                                                <td
                                                    class="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                    <a href="#">
                                                        <span
                                                            class="icon-[mdi--pen] text-lg text-gray-500 dark:text-gray-400"></span>
                                                    </a>
                                                    <a href="#">
                                                        <span
                                                            class="icon-[mdi--delete-outline] text-lg text-red-500 dark:text-red-400"></span>
                                                    </a>
                                                </td>
                                            </tr>
                                            <!-- 3 -->
                                            <tr
                                                class="bg-white border-b border-dashed dark:border-gray-700 dark:bg-gray-800">
                                                <td class="p-3 text-sm font-medium whitespace-nowrap dark:text-white">
                                                    <img
                                                        src="/images/products/03.png"
                                                        class="inline-block h-5 mr-2" />T-Wind VR 5D (Black)
                                                </td>
                                                <td
                                                    class="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                    $39 <del class="text-gray-400">$99</del>
                                                </td>
                                                <td
                                                    class="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                    700<small class="text-gray-400">(700)</small>
                                                </td>
                                                <td
                                                    class="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                    <span
                                                        class="rounded bg-red-100 px-2 py-1 text-[12px] font-medium text-red-700 focus:outline-none dark:text-red-600">
                                                        Sold
                                                    </span>
                                                </td>
                                                <td
                                                    class="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                    <a href="#">
                                                        <span
                                                            class="icon-[mdi--pen] text-lg text-gray-500 dark:text-gray-400"></span>
                                                    </a>
                                                    <a href="#">
                                                        <span
                                                            class="icon-[mdi--delete-outline] text-lg text-red-500 dark:text-red-400"></span>
                                                    </a>
                                                </td>
                                            </tr>
                                            <!-- 4 -->
                                            <tr class="bg-white dark:bg-gray-800">
                                                <td class="p-3 text-sm font-medium whitespace-nowrap dark:text-white">
                                                    <img
                                                        src="/images/products/04.png"
                                                        class="inline-block h-5 mr-2" />T-Wind Mask N99 [ISI]
                                                </td>
                                                <td
                                                    class="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                    $5 <del class="text-gray-400">$9</del>
                                                </td>
                                                <td
                                                    class="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                    1850<small class="text-gray-400">(2000)</small>
                                                </td>
                                                <td
                                                    class="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                    <span
                                                        class="rounded bg-green-100 px-2 py-1 text-[12px] font-medium text-green-700 focus:outline-none dark:text-green-600">
                                                        Stock
                                                    </span>
                                                </td>
                                                <td
                                                    class="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                    <a href="#">
                                                        <span
                                                            class="icon-[mdi--pen] text-lg text-gray-500 dark:text-gray-400"></span>
                                                    </a>
                                                    <a href="#">
                                                        <span
                                                            class="icon-[mdi--delete-outline] text-lg text-red-500 dark:text-red-400"></span>
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--end inner-grid-->
            </div>
        </div>
    </main>
</template>
