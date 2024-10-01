<script setup lang="ts">
    import {
        investedOverview,
        miniChart1,
        miniChart2,
        miniChart3,
        miniChart4,
        walletBalance,
        markerOverview
    } from './data';
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
                            <span class="breadcrumb-item-current"> Analytics </span>
                        </div>
                    </li>
                </ol>
            </div>
        </nav>
        <!-- End:Breadcrumb -->

        <div class="mb-5 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            <div class="card">
                <div class="card-body">
                    <div>
                        <div class="grid grid-cols-12 items-center gap-5">
                            <div class="col-span-6">
                                <span class="text-gray-700 dark:text-zinc-100">My Wallet</span>
                                <h4 class="my-4 text-xl text-gray-800 dark:text-gray-100">
                                    $
                                    <span class="counter-value" data-target="865.2">865.2</span>
                                    k
                                </h4>
                            </div>
                            <div class="col-span-6">
                                <div id="mini-chart1" class="apex-charts mb-2" style="min-height: 50px">
                                    <apexchart :options="miniChart1" :series="miniChart1.series" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <span
                            class="rounded bg-green-50/60 px-1 py-[1px] text-xs font-medium text-green-500 dark:bg-green-500/30">
                            +$20.9k
                        </span>
                        <span class="text-13 ml-1.5 text-gray-700 dark:text-zinc-100"> Since last week </span>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <div>
                        <div class="grid grid-cols-12 items-center gap-5">
                            <div class="col-span-6">
                                <span class="text-gray-700 dark:text-zinc-100"> Number of Trades </span>
                                <h4 class="my-4 text-xl text-gray-800 dark:text-gray-100">
                                    <span class="counter-value" data-target="865.2">6258</span>
                                </h4>
                            </div>
                            <div class="col-span-6">
                                <div id="mini-chart2" class="apex-charts mb-2" style="min-height: 50px">
                                    <apexchart :options="miniChart2" :series="miniChart2.series" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <span
                            class="rounded bg-red-50/60 px-1 py-[1px] text-xs font-medium text-red-500 dark:bg-red-500/30">
                            -29 Trades
                        </span>
                        <span class="text-13 ml-1.5 text-gray-700 dark:text-zinc-100"> Since last week </span>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <div>
                        <div class="grid grid-cols-12 items-center gap-5">
                            <div class="col-span-6">
                                <span class="text-gray-700 dark:text-zinc-100"> Invested Amount </span>
                                <h4 class="my-4 text-xl text-gray-800 dark:text-gray-100">
                                    $
                                    <span class="counter-value" data-target="865.2">4.32</span>
                                    M
                                </h4>
                            </div>
                            <div class="col-span-6">
                                <div id="mini-chart3" class="apex-charts mb-2" style="min-height: 50px">
                                    <apexchart :options="miniChart3" :series="miniChart3.series" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <span
                            class="rounded bg-green-50/60 px-1 py-[1px] text-xs font-medium text-green-500 dark:bg-green-500/30">
                            + $2.8k
                        </span>
                        <span class="text-13 ml-1.5 text-gray-700 dark:text-zinc-100"> Since last week </span>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <div>
                        <div class="grid grid-cols-12 items-center gap-5">
                            <div class="col-span-6">
                                <span class="text-gray-700 dark:text-zinc-100">Profit Ration</span>
                                <h4 class="my-4 text-xl text-gray-800 dark:text-gray-100">
                                    <span class="counter-value" data-target="865.2">12.57%</span>
                                </h4>
                            </div>
                            <div class="col-span-6">
                                <div id="mini-chart4" class="apex-charts mb-2" style="min-height: 50px">
                                    <apexchart :options="miniChart4" :series="miniChart4.series" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <span
                            class="rounded bg-green-50/60 px-1 py-[1px] text-xs font-medium text-green-500 dark:bg-green-500/30"
                            >+2.95%</span
                        >
                        <span class="text-13 ml-1.5 text-gray-700 dark:text-zinc-100">Since last week</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="mb-5 grid grid-cols-1 gap-5 xl:grid-cols-12">
            <div class="col-span-12 xl:col-span-5">
                <div class="card h-full">
                    <div class="card-body">
                        <h6>Wallet Balance</h6>
                        <div class="mb-2 flex flex-wrap items-center">
                            <div class="ml-auto flex gap-1">
                                <button
                                    type="button"
                                    class="text-13 dark:hover:bg-zinc-600/800 btn border-transparent bg-gray-50/50 px-2 py-1 font-medium text-gray-500 hover:bg-gray-50/50 hover:bg-gray-500 hover:text-white focus:bg-gray-500 focus:text-white dark:bg-gray-500/10 dark:text-zinc-100 dark:hover:bg-gray-200 dark:hover:text-gray-800">
                                    ALL
                                </button>
                                <button
                                    type="button"
                                    class="text-13 btn border-transparent bg-primary-50/50 px-2 py-1 font-medium text-primary-500 hover:bg-primary hover:text-white focus:bg-primary focus:text-white dark:bg-primary/20 dark:text-primary-300 dark:hover:bg-primary-100 dark:hover:text-primary-500">
                                    1M
                                </button>
                                <button
                                    type="button"
                                    class="text-13 dark:hover:bg-zinc-600/800 btn border-transparent bg-gray-50/50 px-2 py-1 font-medium text-gray-500 hover:bg-gray-50/50 hover:bg-gray-500 hover:text-white focus:bg-gray-500 focus:text-white dark:bg-gray-500/10 dark:text-zinc-100 dark:hover:bg-gray-200 dark:hover:text-gray-800">
                                    6M
                                </button>
                                <button
                                    type="button"
                                    class="text-13 dark:hover:bg-zinc-600/800 btn border-transparent bg-gray-50/50 px-2 py-1 font-medium text-gray-500 hover:bg-gray-50/50 hover:bg-gray-500 hover:text-white focus:bg-gray-500 focus:text-white dark:bg-gray-500/10 dark:text-zinc-100 dark:hover:bg-gray-200 dark:hover:text-gray-800">
                                    1Y
                                </button>
                            </div>
                        </div>
                        <div class="grid grid-cols-12 justify-items-stretch gap-5">
                            <div class="col-span-6 justify-self-center">
                                <div
                                    id="wallet-balance"
                                    data-colors='["#FEB322", "#009EF7", "#FF4560"]'
                                    class="apex-charts"
                                    style="min-height: 210">
                                    <apexchart :options="walletBalance" :series="walletBalance.series" />
                                </div>
                            </div>
                            <div class="col-span-6">
                                <div class="mt-sm-0 mt-4">
                                    <div>
                                        <p class="mb-2 dark:text-zinc-100">
                                            <span
                                                class="icon-[mdi--circle-medium] mr-2 align-middle text-green-500"></span>
                                            Bitcoin
                                        </p>
                                        <h6 class="font-semibold text-gray-800 dark:text-gray-100">
                                            0.4412 BTC =
                                            <span class="text-14 font-normal text-gray-700 dark:text-zinc-100">
                                                $ 4025.32
                                            </span>
                                        </h6>
                                    </div>
                                    <div class="mt-4 pt-2">
                                        <p class="mb-2 dark:text-zinc-100">
                                            <span
                                                class="icon-[mdi--circle-medium] mr-2 align-middle text-sky-700"></span>
                                            Ethereum
                                        </p>
                                        <h6 class="font-semibold text-gray-800 dark:text-gray-100">
                                            4.5701 ETH =
                                            <span class="text-14 font-normal text-gray-700 dark:text-zinc-100">
                                                $ 1123.64
                                            </span>
                                        </h6>
                                    </div>
                                    <div class="mt-4 pt-2">
                                        <p class="mb-2 dark:text-zinc-100">
                                            <span
                                                class="text-10 icon-[mdi--circle-medium] mr-2 align-middle text-sky-500"></span>
                                            Litecoin
                                        </p>
                                        <h6 class="font-semibold text-gray-800 dark:text-gray-100">
                                            35.3811 LTC =
                                            <span class="text-14 font-normal text-gray-700 dark:text-zinc-100">
                                                $ 2263.09
                                            </span>
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-12 xl:col-span-7">
                <div class="grid h-full grid-cols-12 gap-5">
                    <div class="col-span-12 lg:col-span-8">
                        <div class="card h-full">
                            <div class="card-body">
                                <div class="flex items-center justify-between">
                                    <h6>Invested Overview</h6>
                                    <select class="form-select-sm form-select w-max">
                                        <option value="MAY" selected>May</option>
                                        <option value="AP">April</option>
                                        <option value="MA">March</option>
                                        <option value="FE">February</option>
                                        <option value="JA">January</option>
                                        <option value="DE">December</option>
                                    </select>
                                </div>
                                <div class="grid grid-cols-12 gap-5">
                                    <div class="col-span-6 justify-self-center">
                                        <div
                                            id="invested-overview"
                                            data-colors='["#009EF7", "#34c38f"]'
                                            class="apex-charts"
                                            style="min-height: 195.353px">
                                            <apexchart :options="investedOverview" :series="investedOverview.series" />
                                        </div>
                                    </div>
                                    <div class="col-span-6">
                                        <div class="mt-sm-0 mt-4">
                                            <p class="text-gray-700 dark:text-zinc-100">Invested Amount</p>
                                            <h4 class="text-21 pb-2 pt-1 text-gray-800 dark:text-gray-100">
                                                $ 6134.39
                                            </h4>
                                            <p class="mb-4 text-gray-700 dark:text-zinc-100">
                                                + 0.0012.23 ( 0.2 % )
                                                <i class="mdi mdi-arrow-up ml-1 text-green-500"></i>
                                            </p>
                                            <div class="grid grid-cols-12">
                                                <div class="col-span-6">
                                                    <div>
                                                        <p
                                                            class="text-uppercase font-size-11 mb-1 text-gray-700 dark:text-zinc-100">
                                                            Income
                                                        </p>
                                                        <h5 class="text-gray-800 dark:text-gray-100">$ 2632.46</h5>
                                                    </div>
                                                </div>
                                                <div class="col-span-6">
                                                    <div>
                                                        <p
                                                            class="text-uppercase font-size-11 mb-1 text-gray-700 dark:text-zinc-100">
                                                            Expenses
                                                        </p>
                                                        <h5 class="text-gray-800 dark:text-gray-100">-$ 924.38</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="mt-3">
                                                <a href="#" class="btn btn-sm btn-primary">
                                                    View more
                                                    <div class="icon-[mdi--arrow-right-thin] text-xs">east</div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-span-12 lg:col-span-4">
                        <div class="card relative h-full overflow-hidden bg-primary">
                            <div class="card-body text-center">
                                <div class="absolute right-0 top-0">
                                    <span
                                        class="icon-[mdi--currency-btc] rotate-12 rounded-full bg-primary-200/50 text-7xl text-white/50"></span>
                                </div>
                                <div
                                    class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/30">
                                    <span class="icon-[mdi--currency-btc] text-2xl text-white"></span>
                                </div>
                                <h4 class="lh-base fw-normal text-21 mt-4 text-white">
                                    <span>Bitcoin</span>
                                    <span class="font-normal">News</span>
                                </h4>
                                <p class="text-13 mb-4 mt-2 text-white/50">
                                    Bitcoin prices fell sharply amid the global sell-off in equities. Negative news over
                                    the Bitcoin past week has dampened Bitcoin basics sentiment for bitcoin.
                                </p>
                                <button
                                    type="button"
                                    href="apps-invoices-list.html"
                                    class="btn border-transparent bg-white px-2.5 py-1.5 text-xs shadow shadow-white/20 dark:bg-gray-800 dark:text-gray-100">
                                    View details
                                    <div class="icon-[mdi--arrow-right-thin] text-xs">east</div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="mb-5 grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3">
            <div class="card">
                <div class="nav-tabs border-b-tabs">
                    <div class="card-header flex pb-0">
                        <h5 class="text-15 mr-2 flex-grow text-gray-800 dark:text-gray-100">Trading</h5>
                        <div class="flex-shrink-0">
                            <ul class="d-nav" role="tablist">
                                <li class="mr-2">
                                    <a
                                        class="d-nav-item active"
                                        href="javascript:void(0);"
                                        data-tw-toggle="tab"
                                        data-tw-target="buy-tab"
                                        role="tab">
                                        Buy
                                    </a>
                                </li>
                                <li>
                                    <a
                                        class="d-nav-item"
                                        href="javascript:void(0);"
                                        data-tw-toggle="tab"
                                        data-tw-target="sell-tab"
                                        role="tab">
                                        Sell
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="tab-content">
                            <div id="buy-tab" class="tab-pane block" role="tabpanel">
                                <div class="float-right ms-2">
                                    <h5 class="text-sm text-gray-700 dark:text-zinc-100">
                                        <span
                                            class="text-16 icon-[mdi--wallet-bifold-outline] mr-1 align-middle text-primary-500"></span>
                                        <a href="#!" class="text-reset underline underline-offset-2"> $4335.23 </a>
                                    </h5>
                                </div>
                                <h5 class="mb-4 text-sm text-gray-700 dark:text-gray-100">Buy Coins</h5>
                                <div>
                                    <div class="form-group mb-3">
                                        <label class="mb-2 block font-medium text-gray-700 dark:text-zinc-100">
                                            Payment method :
                                        </label>
                                        <select class="form-select">
                                            <option>Direct Bank Payment</option>
                                            <option>Credit / Debit Card</option>
                                            <option>Paypal</option>
                                            <option>Stripe</option>
                                        </select>
                                    </div>

                                    <div class="mt-4">
                                        <label class="mb-2 block font-medium dark:text-gray-100"> Add Amount : </label>
                                        <div class="mb-3">
                                            <div class="flex">
                                                <div
                                                    class="flex items-center justify-center rounded-l-md border border-r-0 border-[#e0e6ed] bg-[#eee] px-3 font-semibold dark:border-[#17263c] dark:bg-[#1b2e4b]">
                                                    Amount
                                                </div>
                                                <select class="form-select rounded-none" style="max-width: 90px">
                                                    <option value="BT" selected>BTC</option>
                                                    <option value="ET">ETH</option>
                                                    <option value="LT">LTC</option>
                                                </select>
                                                <input
                                                    type="text"
                                                    class="form-input rounded-l-none"
                                                    placeholder="0.00121255" />
                                            </div>
                                        </div>

                                        <div class="mb-3">
                                            <div class="flex">
                                                <div
                                                    class="flex items-center justify-center rounded-l-md border border-r-0 border-[#e0e6ed] bg-[#eee] px-3 font-semibold dark:border-[#17263c] dark:bg-[#1b2e4b]">
                                                    Price
                                                </div>
                                                <input type="text" class="form-input rounded-none" />
                                                <div
                                                    class="flex items-center justify-center rounded-r-md border border-l-0 border-[#e0e6ed] bg-[#eee] px-3 font-semibold dark:border-[#17263c] dark:bg-[#1b2e4b]">
                                                    $
                                                </div>
                                            </div>
                                        </div>

                                        <div class="mb-3">
                                            <div class="flex">
                                                <div
                                                    class="flex items-center justify-center rounded-l-md border border-r-0 border-[#e0e6ed] bg-[#eee] px-3 font-semibold dark:border-[#17263c] dark:bg-[#1b2e4b]">
                                                    Total
                                                </div>
                                                <input
                                                    type="text"
                                                    placeholder="$36,854.25"
                                                    class="form-input rounded-l-none" />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="flex justify-center">
                                        <button type="button" class="btn btn-success">Buy Coin</button>
                                    </div>
                                </div>
                            </div>

                            <div id="sell-tab" class="tab-pane hidden" role="tabpanel">
                                <div class="float-right ms-2">
                                    <h5 class="text-sm text-gray-700 dark:text-zinc-100">
                                        <span
                                            class="text-16 icon-[mdi--wallet-bifold-outline] mr-1 align-middle text-primary-500"></span>
                                        <a href="#!" class="text-reset underline underline-offset-2"> $4335.23 </a>
                                    </h5>
                                </div>
                                <h5 class="mb-4 text-sm text-gray-700 dark:text-gray-100">Sell Coins</h5>

                                <div>
                                    <div class="form-group mb-3">
                                        <label class="mb-2 block font-medium text-gray-700 dark:text-zinc-100">
                                            Wallet ID :
                                        </label>
                                        <input
                                            type="email"
                                            class="w-full rounded border-gray-100 bg-gray-50/20 py-1.5 placeholder:text-sm dark:border-zinc-600 dark:bg-dark dark:text-gray-100 dark:placeholder:text-gray-200"
                                            placeholder="1cvb254ugxvfcd280ki" />
                                    </div>

                                    <div class="mt-4">
                                        <label class="mb-2 block font-medium dark:text-zinc-100"> Add Amount : </label>
                                        <div class="mb-3 flex rounded border border-gray-100 dark:border-zinc-600">
                                            <label
                                                class="border-r border-gray-100 bg-gray-50/20 px-3 py-2 dark:border-zinc-600 dark:bg-dark dark:text-gray-100">
                                                Amount
                                            </label>
                                            <select
                                                class="border-0 bg-gray-50/20 py-1.5 focus:z-40 focus:border-primary-100 focus:ring focus:ring-primary-50/60 dark:border-zinc-600 dark:bg-dark dark:text-gray-100 dark:focus:ring-gray-500/10"
                                                style="max-width: 90px">
                                                <option value="BT" selected>BTC</option>
                                                <option value="ET">ETH</option>
                                                <option value="LT">LTC</option>
                                            </select>
                                            <input
                                                type="text"
                                                class="w-full border-0 bg-gray-50/20 py-1.5 focus:z-40 focus:border-primary-100 focus:ring focus:ring-primary-50/60 dark:bg-dark dark:placeholder:text-gray-200 dark:focus:ring-gray-500/10"
                                                placeholder="0.00121255" />
                                        </div>

                                        <div class="mb-3 flex rounded border border-gray-100 dark:border-zinc-600">
                                            <label
                                                class="border-r border-gray-100 bg-gray-50/20 px-3 py-2 dark:border-zinc-600 dark:bg-dark dark:text-gray-100">
                                                Price
                                            </label>
                                            <input
                                                type="text"
                                                class="w-full border-0 bg-gray-50/20 py-1.5 focus:z-40 focus:border-primary-100 focus:ring focus:ring-primary-50/60 dark:bg-dark dark:placeholder:text-gray-200 dark:focus:ring-gray-500/10"
                                                placeholder="$58,245" />
                                            <label
                                                class="border-l border-gray-100 bg-gray-50/20 px-3 py-2 dark:border-zinc-600 dark:bg-dark dark:text-gray-100">
                                                $
                                            </label>
                                        </div>

                                        <div class="mb-3 flex rounded border border-gray-100 dark:border-zinc-600">
                                            <label
                                                class="border-r border-gray-100 bg-gray-50/20 px-3 py-2 dark:border-zinc-600 dark:bg-dark dark:text-gray-100">
                                                Total
                                            </label>
                                            <input
                                                type="text"
                                                class="ark:border-zinc-600 w-full border-0 bg-gray-50/20 py-1.5 focus:z-40 focus:border-primary-100 focus:ring focus:ring-primary-50/60 dark:bg-dark dark:placeholder:text-gray-200"
                                                placeholder="$36,854.25" />
                                        </div>
                                    </div>

                                    <div class="text-center">
                                        <button
                                            type="button"
                                            class="btn-primary border-transparent bg-red-500 px-6 text-white shadow-md shadow-red-100 hover:bg-red-600 focus:bg-red-600 focus:ring focus:ring-red-50 dark:shadow-zinc-600">
                                            Sell Coin
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="nav-tabs border-b-tabs">
                    <div class="card-header flex pb-0">
                        <h5 class="text-15 mr-2 flex-grow text-gray-800 dark:text-gray-100">Transactions</h5>
                        <div class="flex-shrink-0">
                            <ul class="d-nav" role="tablist">
                                <li class="mr-2">
                                    <a
                                        class="d-nav-item active"
                                        href="javascript:void(0);"
                                        data-tw-toggle="tab"
                                        data-tw-target="all-tab1"
                                        role="tab">
                                        All
                                    </a>
                                </li>
                                <li class="mr-2">
                                    <a
                                        class="d-nav-item"
                                        href="javascript:void(0);"
                                        data-tw-toggle="tab"
                                        data-tw-target="buy-tab1"
                                        role="tab">
                                        Buy
                                    </a>
                                </li>
                                <li>
                                    <a
                                        class="d-nav-item"
                                        href="javascript:void(0);"
                                        data-tw-toggle="tab"
                                        data-tw-target="sell-tab1"
                                        role="tab">
                                        Sell
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="card-body px-0">
                        <div class="tab-content">
                            <div id="all-tab1" class="tab-pane block" role="tabpanel">
                                <SimpleBar class="px-3 max-h-[352px]">
                                    <table class="tw-table w-full">
                                        <tbody>
                                            <tr>
                                                <td class="p-3" style="width: 50px">
                                                    <div class="text-22 text-green-500">
                                                        <span class="icon-[mdi--arrow-up-thin-circle-outline]"></span>
                                                    </div>
                                                </td>

                                                <td class="p-3">
                                                    <div>
                                                        <h5 class="mb-1 text-sm text-gray-700 dark:text-gray-100">
                                                            Buy BTC
                                                        </h5>
                                                        <p class="mb-0 text-xs text-gray-600 dark:text-zinc-100">
                                                            14 Mar, 2021
                                                        </p>
                                                    </div>
                                                </td>

                                                <td class="p-3">
                                                    <div class="text-end">
                                                        <h5 class="mb-0 text-sm text-gray-700 dark:text-gray-100">
                                                            0.016 BTC
                                                        </h5>
                                                        <p class="mb-0 text-xs text-gray-600 dark:text-zinc-100">
                                                            Coin Value
                                                        </p>
                                                    </div>
                                                </td>

                                                <td class="p-3">
                                                    <div class="text-end">
                                                        <h5 class="mb-0 text-sm text-gray-500 dark:text-zinc-100">
                                                            $125.20
                                                        </h5>
                                                        <p class="mb-0 text-xs text-gray-600 dark:text-zinc-100">
                                                            Amount
                                                        </p>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td class="p-3">
                                                    <div class="text-22 text-red-500">
                                                        <span class="icon-[mdi--arrow-up-thin-circle-outline]"></span>
                                                    </div>
                                                </td>

                                                <td class="p-3">
                                                    <div>
                                                        <h5 class="mb-1 text-sm text-gray-700 dark:text-gray-100">
                                                            Sell ETH
                                                        </h5>
                                                        <p class="mb-0 text-xs text-gray-600 dark:text-zinc-100">
                                                            15 Mar, 2021
                                                        </p>
                                                    </div>
                                                </td>

                                                <td class="p-3">
                                                    <div class="text-end">
                                                        <h5 class="mb-0 text-sm text-gray-700 dark:text-gray-100">
                                                            0.56 ETH
                                                        </h5>
                                                        <p class="mb-0 text-xs text-gray-600 dark:text-zinc-100">
                                                            Coin Value
                                                        </p>
                                                    </div>
                                                </td>

                                                <td class="p-3">
                                                    <div class="text-end">
                                                        <h5 class="mb-0 text-sm text-gray-500 dark:text-zinc-100">
                                                            $112.34
                                                        </h5>
                                                        <p class="mb-0 text-xs text-gray-600 dark:text-zinc-100">
                                                            Amount
                                                        </p>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td class="p-3">
                                                    <div class="text-22 text-green-500">
                                                        <span class="icon-[mdi--arrow-up-thin-circle-outline]"></span>
                                                    </div>
                                                </td>

                                                <td class="p-3">
                                                    <div>
                                                        <h5 class="mb-1 text-sm text-gray-700 dark:text-gray-100">
                                                            Buy LTC
                                                        </h5>
                                                        <p class="mb-0 text-xs text-gray-600 dark:text-zinc-100">
                                                            16 Mar, 2021
                                                        </p>
                                                    </div>
                                                </td>

                                                <td class="p-3">
                                                    <div class="text-end">
                                                        <h5 class="mb-0 text-sm text-gray-700 dark:text-gray-100">
                                                            1.88 LTC
                                                        </h5>
                                                        <p class="mb-0 text-xs text-gray-600 dark:text-zinc-100">
                                                            Coin Value
                                                        </p>
                                                    </div>
                                                </td>

                                                <td class="p-3">
                                                    <div class="text-end">
                                                        <h5 class="mb-0 text-sm text-gray-500 dark:text-zinc-100">
                                                            $94.22
                                                        </h5>
                                                        <p class="mb-0 text-xs text-gray-600 dark:text-zinc-100">
                                                            Amount
                                                        </p>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td class="p-3">
                                                    <div class="text-22 text-green-500">
                                                        <span class="icon-[mdi--arrow-up-thin-circle-outline]"></span>
                                                    </div>
                                                </td>

                                                <td class="p-3">
                                                    <div>
                                                        <h5 class="mb-1 text-sm text-gray-700 dark:text-gray-100">
                                                            Buy ETH
                                                        </h5>
                                                        <p class="mb-0 text-xs text-gray-600 dark:text-zinc-100">
                                                            17 Mar, 2021
                                                        </p>
                                                    </div>
                                                </td>

                                                <td class="p-3">
                                                    <div class="text-end">
                                                        <h5 class="mb-0 text-sm text-gray-700 dark:text-gray-100">
                                                            0.42 ETH
                                                        </h5>
                                                        <p class="mb-0 text-xs text-gray-600 dark:text-zinc-100">
                                                            Coin Value
                                                        </p>
                                                    </div>
                                                </td>

                                                <td class="p-3">
                                                    <div class="text-end">
                                                        <h5 class="mb-0 text-sm text-gray-500 dark:text-zinc-100">
                                                            $84.32
                                                        </h5>
                                                        <p class="mb-0 text-xs text-gray-600 dark:text-zinc-100">
                                                            Amount
                                                        </p>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td class="p-3">
                                                    <div class="text-22 text-red-500">
                                                        <span class="icon-[mdi--arrow-up-thin-circle-outline]"></span>
                                                    </div>
                                                </td>

                                                <td class="p-3">
                                                    <div>
                                                        <h5 class="mb-1 text-sm text-gray-700 dark:text-gray-100">
                                                            Sell BTC
                                                        </h5>
                                                        <p class="mb-0 text-xs text-gray-600 dark:text-zinc-100">
                                                            18 Mar, 2021
                                                        </p>
                                                    </div>
                                                </td>

                                                <td class="p-3">
                                                    <div class="text-end">
                                                        <h5 class="mb-0 text-sm text-gray-700 dark:text-gray-100">
                                                            0.018 BTC
                                                        </h5>
                                                        <p class="mb-0 text-xs text-gray-600 dark:text-zinc-100">
                                                            Coin Value
                                                        </p>
                                                    </div>
                                                </td>

                                                <td class="p-3">
                                                    <div class="text-end">
                                                        <h5 class="mb-0 text-sm text-gray-500 dark:text-zinc-100">
                                                            $145.80
                                                        </h5>
                                                        <p class="mb-0 text-xs text-gray-600 dark:text-zinc-100">
                                                            Amount
                                                        </p>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td class="p-3">
                                                    <div class="text-22 text-green-500">
                                                        <span class="icon-[mdi--arrow-up-thin-circle-outline]"></span>
                                                    </div>
                                                </td>

                                                <td class="p-3">
                                                    <div>
                                                        <h5 class="mb-1 text-sm text-gray-700 dark:text-gray-100">
                                                            Buy BTC
                                                        </h5>
                                                        <p class="mb-0 text-xs text-gray-600 dark:text-zinc-100">
                                                            14 Mar, 2021
                                                        </p>
                                                    </div>
                                                </td>

                                                <td class="p-3">
                                                    <div class="text-end">
                                                        <h5 class="mb-0 text-sm text-gray-700 dark:text-gray-100">
                                                            0.016 BTC
                                                        </h5>
                                                        <p class="mb-0 text-xs text-gray-600 dark:text-zinc-100">
                                                            Coin Value
                                                        </p>
                                                    </div>
                                                </td>

                                                <td class="p-3">
                                                    <div class="text-end">
                                                        <h5 class="mb-0 text-sm text-gray-500 dark:text-zinc-100">
                                                            $125.20
                                                        </h5>
                                                        <p class="mb-0 text-xs text-gray-600 dark:text-zinc-100">
                                                            Amount
                                                        </p>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td class="p-3">
                                                    <div class="text-22 text-red-500">
                                                        <span class="icon-[mdi--arrow-up-thin-circle-outline]"></span>
                                                    </div>
                                                </td>

                                                <td class="p-3">
                                                    <div>
                                                        <h5 class="mb-1 text-sm text-gray-700 dark:text-gray-100">
                                                            Sell ETH
                                                        </h5>
                                                        <p class="mb-0 text-xs text-gray-600 dark:text-zinc-100">
                                                            15 Mar, 2021
                                                        </p>
                                                    </div>
                                                </td>

                                                <td class="p-3">
                                                    <div class="text-end">
                                                        <h5 class="mb-0 text-sm text-gray-700 dark:text-gray-100">
                                                            0.56 ETH
                                                        </h5>
                                                        <p class="mb-0 text-xs text-gray-600 dark:text-zinc-100">
                                                            Coin Value
                                                        </p>
                                                    </div>
                                                </td>

                                                <td class="p-3">
                                                    <div class="text-end">
                                                        <h5 class="mb-0 text-sm text-gray-500 dark:text-zinc-100">
                                                            $112.34
                                                        </h5>
                                                        <p class="mb-0 text-xs text-gray-600 dark:text-zinc-100">
                                                            Amount
                                                        </p>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </SimpleBar>
                            </div>

                            <div id="buy-tab1" class="tab-pane hidden" role="tabpanel">
                                <SimpleBar class="px-3 max-h-[352px]">
                                    <table class="tw-table w-full">
                                        <tbody>
                                            <tr>
                                                <td class="p-3" style="width: 50px">
                                                    <div class="text-22 text-green-500">
                                                        <span class="icon-[mdi--arrow-up-thin-circle-outline]"></span>
                                                    </div>
                                                </td>

                                                <td class="p-3">
                                                    <div>
                                                        <h5 class="mb-1 text-sm text-gray-700 dark:text-gray-100">
                                                            Buy BTC
                                                        </h5>
                                                        <p class="mb-0 text-xs text-gray-600 dark:text-zinc-100">
                                                            14 Mar, 2021
                                                        </p>
                                                    </div>
                                                </td>

                                                <td class="p-3">
                                                    <div class="text-end">
                                                        <h5 class="mb-0 text-sm text-gray-700 dark:text-gray-100">
                                                            0.016 BTC
                                                        </h5>
                                                        <p class="mb-0 text-xs text-gray-600 dark:text-zinc-100">
                                                            Coin Value
                                                        </p>
                                                    </div>
                                                </td>

                                                <td class="p-3">
                                                    <div class="text-end">
                                                        <h5 class="mb-0 text-sm text-gray-500 dark:text-zinc-100">
                                                            $125.20
                                                        </h5>
                                                        <p class="mb-0 text-xs text-gray-600 dark:text-zinc-100">
                                                            Amount
                                                        </p>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td class="p-3">
                                                    <div class="text-22 text-green-500">
                                                        <span class="icon-[mdi--arrow-up-thin-circle-outline]"></span>
                                                    </div>
                                                </td>

                                                <td class="p-3">
                                                    <div>
                                                        <h5 class="mb-1 text-sm text-gray-700 dark:text-gray-100">
                                                            Buy BTC
                                                        </h5>
                                                        <p class="mb-0 text-xs text-gray-600 dark:text-zinc-100">
                                                            18 Mar, 2021
                                                        </p>
                                                    </div>
                                                </td>

                                                <td class="p-3">
                                                    <div class="text-end">
                                                        <h5 class="mb-0 text-sm text-gray-700 dark:text-gray-100">
                                                            0.018 BTC
                                                        </h5>
                                                        <p class="mb-0 text-xs text-gray-600 dark:text-zinc-100">
                                                            Coin Value
                                                        </p>
                                                    </div>
                                                </td>

                                                <td class="p-3">
                                                    <div class="text-end">
                                                        <h5 class="mb-0 text-sm text-gray-500 dark:text-zinc-100">
                                                            $145.80
                                                        </h5>
                                                        <p class="mb-0 text-xs text-gray-600 dark:text-zinc-100">
                                                            Amount
                                                        </p>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td class="p-3">
                                                    <div class="text-22 text-green-500">
                                                        <span class="icon-[mdi--arrow-up-thin-circle-outline]"></span>
                                                    </div>
                                                </td>

                                                <td class="p-3">
                                                    <div>
                                                        <h5 class="mb-1 text-sm text-gray-700 dark:text-gray-100">
                                                            Buy LTC
                                                        </h5>
                                                        <p class="mb-0 text-xs text-gray-600 dark:text-zinc-100">
                                                            16 Mar, 2021
                                                        </p>
                                                    </div>
                                                </td>

                                                <td class="p-3">
                                                    <div class="text-end">
                                                        <h5 class="mb-0 text-sm text-gray-700 dark:text-gray-100">
                                                            1.88 LTC
                                                        </h5>
                                                        <p class="mb-0 text-xs text-gray-600 dark:text-zinc-100">
                                                            Coin Value
                                                        </p>
                                                    </div>
                                                </td>

                                                <td class="p-3">
                                                    <div class="text-end">
                                                        <h5 class="mb-0 text-sm text-gray-500 dark:text-zinc-100">
                                                            $94.22
                                                        </h5>
                                                        <p class="mb-0 text-xs text-gray-600 dark:text-zinc-100">
                                                            Amount
                                                        </p>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td class="p-3">
                                                    <div class="text-22 text-green-500">
                                                        <span class="icon-[mdi--arrow-up-thin-circle-outline]"></span>
                                                    </div>
                                                </td>

                                                <td class="p-3">
                                                    <div>
                                                        <h5 class="mb-1 text-sm text-gray-700 dark:text-gray-100">
                                                            Buy ETH
                                                        </h5>
                                                        <p class="mb-0 text-xs text-gray-600 dark:text-zinc-100">
                                                            15 Mar, 2021
                                                        </p>
                                                    </div>
                                                </td>

                                                <td class="p-3">
                                                    <div class="text-end">
                                                        <h5 class="mb-0 text-sm text-gray-700 dark:text-gray-100">
                                                            0.56 ETH
                                                        </h5>
                                                        <p class="mb-0 text-xs text-gray-600 dark:text-zinc-100">
                                                            Coin Value
                                                        </p>
                                                    </div>
                                                </td>

                                                <td class="p-3">
                                                    <div class="text-end">
                                                        <h5 class="mb-0 text-sm text-gray-500 dark:text-zinc-100">
                                                            $112.34
                                                        </h5>
                                                        <p class="mb-0 text-xs text-gray-600 dark:text-zinc-100">
                                                            Amount
                                                        </p>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td class="p-3">
                                                    <div class="text-22 text-green-500">
                                                        <span class="icon-[mdi--arrow-up-thin-circle-outline]"></span>
                                                    </div>
                                                </td>

                                                <td class="p-3">
                                                    <div>
                                                        <h5 class="mb-1 text-sm text-gray-700 dark:text-gray-100">
                                                            Buy ETH
                                                        </h5>
                                                        <p class="mb-0 text-xs text-gray-600 dark:text-zinc-100">
                                                            17 Mar, 2021
                                                        </p>
                                                    </div>
                                                </td>

                                                <td class="p-3">
                                                    <div class="text-end">
                                                        <h5 class="mb-0 text-sm text-gray-700 dark:text-gray-100">
                                                            0.42 ETH
                                                        </h5>
                                                        <p class="mb-0 text-xs text-gray-600 dark:text-zinc-100">
                                                            Coin Value
                                                        </p>
                                                    </div>
                                                </td>

                                                <td class="p-3">
                                                    <div class="text-end">
                                                        <h5 class="mb-0 text-sm text-gray-500 dark:text-zinc-100">
                                                            $84.32
                                                        </h5>
                                                        <p class="mb-0 text-xs text-gray-600 dark:text-zinc-100">
                                                            Amount
                                                        </p>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td class="p-3">
                                                    <div class="text-22 text-green-500">
                                                        <span class="icon-[mdi--arrow-up-thin-circle-outline]"></span>
                                                    </div>
                                                </td>

                                                <td class="p-3">
                                                    <div>
                                                        <h5 class="mb-1 text-sm text-gray-700 dark:text-gray-100">
                                                            Buy ETH
                                                        </h5>
                                                        <p class="mb-0 text-xs text-gray-600 dark:text-zinc-100">
                                                            15 Mar, 2021
                                                        </p>
                                                    </div>
                                                </td>

                                                <td class="p-3">
                                                    <div class="text-end">
                                                        <h5 class="mb-0 text-sm text-gray-700 dark:text-gray-100">
                                                            0.56 ETH
                                                        </h5>
                                                        <p class="mb-0 text-xs text-gray-600 dark:text-zinc-100">
                                                            Coin Value
                                                        </p>
                                                    </div>
                                                </td>

                                                <td class="p-3">
                                                    <div class="text-end">
                                                        <h5 class="mb-0 text-sm text-gray-500 dark:text-zinc-100">
                                                            $112.34
                                                        </h5>
                                                        <p class="mb-0 text-xs text-gray-600 dark:text-zinc-100">
                                                            Amount
                                                        </p>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td class="p-3">
                                                    <div class="text-22 text-green-500">
                                                        <span class="icon-[mdi--arrow-up-thin-circle-outline]"></span>
                                                    </div>
                                                </td>

                                                <td class="p-3">
                                                    <div>
                                                        <h5 class="mb-1 text-sm text-gray-700 dark:text-gray-100">
                                                            Buy BTC
                                                        </h5>
                                                        <p class="mb-0 text-xs text-gray-600 dark:text-zinc-100">
                                                            14 Mar, 2021
                                                        </p>
                                                    </div>
                                                </td>

                                                <td class="p-3">
                                                    <div class="text-end">
                                                        <h5 class="mb-0 text-sm text-gray-700 dark:text-gray-100">
                                                            0.016 BTC
                                                        </h5>
                                                        <p class="mb-0 text-xs text-gray-600 dark:text-zinc-100">
                                                            Coin Value
                                                        </p>
                                                    </div>
                                                </td>

                                                <td class="p-3">
                                                    <div class="text-end">
                                                        <h5 class="mb-0 text-sm text-gray-500 dark:text-zinc-100">
                                                            $125.20
                                                        </h5>
                                                        <p class="mb-0 text-xs text-gray-600 dark:text-zinc-100">
                                                            Amount
                                                        </p>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </SimpleBar>
                            </div>

                            <div id="sell-tab1" class="tab-pane hidden" role="tabpanel">
                                <SimpleBar class="px-3 max-h-[352px]">
                                    <table class="tw-table w-full">
                                        <tbody>
                                            <tr>
                                                <td class="p-3" style="width: 50px">
                                                    <div class="text-22 text-red-500">
                                                        <span class="icon-[mdi--arrow-up-thin-circle-outline]"></span>
                                                    </div>
                                                </td>

                                                <td class="p-3">
                                                    <div>
                                                        <h5 class="mb-1 text-sm text-gray-700 dark:text-gray-100">
                                                            Sell ETH
                                                        </h5>
                                                        <p class="mb-0 text-xs text-gray-600 dark:text-zinc-100">
                                                            14 Mar, 2021
                                                        </p>
                                                    </div>
                                                </td>

                                                <td class="p-3">
                                                    <div class="text-end">
                                                        <h5 class="mb-0 text-sm text-gray-700 dark:text-gray-100">
                                                            0.56 ETH
                                                        </h5>
                                                        <p class="mb-0 text-xs text-gray-600 dark:text-zinc-100">
                                                            Coin Value
                                                        </p>
                                                    </div>
                                                </td>

                                                <td class="p-3">
                                                    <div class="text-end">
                                                        <h5 class="mb-0 text-sm text-gray-500 dark:text-zinc-100">
                                                            $112.34
                                                        </h5>
                                                        <p class="mb-0 text-xs text-gray-600 dark:text-zinc-100">
                                                            Amount
                                                        </p>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td class="p-3">
                                                    <div class="text-22 text-red-500">
                                                        <span class="icon-[mdi--arrow-up-thin-circle-outline]"></span>
                                                    </div>
                                                </td>

                                                <td class="p-3">
                                                    <div>
                                                        <h5 class="mb-1 text-sm text-gray-700 dark:text-gray-100">
                                                            Sell BTC
                                                        </h5>
                                                        <p class="mb-0 text-xs text-gray-600 dark:text-zinc-100">
                                                            18 Mar, 2021
                                                        </p>
                                                    </div>
                                                </td>

                                                <td class="p-3">
                                                    <div class="text-end">
                                                        <h5 class="mb-0 text-sm text-gray-700 dark:text-gray-100">
                                                            0.016 BTC
                                                        </h5>
                                                        <p class="mb-0 text-xs text-gray-600 dark:text-zinc-100">
                                                            Coin Value
                                                        </p>
                                                    </div>
                                                </td>

                                                <td class="p-3">
                                                    <div class="text-end">
                                                        <h5 class="mb-0 text-sm text-gray-500 dark:text-zinc-100">
                                                            $125.20
                                                        </h5>
                                                        <p class="mb-0 text-xs text-gray-600 dark:text-zinc-100">
                                                            Amount
                                                        </p>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td class="p-3">
                                                    <div class="text-22 text-red-500">
                                                        <span class="icon-[mdi--arrow-up-thin-circle-outline]"></span>
                                                    </div>
                                                </td>

                                                <td class="p-3">
                                                    <div>
                                                        <h5 class="mb-1 text-sm text-gray-700 dark:text-gray-100">
                                                            Sell BTC
                                                        </h5>
                                                        <p class="mb-0 text-xs text-gray-600 dark:text-zinc-100">
                                                            16 Mar, 2021
                                                        </p>
                                                    </div>
                                                </td>

                                                <td class="p-3">
                                                    <div class="text-end">
                                                        <h5 class="mb-0 text-sm text-gray-700 dark:text-gray-100">
                                                            0.018 BTC
                                                        </h5>
                                                        <p class="mb-0 text-xs text-gray-600 dark:text-zinc-100">
                                                            Coin Value
                                                        </p>
                                                    </div>
                                                </td>

                                                <td class="p-3">
                                                    <div class="text-end">
                                                        <h5 class="mb-0 text-sm text-gray-500 dark:text-zinc-100">
                                                            $145.80
                                                        </h5>
                                                        <p class="mb-0 text-xs text-gray-600 dark:text-zinc-100">
                                                            Amount
                                                        </p>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td class="p-3">
                                                    <div class="text-22 text-red-500">
                                                        <span class="icon-[mdi--arrow-up-thin-circle-outline]"></span>
                                                    </div>
                                                </td>

                                                <td class="p-3">
                                                    <div>
                                                        <h5 class="mb-1 text-sm text-gray-700 dark:text-gray-100">
                                                            Sell ETH
                                                        </h5>
                                                        <p class="mb-0 text-xs text-gray-600 dark:text-zinc-100">
                                                            15 Mar, 2021
                                                        </p>
                                                    </div>
                                                </td>

                                                <td class="p-3">
                                                    <div class="text-end">
                                                        <h5 class="mb-0 text-sm text-gray-700 dark:text-gray-100">
                                                            0.56 ETH
                                                        </h5>
                                                        <p class="mb-0 text-xs text-gray-600 dark:text-zinc-100">
                                                            Coin Value
                                                        </p>
                                                    </div>
                                                </td>

                                                <td class="p-3">
                                                    <div class="text-end">
                                                        <h5 class="mb-0 text-sm text-gray-500 dark:text-zinc-100">
                                                            $112.34
                                                        </h5>
                                                        <p class="mb-0 text-xs text-gray-600 dark:text-zinc-100">
                                                            Amount
                                                        </p>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td class="p-3">
                                                    <div class="text-22 text-red-500">
                                                        <span class="icon-[mdi--arrow-up-thin-circle-outline]"></span>
                                                    </div>
                                                </td>

                                                <td class="p-3">
                                                    <div>
                                                        <h5 class="mb-1 text-sm text-gray-700 dark:text-gray-100">
                                                            Sell LTC
                                                        </h5>
                                                        <p class="mb-0 text-xs text-gray-600 dark:text-zinc-100">
                                                            17 Mar, 2021
                                                        </p>
                                                    </div>
                                                </td>

                                                <td class="p-3">
                                                    <div class="text-end">
                                                        <h5 class="mb-0 text-sm text-gray-700 dark:text-gray-100">
                                                            1.88 LTC
                                                        </h5>
                                                        <p class="mb-0 text-xs text-gray-600 dark:text-zinc-100">
                                                            Coin Value
                                                        </p>
                                                    </div>
                                                </td>

                                                <td class="p-3">
                                                    <div class="text-end">
                                                        <h5 class="mb-0 text-sm text-gray-500 dark:text-zinc-100">
                                                            $94.22
                                                        </h5>
                                                        <p class="mb-0 text-xs text-gray-600 dark:text-zinc-100">
                                                            Amount
                                                        </p>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td class="p-3">
                                                    <div class="text-22 text-red-500">
                                                        <span class="icon-[mdi--arrow-up-thin-circle-outline]"></span>
                                                    </div>
                                                </td>

                                                <td class="p-3">
                                                    <div>
                                                        <h5 class="mb-1 text-sm text-gray-700 dark:text-gray-100">
                                                            Sell ETH
                                                        </h5>
                                                        <p class="mb-0 text-xs text-gray-600 dark:text-zinc-100">
                                                            15 Mar, 2021
                                                        </p>
                                                    </div>
                                                </td>

                                                <td class="p-3">
                                                    <div class="text-end">
                                                        <h5 class="mb-0 text-sm text-gray-700 dark:text-gray-100">
                                                            0.42 ETH
                                                        </h5>
                                                        <p class="mb-0 text-xs text-gray-600 dark:text-zinc-100">
                                                            Coin Value
                                                        </p>
                                                    </div>
                                                </td>

                                                <td class="p-3">
                                                    <div class="text-end">
                                                        <h5 class="mb-0 text-sm text-gray-500 dark:text-zinc-100">
                                                            $84.32
                                                        </h5>
                                                        <p class="mb-0 text-xs text-gray-600 dark:text-zinc-100">
                                                            Amount
                                                        </p>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td class="p-3">
                                                    <div class="text-22 text-red-500">
                                                        <span class="icon-[mdi--arrow-up-thin-circle-outline]"></span>
                                                    </div>
                                                </td>

                                                <td class="p-3">
                                                    <div>
                                                        <h5 class="mb-1 text-sm text-gray-700 dark:text-gray-100">
                                                            Sell BTC
                                                        </h5>
                                                        <p class="mb-0 text-xs text-gray-600 dark:text-zinc-100">
                                                            14 Mar, 2021
                                                        </p>
                                                    </div>
                                                </td>

                                                <td class="p-3">
                                                    <div class="text-end">
                                                        <h5 class="mb-0 text-sm text-gray-700 dark:text-gray-100">
                                                            0.016 BTC
                                                        </h5>
                                                        <p class="mb-0 text-xs text-gray-600 dark:text-zinc-100">
                                                            Coin Value
                                                        </p>
                                                    </div>
                                                </td>

                                                <td class="p-3">
                                                    <div class="text-end">
                                                        <h5 class="mb-0 text-sm text-gray-500 dark:text-zinc-100">
                                                            $125.20
                                                        </h5>
                                                        <p class="mb-0 text-xs text-gray-600 dark:text-zinc-100">
                                                            Amount
                                                        </p>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </SimpleBar>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header pb-0">
                    <div class="mb-2 flex flex-wrap items-center">
                        <h5 class="text-15 mr-2 text-gray-800 dark:text-gray-100">Recent Activity</h5>
                        <div class="ml-auto">
                            <select class="form-select-sm form-select">
                                <option value="Today" selected>Today</option>
                                <option value="Yesterday">Yesterday</option>
                                <option value="Last Week">Last Week</option>
                                <option value="Last Month">Last Month</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="card-body px-0">
                    <SimpleBar class="px-3 max-h-[352px]">
                        <ul class="overflow-hidden">
                            <li class="relative flex pb-6 pl-12">
                                <div class="absolute left-0 z-40">
                                    <div class="h-10 w-10 rounded-full bg-yellow-50 text-center">
                                        <span
                                            class="icon-[mdi--currency-btc] text-2xl leading-relaxed text-yellow-500"></span>
                                    </div>
                                </div>
                                <div>
                                    <div class="flex">
                                        <div class="ml-2 mr-4 w-72 grow overflow-hidden">
                                            <h5 class="mb-1 text-sm text-gray-700 dark:text-gray-100">
                                                24/05/2021, 18:24:56
                                            </h5>
                                            <p
                                                class="text-13 overflow-hidden text-ellipsis whitespace-nowrap text-gray-500 dark:text-zinc-100">
                                                0xb77ad0099e21d4fca87fa4ca92dda1a40af9e05d205e53f38bf026196fa2e431
                                            </p>
                                        </div>
                                        <div class="mr-1 w-20 shrink-0 text-end">
                                            <h6 class="mb-1 text-gray-700 dark:text-gray-100">+0.5 BTC</h6>
                                            <div class="text-13 dark:text-zinc-100">$178.53</div>
                                        </div>

                                        <div class="shrink-0 text-end">
                                            <div class="dropdown relative">
                                                <a
                                                    href="#!"
                                                    class="dropdown-toggle btn border-0 py-2.5 text-xl text-gray-700 dark:text-gray-100"
                                                    id="dropdownButton12"
                                                    data-bs-toggle="dropdown">
                                                    <span class="icon-[mdi--dots-vertical] text-xl"> </span>
                                                </a>

                                                <ul
                                                    class="dropdown-menu absolute z-50 float-left hidden min-w-max list-none rounded-lg border-none bg-white bg-clip-padding py-2 text-left shadow-lg dark:bg-dark"
                                                    aria-labelledby="dropdownButton12">
                                                    <li>
                                                        <a
                                                            class="dropdown-item block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-50/50 dark:text-gray-100 dark:hover:bg-zinc-600/80"
                                                            href="#">
                                                            Action
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            class="dropdown-item block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-50/50 dark:text-gray-100 dark:hover:bg-zinc-600/80"
                                                            href="#">
                                                            Another action
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            class="dropdown-item block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-50/50 dark:text-gray-100 dark:hover:bg-zinc-600/80"
                                                            href="#">
                                                            Something else here
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="after:contant-[] after:absolute after:left-5 after:z-0 after:h-20 after:border-l-2 after:border-dashed after:border-gray-100 dark:border-zinc-600"></div>
                            </li>

                            <li class="relative flex pb-6 pl-12">
                                <div class="absolute left-0 z-40">
                                    <div class="h-10 w-10 rounded-full bg-primary-50 text-center">
                                        <span
                                            class="icon-[mdi--currency-try] text-2xl leading-relaxed text-primary-500"></span>
                                    </div>
                                </div>
                                <div>
                                    <div class="flex">
                                        <div class="ml-2 mr-4 w-72 grow overflow-hidden">
                                            <h5 class="mb-1 text-sm text-gray-700 dark:text-gray-100">
                                                24/05/2021, 18:24:56
                                            </h5>
                                            <p
                                                class="text-13 overflow-hidden text-ellipsis whitespace-nowrap text-gray-500 dark:text-zinc-100">
                                                0xb77ad0099e21d4fca87fa4ca92dda1a40af9e05d205e53f38bf026196fa2e431
                                            </p>
                                        </div>
                                        <div class="mr-1 w-20 shrink-0 text-end">
                                            <h6 class="mb-1 text-gray-700 dark:text-gray-100">-20.5 ETH</h6>
                                            <div class="text-13 dark:text-zinc-100">$3541.45</div>
                                        </div>

                                        <div class="shrink-0 text-end">
                                            <div class="dropdown relative">
                                                <a
                                                    href="#!"
                                                    class="dropdown-toggle btn border-0 py-2.5 text-xl text-gray-700 dark:text-gray-100"
                                                    id="dropdownMenu16"
                                                    data-bs-toggle="dropdown">
                                                    <span class="icon-[mdi--dots-vertical] text-xl"> </span>
                                                </a>

                                                <ul
                                                    class="dropdown-menu absolute z-50 float-left hidden min-w-max list-none rounded-lg border-none bg-white bg-clip-padding py-2 text-left shadow-lg dark:bg-dark"
                                                    aria-labelledby="dropdownMenu16">
                                                    <li>
                                                        <a
                                                            class="dropdown-item block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-50/50 dark:text-gray-100 dark:hover:bg-zinc-600/80"
                                                            href="#">
                                                            Action
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            class="dropdown-item block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-50/50 dark:text-gray-100 dark:hover:bg-zinc-600/80"
                                                            href="#">
                                                            Another action
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            class="dropdown-item block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-50/50 dark:text-gray-100 dark:hover:bg-zinc-600/80"
                                                            href="#">
                                                            Something else here
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="after:contant-[] after:absolute after:left-5 after:z-0 after:h-20 after:border-l-2 after:border-dashed after:border-gray-100 dark:border-zinc-600"></div>
                            </li>

                            <li class="relative flex pb-6 pl-12">
                                <div class="absolute left-0 z-40">
                                    <div class="h-10 w-10 rounded-full bg-yellow-50 text-center">
                                        <span
                                            class="icon-[mdi--currency-btc] text-2xl leading-relaxed text-yellow-500"></span>
                                    </div>
                                </div>
                                <div>
                                    <div class="flex">
                                        <div class="ml-2 mr-4 w-72 grow overflow-hidden">
                                            <h5 class="mb-1 text-sm text-gray-700 dark:text-gray-100">
                                                24/05/2021, 18:24:56
                                            </h5>
                                            <p
                                                class="text-13 overflow-hidden text-ellipsis whitespace-nowrap text-gray-500 dark:text-zinc-100">
                                                0xb77ad0099e21d4fca87fa4ca92dda1a40af9e05d205e53f38bf026196fa2e431
                                            </p>
                                        </div>
                                        <div class="mr-1 w-20 shrink-0 text-end">
                                            <h6 class="mb-1 text-gray-700 dark:text-gray-100">+0.5 BTC</h6>
                                            <div class="text-13 dark:text-zinc-100">$5791.45</div>
                                        </div>

                                        <div class="shrink-0 text-end">
                                            <div class="dropdown relative">
                                                <a
                                                    href="#!"
                                                    class="dropdown-toggle btn border-0 py-2.5 text-xl text-gray-700 dark:text-gray-100"
                                                    id="dropdownMenu14"
                                                    data-bs-toggle="dropdown">
                                                    <span class="icon-[mdi--dots-vertical] text-xl"> </span>
                                                </a>

                                                <ul
                                                    class="dropdown-menu absolute z-50 float-left hidden min-w-max list-none rounded-lg border-none bg-white bg-clip-padding py-2 text-left shadow-lg dark:bg-dark"
                                                    aria-labelledby="dropdownMenu14">
                                                    <li>
                                                        <a
                                                            class="dropdown-item block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-50/50 dark:text-gray-100 dark:hover:bg-zinc-600/80"
                                                            href="#">
                                                            Action
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            class="dropdown-item block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-50/50 dark:text-gray-100 dark:hover:bg-zinc-600/80"
                                                            href="#">
                                                            Another action
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            class="dropdown-item block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-50/50 dark:text-gray-100 dark:hover:bg-zinc-600/80"
                                                            href="#">
                                                            Something else here
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="after:contant-[] after:absolute after:left-5 after:z-0 after:h-20 after:border-l-2 after:border-dashed after:border-gray-100 dark:border-zinc-600"></div>
                            </li>

                            <li class="relative flex pb-6 pl-12">
                                <div class="absolute left-0 z-40">
                                    <div class="h-10 w-10 rounded-full bg-primary-100 text-center">
                                        <span
                                            class="icon-[mdi--currency-cny] text-2xl leading-relaxed text-primary-500"></span>
                                    </div>
                                </div>
                                <div>
                                    <div class="flex">
                                        <div class="ml-2 mr-4 w-72 grow overflow-hidden">
                                            <h5 class="mb-1 text-sm text-gray-700 dark:text-gray-100">
                                                24/05/2021, 18:24:56
                                            </h5>
                                            <p
                                                class="text-13 overflow-hidden text-ellipsis whitespace-nowrap text-gray-500 dark:text-zinc-100">
                                                0xb77ad0099e21d4fca87fa4ca92dda1a40af9e05d205e53f38bf026196fa2e431
                                            </p>
                                        </div>
                                        <div class="mr-1 w-20 shrink-0 text-end">
                                            <h6 class="mb-1 text-gray-700 dark:text-gray-100">-1.5 LTC</h6>
                                            <div class="text-13 dark:text-zinc-100">$5791.45</div>
                                        </div>

                                        <div class="shrink-0 text-end">
                                            <div class="dropdown relative">
                                                <a
                                                    href="#!"
                                                    class="dropdown-toggle btn border-0 py-2.5 text-xl text-gray-700 dark:text-gray-100"
                                                    id="dropdownMenu13"
                                                    data-bs-toggle="dropdown">
                                                    <span class="icon-[mdi--dots-vertical] text-xl"> </span>
                                                </a>

                                                <ul
                                                    class="dropdown-menu absolute z-50 float-left hidden min-w-max list-none rounded-lg border-none bg-white bg-clip-padding py-2 text-left shadow-lg dark:bg-dark"
                                                    aria-labelledby="dropdownMenu13">
                                                    <li>
                                                        <a
                                                            class="dropdown-item block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-50/50 dark:text-gray-100 dark:hover:bg-zinc-600/80"
                                                            href="#">
                                                            Action
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            class="dropdown-item block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-50/50 dark:text-gray-100 dark:hover:bg-zinc-600/80"
                                                            href="#">
                                                            Another action
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            class="dropdown-item block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-50/50 dark:text-gray-100 dark:hover:bg-zinc-600/80"
                                                            href="#">
                                                            Something else here
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="after:contant-[] after:absolute after:left-5 after:z-0 after:h-20 after:border-l-2 after:border-dashed after:border-gray-100 dark:border-zinc-600"></div>
                            </li>

                            <li class="relative flex pb-6 pl-12">
                                <div class="absolute left-0 z-40">
                                    <div class="h-10 w-10 rounded-full bg-yellow-50 text-center">
                                        <span
                                            class="icon-[mdi--currency-rub] text-2xl leading-relaxed text-primary"></span>
                                    </div>
                                </div>
                                <div>
                                    <div class="flex">
                                        <div class="ml-2 mr-4 w-72 grow overflow-hidden">
                                            <h5 class="mb-1 text-sm text-gray-700 dark:text-gray-100">
                                                24/05/2021, 18:24:56
                                            </h5>
                                            <p
                                                class="text-13 overflow-hidden text-ellipsis whitespace-nowrap text-gray-500 dark:text-zinc-100">
                                                0xb77ad0099e21d4fca87fa4ca92dda1a40af9e05d205e53f38bf026196fa2e431
                                            </p>
                                        </div>
                                        <div class="mr-1 w-20 shrink-0 text-end">
                                            <h6 class="mb-1 text-gray-700 dark:text-gray-100">+0.5 BTC</h6>
                                            <div class="text-13 dark:text-zinc-100">$5791.45</div>
                                        </div>

                                        <div class="shrink-0 text-end">
                                            <div class="dropdown relative">
                                                <a
                                                    href="#!"
                                                    class="dropdown-toggle btn border-0 py-2.5 text-xl text-gray-700 dark:text-gray-100"
                                                    id="dropdownMenu12"
                                                    data-bs-toggle="dropdown">
                                                    <span class="icon-[mdi--dots-vertical] text-xl"> </span>
                                                </a>

                                                <ul
                                                    class="dropdown-menu absolute z-50 float-left hidden min-w-max list-none rounded-lg border-none bg-white bg-clip-padding py-2 text-left shadow-lg dark:bg-dark"
                                                    aria-labelledby="dropdownMenu12">
                                                    <li>
                                                        <a
                                                            class="dropdown-item block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-50/50 dark:text-gray-100 dark:hover:bg-zinc-600/80"
                                                            href="#">
                                                            Action
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            class="dropdown-item block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-50/50 dark:text-gray-100 dark:hover:bg-zinc-600/80"
                                                            href="#">
                                                            Another action
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            class="dropdown-item block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-50/50 dark:text-gray-100 dark:hover:bg-zinc-600/80"
                                                            href="#">
                                                            Something else here
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="after:contant-[] after:absolute after:left-5 after:z-0 after:h-20 after:border-l-2 after:border-dashed after:border-gray-100 dark:border-zinc-600"></div>
                            </li>

                            <li class="relative flex pl-12">
                                <div class="absolute left-0">
                                    <div class="h-10 w-10 rounded-full bg-primary-50 text-center">
                                        <span
                                            class="icon-[mdi--currency-btc] text-2xl leading-relaxed text-yellow-500"></span>
                                    </div>
                                </div>
                                <div>
                                    <div class="flex">
                                        <div class="ml-2 mr-4 w-72 grow overflow-hidden">
                                            <h5 class="mb-1 text-sm text-gray-700 dark:text-gray-100">
                                                24/05/2021, 18:24:56
                                            </h5>
                                            <p
                                                class="text-13 overflow-hidden text-ellipsis whitespace-nowrap text-gray-500">
                                                0xb77ad0099e21d4fca87fa4ca92dda1a40af9e05d205e53f38bf026196fa2e431
                                            </p>
                                        </div>
                                        <div class="mr-1 w-20 shrink-0 text-end">
                                            <h6 class="mb-1 text-gray-700 dark:text-gray-100">+.55 LTC</h6>
                                            <div class="text-13 dark:text-zinc-100">$91.45</div>
                                        </div>

                                        <div class="shrink-0 text-end">
                                            <div class="dropdown relative">
                                                <a
                                                    href="#!"
                                                    class="dropdown-toggle btn border-0 py-2.5 text-xl text-gray-700 dark:text-gray-100"
                                                    id="dropdownMenu11"
                                                    data-bs-toggle="dropdown">
                                                    <span class="icon-[mdi--dots-vertical] text-xl"> </span>
                                                </a>

                                                <ul
                                                    class="dropdown-menu absolute z-50 float-left hidden min-w-max list-none rounded-lg border-none bg-white bg-clip-padding py-2 text-left shadow-lg dark:bg-dark"
                                                    aria-labelledby="dropdownMenu11">
                                                    <li>
                                                        <a
                                                            class="dropdown-item block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-50/50 dark:text-gray-100 dark:hover:bg-zinc-600/80"
                                                            href="#">
                                                            Action
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            class="dropdown-item block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-50/50 dark:text-gray-100 dark:hover:bg-zinc-600/80"
                                                            href="#">
                                                            Another action
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            class="dropdown-item block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-50/50 dark:text-gray-100 dark:hover:bg-zinc-600/80"
                                                            href="#">
                                                            Something else here
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </SimpleBar>
                </div>
            </div>
        </div>

        <div class="mb-5 grid grid-cols-12 gap-5">
            <div class="col-span-12 lg:col-span-8">
                <div class="card h-full">
                    <div class="card-header pb-0">
                        <div class="mb-2 flex flex-wrap items-center">
                            <h5 class="text-15 mr-2 text-gray-800 dark:text-gray-100">Market Overview</h5>
                            <div class="ml-auto flex gap-1">
                                <button
                                    type="button"
                                    class="text-13 btn border-transparent bg-primary-50/50 px-2 py-1 text-primary-500 hover:bg-primary hover:text-white focus:bg-primary focus:text-white dark:bg-primary/20 dark:text-primary-200 dark:hover:bg-primary dark:hover:text-white">
                                    ALL
                                </button>
                                <button
                                    type="button"
                                    class="text-13 dark:hover:bg-zinc-600/800 btn border-transparent bg-gray-50/50 px-2 py-1 text-gray-500 hover:bg-gray-50/50 hover:text-gray-500 focus:bg-gray-500 focus:text-white dark:bg-gray-500/10 dark:text-gray-100 dark:hover:bg-gray-500 dark:hover:text-white">
                                    1M
                                </button>
                                <button
                                    type="button"
                                    class="text-13 dark:hover:bg-zinc-600/800 btn border-transparent bg-gray-50/50 px-2 py-1 text-gray-500 hover:bg-gray-50/50 hover:text-gray-500 focus:bg-gray-500 focus:text-white dark:bg-gray-500/10 dark:text-gray-100 dark:hover:bg-gray-500 dark:hover:text-white">
                                    6M
                                </button>
                                <button
                                    type="button"
                                    class="text-13 dark:hover:bg-zinc-600/800 btn border-transparent bg-gray-50/50 px-2 py-1 text-gray-500 hover:bg-gray-50/50 hover:text-gray-500 focus:bg-gray-500 focus:text-white dark:bg-gray-500/10 dark:text-gray-100 dark:hover:bg-gray-500 dark:hover:text-white">
                                    1Y
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="grid grid-cols-12 items-center gap-10">
                            <div class="col-span-12 lg:col-span-8">
                                <div
                                    id="market-overview"
                                    data-colors='["#009EF7", "#34c38f"]'
                                    class="apex-charts dark:border-zinc-700"
                                    style="min-height: 415px">
                                    <apexchart :options="markerOverview" :series="markerOverview.series" />
                                </div>
                            </div>
                            <div class="col-span-12 lg:col-span-4">
                                <div class="space-y-5 p-4">
                                    <div class="flex items-center">
                                        <div
                                            class="h-8 w-8 rounded-full bg-slate-100 text-center dark:bg-dark dark:text-gray-100">
                                            <span class="text-16 leading-loose">1</span>
                                        </div>
                                        <div class="ml-3 flex-grow">
                                            <span class="text-16 text-gray-700 dark:text-gray-100">
                                                Coinmarketcap
                                            </span>
                                        </div>
                                        <div class="flex-shrink-0">
                                            <span
                                                class="rounded-full bg-green-50/60 px-2 py-0.5 text-xs font-medium text-green-500 dark:bg-green-500/20">
                                                +2.5%
                                            </span>
                                        </div>
                                    </div>

                                    <div class="flex items-center">
                                        <div
                                            class="h-8 w-8 rounded-full bg-slate-100 text-center dark:bg-dark dark:text-gray-100">
                                            <span class="text-16 leading-loose">2</span>
                                        </div>
                                        <div class="ml-3 flex-grow">
                                            <span class="text-16 text-gray-700 dark:text-gray-100"> Binance </span>
                                        </div>
                                        <div class="flex-shrink-0">
                                            <span
                                                class="rounded-full bg-green-50/60 px-2 py-0.5 text-xs font-medium text-green-500 dark:bg-green-500/20">
                                                +8.3%
                                            </span>
                                        </div>
                                    </div>

                                    <div class="flex items-center">
                                        <div
                                            class="h-8 w-8 rounded-full bg-slate-100 text-center dark:bg-dark dark:text-gray-100">
                                            <span class="text-16 leading-loose">3</span>
                                        </div>
                                        <div class="ml-3 flex-grow">
                                            <span class="text-16 text-gray-700 dark:text-gray-100"> Coinbase </span>
                                        </div>
                                        <div class="flex-shrink-0">
                                            <span
                                                class="rounded-full bg-red-50/60 px-2 py-0.5 text-xs font-medium text-red-500 dark:bg-red-500/20">
                                                -3.6%
                                            </span>
                                        </div>
                                    </div>

                                    <div class="flex items-center">
                                        <div
                                            class="h-8 w-8 rounded-full bg-slate-100 text-center dark:bg-dark dark:text-gray-100">
                                            <span class="text-16 leading-loose">4</span>
                                        </div>
                                        <div class="ml-3 flex-grow">
                                            <span class="text-16 text-gray-700 dark:text-gray-100"> Yobit </span>
                                        </div>
                                        <div class="flex-shrink-0">
                                            <span
                                                class="rounded-full bg-green-50/60 px-2 py-0.5 text-xs font-medium text-green-500 dark:bg-green-500/20">
                                                +7.1%
                                            </span>
                                        </div>
                                    </div>

                                    <div class="flex items-center">
                                        <div
                                            class="h-8 w-8 rounded-full bg-slate-100 text-center dark:bg-dark dark:text-gray-100">
                                            <span class="text-16 leading-loose">5</span>
                                        </div>
                                        <div class="ml-3 flex-grow">
                                            <span class="text-16 text-gray-700 dark:text-gray-100"> Bitfinex </span>
                                        </div>
                                        <div class="flex-shrink-0">
                                            <span
                                                class="rounded-full bg-red-50/60 px-2 py-0.5 text-xs font-medium text-red-500 dark:bg-red-500/20">
                                                -0.9%
                                            </span>
                                        </div>
                                    </div>

                                    <div class="mt-4 pt-2">
                                        <button class="btn btn-primary w-full justify-center">
                                            See All Balances
                                            <div class="icon-[mdi--arrow-right-thin] ml-2">east</div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-12 lg:col-span-4">
                <div class="card h-full">
                    <div class="card-header">
                        <h4 class="font-medium dark:text-slate-300">Activities</h4>
                    </div>
                    <SimpleBar class="card-body h-[440px] p-4">
                        <ol class="relative ml-3 border-l border-dashed border-gray-200 dark:border-gray-700">
                            <li class="mb-10 ml-8">
                                <span
                                    data-tooltip-target="tooltip-light"
                                    data-tooltip-style="light"
                                    class="absolute -left-4 flex h-9 w-9 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                                    <span class="icon-[mdi--clock-outline] text-green-500"> schedule </span>
                                    <span
                                        id="tooltip-light"
                                        role="tooltip"
                                        class="tooltip invisible absolute z-10 inline-block rounded-lg border border-slate-200 bg-white px-3 py-2 text-[12px] font-medium text-gray-900 opacity-0 shadow-sm">
                                        Tooltip content
                                        <span class="tooltip-arrow" data-popper-arrow=""></span>
                                    </span>
                                </span>
                                <div
                                    class="items-center justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-800 sm:flex">
                                    <span class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
                                        just now
                                    </span>
                                    <div class="w-full text-sm font-normal text-gray-500 dark:text-gray-300 md:w-[80%]">
                                        <a
                                            href="#"
                                            class="font-semibold text-blue-600 hover:underline dark:text-blue-500">
                                            Jack
                                        </a>
                                        updated the status of Refund #1234 to awaiting customer response
                                        <span
                                            class="mr-2 rounded bg-gray-100 px-2.5 py-0.5 text-xs font-normal text-gray-800 dark:bg-gray-600 dark:text-gray-300">
                                            USA Group
                                        </span>
                                    </div>
                                </div>
                            </li>
                            <li class="mb-10 ml-8">
                                <span
                                    class="absolute -left-4 flex h-9 w-9 items-center justify-center rounded-full bg-pink-100 dark:bg-pink-900/50">
                                    <span class="icon-[mdi--credit-card-outline] text-pink-500"> credit_card </span>
                                </span>
                                <div
                                    class="items-center justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-800 sm:flex">
                                    <span class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
                                        just now
                                    </span>
                                    <div class="w-full text-sm font-normal text-gray-500 dark:text-gray-300 md:w-[80%]">
                                        <a
                                            href="#"
                                            class="font-semibold text-blue-600 hover:underline dark:text-blue-500">
                                            Donald
                                        </a>
                                        updated the status of Refund #1234 to awaiting customer response
                                        <span
                                            class="mr-2 rounded bg-gray-100 px-2.5 py-0.5 text-xs font-normal text-gray-800 dark:bg-gray-600 dark:text-gray-300">
                                            USA Group
                                        </span>
                                    </div>
                                </div>
                            </li>
                            <li class="mb-10 ml-8">
                                <span
                                    class="absolute -left-4 flex h-9 w-9 items-center justify-center rounded-full bg-blue-200 dark:bg-slate-900">
                                    <img
                                        class="rounded-full shadow-lg"
                                        src="/images/users/avatar-1.png"
                                        alt="Thomas Lean image" />
                                </span>
                                <div
                                    class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-800">
                                    <div class="mb-3 items-center justify-between sm:flex">
                                        <span class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
                                            2 hours ago
                                        </span>
                                        <div class="lex text-sm font-normal text-gray-500 dark:text-gray-300">
                                            Aword winner this year
                                            <a
                                                href="#"
                                                class="font-semibold text-gray-900 hover:underline dark:text-white">
                                                Bette Elam
                                            </a>
                                        </div>
                                    </div>
                                    <div
                                        class="rounded-lg border border-gray-200 bg-gray-50 p-3 text-xs font-normal italic text-gray-500 dark:border-slate-700 dark:bg-slate-800 dark:text-gray-300">
                                        There are many variations of passages of Lorem Ipsum available, but the majority
                                        have suffered alteration in some form, by injected humour, or randomised words
                                        which.
                                    </div>
                                </div>
                            </li>
                            <li class="mb-10 ml-8">
                                <span
                                    class="absolute -left-4 flex h-9 w-9 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/50">
                                    <span class="icon-[mdi--check-decagram-outline] text-purple-500"> verified </span>
                                </span>
                                <div
                                    class="items-center justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-800 sm:flex">
                                    <span class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
                                        just now
                                    </span>
                                    <div class="w-full text-sm font-normal text-gray-500 dark:text-gray-300 md:w-[80%]">
                                        <a
                                            href="#"
                                            class="font-semibold text-blue-600 hover:underline dark:text-blue-500">
                                            William
                                        </a>
                                        updated the status of Refund #1234 to awaiting customer response
                                        <span
                                            class="mr-2 rounded bg-gray-100 px-2.5 py-0.5 text-xs font-normal text-gray-800 dark:bg-gray-600 dark:text-gray-300">
                                            USA Group
                                        </span>
                                    </div>
                                </div>
                            </li>
                        </ol>
                    </SimpleBar>
                </div>
            </div>
        </div>

        <div class="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            <div class="sm:col-span-1 md:col-span-2 lg:col-span-4 xl:col-span-1">
                <div class="card h-full">
                    <div class="card-header">
                        <h4 class="font-medium dark:text-slate-300">Total Visits</h4>
                    </div>
                    <div class="card-body flex flex-col">
                        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                <div class="overflow-hidden rounded">
                                    <table class="tw-table min-w-full">
                                        <thead class="bg-gray-50 dark:bg-gray-700">
                                            <tr>
                                                <th scope="col">Channel</th>
                                                <th scope="col">Sessions</th>
                                                <th scope="col">Prev.Period</th>
                                                <th scope="col">% Change</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <!-- 1 -->
                                            <tr class="border-dashed">
                                                <td>
                                                    <a href="" class="text-blue-500"> Organic search </a>
                                                </td>
                                                <td>10853<small class="text-gray-400">(52%)</small></td>
                                                <td>566<small class="text-gray-400">(92%)</small></td>
                                                <td>
                                                    52.80%
                                                    <span class="icon-[mdi--menu-up] text-base text-green-500"></span>
                                                </td>
                                            </tr>
                                            <!-- 2 -->
                                            <tr>
                                                <td>
                                                    <a href="" class="text-blue-500">Direct</a>
                                                </td>
                                                <td>10853<small class="text-gray-400">(52%)</small></td>
                                                <td>566<small class="text-gray-400">(92%)</small></td>
                                                <td>
                                                    52.80%
                                                    <span class="icon-[mdi--menu-down] text-base text-red-500"></span>
                                                </td>
                                            </tr>
                                            <!-- 3 -->
                                            <tr>
                                                <td>
                                                    <a href="" class="text-blue-500">Referal</a>
                                                </td>
                                                <td>10853<small class="text-gray-400">(52%)</small></td>
                                                <td>566<small class="text-gray-400">(92%)</small></td>
                                                <td>
                                                    52.80%
                                                    <span class="icon-[mdi--menu-up] text-base text-green-500"></span>
                                                </td>
                                            </tr>
                                            <!-- 4 -->
                                            <tr>
                                                <td>
                                                    <a href="" class="text-blue-500">Email</a>
                                                </td>
                                                <td>10853<small class="text-gray-400">(52%)</small></td>
                                                <td>566<small class="text-gray-400">(92%)</small></td>
                                                <td>
                                                    52.80%
                                                    <span class="icon-[mdi--menu-down] text-base text-red-500"></span>
                                                </td>
                                            </tr>
                                            <!-- 5 -->
                                            <tr class="bg-white dark:bg-gray-800">
                                                <td>
                                                    <a href="" class="text-blue-500">Social</a>
                                                </td>
                                                <td>10853<small class="text-gray-400">(52%)</small></td>
                                                <td>566<small class="text-gray-400">(92%)</small></td>
                                                <td>
                                                    52.80%

                                                    <span class="icon-[mdi--menu-up] text-base text-green-500"></span>
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
                <div class="card h-full">
                    <div class="card-header">
                        <h4 class="font-medium dark:text-slate-300">Browser Used By Users</h4>
                    </div>
                    <div class="card-body flex flex-col">
                        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                <div class="overflow-hidden rounded">
                                    <table class="tw-table min-w-full">
                                        <thead class="bg-gray-50 dark:bg-gray-700">
                                            <tr>
                                                <th scope="col" class="">Browser</th>
                                                <th scope="col" class="">Sessions</th>
                                                <th scope="col" class="">Bounce Rate</th>
                                                <th scope="col" class="">Transactions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <!-- 1 -->
                                            <tr>
                                                <td>
                                                    <img
                                                        src="/images/browsers/chrome.png"
                                                        class="mr-2 inline-block h-5" />Chrome
                                                </td>
                                                <td>10853<small class="text-gray-400">(52%)</small></td>
                                                <td>52.80%</td>
                                                <td>566 <small class="text-gray-400">(92%)</small></td>
                                            </tr>
                                            <!-- 2 -->
                                            <tr>
                                                <td>
                                                    <img
                                                        src="/images/browsers/in-explorer.png"
                                                        class="mr-2 inline-block h-5" />Explorer
                                                </td>
                                                <td>10853<small class="text-gray-400">(52%)</small></td>
                                                <td>52.80%</td>
                                                <td>566 <small class="text-gray-400">(92%)</small></td>
                                            </tr>
                                            <!-- 3 -->
                                            <tr>
                                                <td>
                                                    <img
                                                        src="/images/browsers/safari.png"
                                                        class="mr-2 inline-block h-5" />Safari
                                                </td>
                                                <td>10853<small class="text-gray-400">(52%)</small></td>
                                                <td>52.80%</td>
                                                <td>566 <small class="text-gray-400">(92%)</small></td>
                                            </tr>
                                            <!-- 4 -->
                                            <tr>
                                                <td>
                                                    <img
                                                        src="/images/browsers/mozilla.png"
                                                        class="mr-2 inline-block h-5" />Mozilla
                                                </td>
                                                <td>10853<small class="text-gray-400">(52%)</small></td>
                                                <td>52.80%</td>
                                                <td>566 <small class="text-gray-400">(92%)</small></td>
                                            </tr>
                                            <!-- 5 -->
                                            <tr class="bg-white dark:bg-gray-800">
                                                <td>
                                                    <img
                                                        src="/images/browsers/opera.png"
                                                        class="mr-2 inline-block h-5" />Opera
                                                </td>
                                                <td>10853<small class="text-gray-400">(52%)</small></td>
                                                <td>52.80%</td>
                                                <td>566 <small class="text-gray-400">(92%)</small></td>
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
