<script setup lang="ts">
    import { salesOverview, salesDonut, socialVisitors } from './data';
    import TotalRevenue from './components/TotalRevenue.vue';
    import TotalSales from './components/TotalSales.vue';
    import TotalProducts from './components/TotalProducts.vue';
    import TotalExpenses from './components/TotalExpenses.vue';
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
                            <span class="breadcrumb-item-current"> Sales </span>
                        </div>
                    </li>
                </ol>
            </div>
        </nav>
        <!-- End:Breadcrumb -->
        <div class="space-y-4">
            <div class="grid grid-cols-12 gap-x-5 space-y-5 lg:space-y-0">
                <div class="col-span-12 md:col-span-6 xl:col-span-3">
                    <TotalRevenue />
                </div>
                <div class="col-span-12 md:col-span-6 xl:col-span-3">
                    <TotalSales />
                </div>
                <div class="col-span-12 md:col-span-6 xl:col-span-3">
                    <TotalProducts />
                </div>
                <div class="col-span-12 md:col-span-6 xl:col-span-3">
                    <TotalExpenses />
                </div>
            </div>
            <div class="grid grid-cols-12 gap-x-5 space-y-5 lg:space-y-0">
                <div class="col-span-12 lg:col-span-12 xl:col-span-6">
                    <div class="card h-full">
                        <div class="card-header">
                            <div class="flex">
                                <h5 class="card-title my-auto">Sales Overview</h5>
                                <div class="my-auto block ltr:ml-auto rtl:mr-auto">
                                    <UiDropdown>
                                        <template #trigger>
                                            <button
                                                type="button"
                                                aria-label="button"
                                                class="rounded-full !border border-gray-200 bg-white p-1.5 text-gray-500 hover:bg-gray-100 focus:ring-gray-200 dark:border-white/10 dark:bg-black/20 dark:hover:border-white/20 dark:hover:bg-black/30 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
                                                <span class="icon-[mdi--dots-vertical]"></span>
                                            </button>
                                        </template>
                                        <ul class="dark:text-white-dark right-0 text-black">
                                            <li>
                                                <a class="dropdown-link" href="javascript:void(0)">Download</a>
                                            </li>
                                            <li>
                                                <a class="dropdown-link" href="javascript:void(0)">Import</a>
                                            </li>
                                            <li>
                                                <a class="dropdown-link" href="javascript:void(0)">Export</a>
                                            </li>
                                        </ul>
                                    </UiDropdown>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <ul class="flex flex-wrap sm:space-x-6 sm:rtl:space-x-reverse">
                                <li>
                                    <p class="inline-flex items-center">
                                        <span
                                            class="pointer-events-none block h-3 w-3 rounded-full border-4 border-primary ltr:mr-2 rtl:ml-2"></span>
                                        <span class="flex items-center">
                                            <span
                                                class="pointer-events-none text-2xl font-bold text-gray-800 ltr:mr-2 rtl:ml-2 dark:text-white">
                                                $9.65K
                                            </span>
                                            <span class="text-sm text-gray-400 dark:text-white/80">/ Income</span>
                                        </span>
                                    </p>
                                </li>
                                <li>
                                    <p class="inline-flex items-center">
                                        <span
                                            class="pointer-events-none block h-3 w-3 rounded-full border-4 border-gray-200 ltr:mr-2 rtl:ml-2"></span>
                                        <span class="flex items-center">
                                            <span
                                                class="pointer-events-none text-2xl font-bold text-gray-800 ltr:mr-2 rtl:ml-2 dark:text-white">
                                                $3.75K
                                            </span>
                                            <span class="text-sm text-gray-400 dark:text-white/80">/ Expenses</span>
                                        </span>
                                    </p>
                                </li>
                            </ul>
                            <apexchart height="300" :options="salesOverview.options" :series="salesOverview.series" />
                        </div>
                    </div>
                </div>
                <div class="col-span-12 lg:col-span-6 xl:col-span-3">
                    <div class="card h-full">
                        <div class="card-header">
                            <div class="flex">
                                <h5 class="card-title my-auto">Sales Value</h5>
                                <div class="my-auto block ltr:ml-auto rtl:mr-auto">
                                    <UiDropdown>
                                        <template #trigger>
                                            <button
                                                type="button"
                                                aria-label="button"
                                                class="rounded-full !border border-gray-200 bg-white p-1.5 text-gray-500 hover:bg-gray-100 focus:ring-gray-200 dark:border-white/10 dark:bg-black/20 dark:hover:border-white/20 dark:hover:bg-black/30 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
                                                <span class="icon-[mdi--dots-vertical]"></span>
                                            </button>
                                        </template>
                                        <ul class="dark:text-white-dark right-0 text-black">
                                            <li>
                                                <a class="dropdown-link" href="javascript:void(0)">Download</a>
                                            </li>
                                            <li>
                                                <a class="dropdown-link" href="javascript:void(0)">Import</a>
                                            </li>
                                            <li>
                                                <a class="dropdown-link" href="javascript:void(0)">Export</a>
                                            </li>
                                        </ul>
                                    </UiDropdown>
                                </div>
                            </div>
                        </div>
                        <div class="card-body p-0">
                            <div class="sales-value relative border-b border-gray-200 dark:border-white/10">
                                <apexchart
                                    type="polarArea"
                                    height="300"
                                    :options="salesDonut.options"
                                    :series="salesDonut.series" />
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="border-gray-200 p-5 ltr:border-r rtl:border-l dark:border-white/10">
                                    <div class="text-center text-sm font-medium text-gray-500 dark:text-white/80">
                                        Sale Items
                                    </div>
                                    <div class="text-center">
                                        <p class="text-2xl font-semibold text-gray-800 dark:text-white">567</p>
                                        <span class="font-semibold text-success">
                                            <i class="ri-arrow-up-s-fill align-middle"></i>0.23%
                                        </span>
                                    </div>
                                </div>
                                <div class="p-5">
                                    <div class="text-center text-sm font-medium text-gray-500 dark:text-white/80">
                                        Sale Revenue
                                    </div>
                                    <div class="text-center">
                                        <p class="text-2xl font-semibold text-gray-800 dark:text-white">$11,197</p>
                                        <span class="font-semibold text-danger">
                                            <i class="ri-arrow-down-s-fill align-middle"></i>0.15%
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-span-12 lg:col-span-6 xl:col-span-3">
                    <div class="card h-full">
                        <div class="card-header">
                            <div class="flex">
                                <h5 class="card-title my-auto">Top Customers</h5>
                                <div class="my-auto block ltr:ml-auto rtl:mr-auto">
                                    <UiDropdown>
                                        <template #trigger>
                                            <button
                                                type="button"
                                                aria-label="button"
                                                class="rounded-full !border border-gray-200 bg-white p-1.5 text-gray-500 hover:bg-gray-100 focus:ring-gray-200 dark:border-white/10 dark:bg-black/20 dark:hover:border-white/20 dark:hover:bg-black/30 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
                                                <span class="icon-[mdi--dots-vertical]"></span>
                                            </button>
                                        </template>
                                        <ul class="dark:text-white-dark right-0 text-black">
                                            <li>
                                                <a class="dropdown-link" href="javascript:void(0)">Download</a>
                                            </li>
                                            <li>
                                                <a class="dropdown-link" href="javascript:void(0)">Import</a>
                                            </li>
                                            <li>
                                                <a class="dropdown-link" href="javascript:void(0)">Export</a>
                                            </li>
                                        </ul>
                                    </UiDropdown>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <ul class="flex flex-col">
                                <li class="ti-list-group border-0 px-0 pt-0 text-gray-800 dark:text-white">
                                    <a href="javascript:void(0);" class="flex w-full items-center justify-between">
                                        <div class="flex w-full space-x-3 rtl:space-x-reverse">
                                            <img
                                                class="avatar avatar-sm rounded-sm"
                                                src="/images/users/avatar-2.png"
                                                alt="Image Description" />
                                            <div class="flex w-full">
                                                <div class="my-auto block">
                                                    <p
                                                        class="my-auto block text-sm font-semibold text-gray-800 hover:text-gray-900 dark:text-white dark:hover:text-gray-200">
                                                        Socrates Itumay
                                                    </p>
                                                    <p
                                                        class="max-w-[100px] truncate text-xs font-normal text-gray-400 dark:text-white/80 sm:max-w-max">
                                                        15 Purchases
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div><span class="text-sm font-bold">$1,835</span></div>
                                    </a>
                                </li>
                                <li class="ti-list-group border-0 px-0 pt-3 text-gray-800 dark:text-white">
                                    <a href="javascript:void(0);" class="flex w-full items-center justify-between">
                                        <div class="flex w-full space-x-3 rtl:space-x-reverse">
                                            <img
                                                class="avatar avatar-sm rounded-sm"
                                                src="/images/users/avatar-3.png"
                                                alt="Image Description" />
                                            <div class="flex w-full">
                                                <div class="my-auto block">
                                                    <p
                                                        class="my-auto block text-sm font-semibold text-gray-800 hover:text-gray-900 dark:text-white dark:hover:text-gray-200">
                                                        Json Taylor
                                                    </p>
                                                    <p
                                                        class="max-w-[100px] truncate text-xs font-normal text-gray-400 dark:text-white/80 sm:max-w-max">
                                                        18 Purchases
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div><span class="text-sm font-bold">$2,415</span></div>
                                    </a>
                                </li>
                                <li class="ti-list-group border-0 px-0 pt-3 text-gray-800 dark:text-white">
                                    <a href="javascript:void(0);" class="flex w-full items-center justify-between">
                                        <div class="flex w-full space-x-3 rtl:space-x-reverse">
                                            <img
                                                class="avatar avatar-sm rounded-sm"
                                                src="/images/users/avatar-4.png"
                                                alt="Image Description" />
                                            <div class="flex w-full">
                                                <div class="my-auto block">
                                                    <p
                                                        class="my-auto block text-sm font-semibold text-gray-800 hover:text-gray-900 dark:text-white dark:hover:text-gray-200">
                                                        Suzika Stallone
                                                    </p>
                                                    <p
                                                        class="max-w-[100px] truncate text-xs font-normal text-gray-400 dark:text-white/80 sm:max-w-max">
                                                        21 Purchases
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div><span class="text-sm font-bold">$2,341</span></div>
                                    </a>
                                </li>
                                <li class="ti-list-group border-0 px-0 pt-3 text-gray-800 dark:text-white">
                                    <a href="javascript:void(0);" class="flex w-full items-center justify-between">
                                        <div class="flex w-full space-x-3 rtl:space-x-reverse">
                                            <img
                                                class="avatar avatar-sm rounded-sm"
                                                src="/images/users/avatar-5.png"
                                                alt="Image Description" />
                                            <div class="flex w-full">
                                                <div class="my-auto block">
                                                    <p
                                                        class="my-auto block text-sm font-semibold text-gray-800 hover:text-gray-900 dark:text-white dark:hover:text-gray-200">
                                                        Angelina Hose
                                                    </p>
                                                    <p
                                                        class="max-w-[100px] truncate text-xs font-normal text-gray-400 dark:text-white/80 sm:max-w-max">
                                                        24 Purchases
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div><span class="text-sm font-bold">2,624</span></div>
                                    </a>
                                </li>
                                <li class="ti-list-group border-0 px-0 pt-3 text-gray-800 dark:text-white">
                                    <a href="javascript:void(0);" class="flex w-full items-center justify-between">
                                        <div class="flex w-full space-x-3 rtl:space-x-reverse">
                                            <img
                                                class="avatar avatar-sm rounded-sm"
                                                src="/images/users/avatar-6.png"
                                                alt="Image Description" />
                                            <div class="flex w-full">
                                                <div class="my-auto block">
                                                    <p
                                                        class="my-auto block text-sm font-semibold text-gray-800 hover:text-gray-900 dark:text-white dark:hover:text-gray-200">
                                                        Selena Deoyl
                                                    </p>
                                                    <p
                                                        class="max-w-[100px] truncate text-xs font-normal text-gray-400 dark:text-white/80 sm:max-w-max">
                                                        12 Purchases
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div><span class="text-sm font-bold">$1,035</span></div>
                                    </a>
                                </li>
                                <li class="ti-list-group border-0 px-0 pb-0 pt-3 text-gray-800 dark:text-white">
                                    <a href="javascript:void(0);" class="flex w-full items-center justify-between">
                                        <div class="flex w-full space-x-3 rtl:space-x-reverse">
                                            <img
                                                class="avatar avatar-sm rounded-sm"
                                                src="/images/users/avatar-10.png"
                                                alt="Image Description" />
                                            <div class="flex w-full">
                                                <div class="my-auto block">
                                                    <p
                                                        class="my-auto block text-sm font-semibold text-gray-800 hover:text-gray-900 dark:text-white dark:hover:text-gray-200">
                                                        Charlie Davieson
                                                    </p>
                                                    <p
                                                        class="max-w-[100px] truncate text-xs font-normal text-gray-400 dark:text-white/80 sm:max-w-max">
                                                        15 Purchases
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div><span class="text-sm font-bold">$1,835</span></div>
                                    </a>
                                </li>
                                <li class="ti-list-group border-0 px-0 pt-0 text-gray-800 dark:text-white">
                                    <a href="javascript:void(0);" class="flex w-full items-center justify-between">
                                        <div class="flex w-full space-x-3 rtl:space-x-reverse">
                                            <img
                                                class="avatar avatar-sm rounded-sm"
                                                src="/images/users/avatar-2.png"
                                                alt="Image Description" />
                                            <div class="flex w-full">
                                                <div class="my-auto block">
                                                    <p
                                                        class="my-auto block text-sm font-semibold text-gray-800 hover:text-gray-900 dark:text-white dark:hover:text-gray-200">
                                                        Socrates Itumay
                                                    </p>
                                                    <p
                                                        class="max-w-[100px] truncate text-xs font-normal text-gray-400 dark:text-white/80 sm:max-w-max">
                                                        15 Purchases
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div><span class="text-sm font-bold">$1,835</span></div>
                                    </a>
                                </li>
                                <li class="ti-list-group border-0 px-0 pt-3 text-gray-800 dark:text-white">
                                    <a href="javascript:void(0);" class="flex w-full items-center justify-between">
                                        <div class="flex w-full space-x-3 rtl:space-x-reverse">
                                            <img
                                                class="avatar avatar-sm rounded-sm"
                                                src="/images/users/avatar-3.png"
                                                alt="Image Description" />
                                            <div class="flex w-full">
                                                <div class="my-auto block">
                                                    <p
                                                        class="my-auto block text-sm font-semibold text-gray-800 hover:text-gray-900 dark:text-white dark:hover:text-gray-200">
                                                        Json Taylor
                                                    </p>
                                                    <p
                                                        class="max-w-[100px] truncate text-xs font-normal text-gray-400 dark:text-white/80 sm:max-w-max">
                                                        18 Purchases
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div><span class="text-sm font-bold">$2,415</span></div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-12 gap-x-5 space-y-5 lg:space-y-0">
                <div class="col-span-12 lg:col-span-6 xl:col-span-3">
                    <div class="card h-full">
                        <div class="card-header">
                            <div class="flex">
                                <h5 class="card-title my-auto">Upcoming Products</h5>
                                <div class="my-auto block ltr:ml-auto rtl:mr-auto">
                                    <UiDropdown>
                                        <template #trigger>
                                            <button
                                                type="button"
                                                aria-label="button"
                                                class="rounded-full !border border-gray-200 bg-white p-1.5 text-gray-500 hover:bg-gray-100 focus:ring-gray-200 dark:border-white/10 dark:bg-black/20 dark:hover:border-white/20 dark:hover:bg-black/30 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
                                                <span class="icon-[mdi--dots-vertical]"></span>
                                            </button>
                                        </template>
                                        <ul class="dark:text-white-dark right-0 text-black">
                                            <li>
                                                <a class="dropdown-link" href="javascript:void(0)">Download</a>
                                            </li>
                                            <li>
                                                <a class="dropdown-link" href="javascript:void(0)">Import</a>
                                            </li>
                                            <li>
                                                <a class="dropdown-link" href="javascript:void(0)">Export</a>
                                            </li>
                                        </ul>
                                    </UiDropdown>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <ul class="flex flex-col">
                                <li class="ti-list-group mb-6 border-0 p-0 text-gray-800 dark:text-white">
                                    <a href="javascript:void(0);" class="w-full">
                                        <div class="flex items-center">
                                            <div class="leading-none">
                                                <img
                                                    class="avatar avatar-sm rounded-full"
                                                    src="/images/products/01.png"
                                                    alt="image" />
                                            </div>
                                            <div class="flex-auto ltr:ml-2 rtl:mr-2">
                                                <p class="mb-0 text-sm font-semibold">Smart Phone</p>
                                                <p class="mb-0 text-xs !font-normal text-gray-400 dark:text-white/80">
                                                    Mobiles
                                                </p>
                                            </div>
                                            <div class="block text-end">
                                                <span class="text-sm font-semibold text-success">$199.99</span>
                                                <p class="text-xs !font-normal text-gray-400 dark:text-white/80">
                                                    <i class="ti ti-clock-hour-2 ltr:mr-1 rtl:mr-1"></i>01 Apr, 2023
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li class="ti-list-group mb-6 border-0 p-0 text-gray-800 dark:text-white">
                                    <a href="javascript:void(0);" class="w-full">
                                        <div class="flex items-center">
                                            <div class="leading-none">
                                                <img
                                                    class="avatar avatar-sm rounded-full"
                                                    src="/images/products/02.png"
                                                    alt="image" />
                                            </div>
                                            <div class="flex-auto ltr:ml-2 rtl:mr-2">
                                                <p class="mb-0 text-sm font-semibold">White Headphones</p>
                                                <p class="mb-0 text-xs !font-normal text-gray-400 dark:text-white/80">
                                                    Music
                                                </p>
                                            </div>
                                            <div class="block text-end">
                                                <span class="text-sm font-semibold text-success">$79.49</span>
                                                <p class="text-xs !font-normal text-gray-400 dark:text-white/80">
                                                    <i class="ti ti-clock-hour-2 ltr:mr-1 rtl:mr-1"></i>01 Apr, 2023
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li class="ti-list-group mb-6 border-0 p-0 text-gray-800 dark:text-white">
                                    <a href="javascript:void(0);" class="w-full">
                                        <div class="flex items-center">
                                            <div class="leading-none">
                                                <img
                                                    class="avatar avatar-sm rounded-full"
                                                    src="/images/products/03.png"
                                                    alt="image" />
                                            </div>
                                            <div class="flex-auto ltr:ml-2 rtl:mr-2">
                                                <p class="mb-0 text-sm font-semibold">Stop Watch</p>
                                                <p class="mb-0 text-xs !font-normal text-gray-400 dark:text-white/80">
                                                    Electronics
                                                </p>
                                            </div>
                                            <div class="block text-end">
                                                <span class="text-sm font-semibold text-success">$49.29</span>
                                                <p class="text-xs !font-normal text-gray-400 dark:text-white/80">
                                                    <i class="ti ti-clock-hour-2 ltr:mr-1 rtl:mr-1"></i>01 Apr, 2023
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li class="ti-list-group mb-6 border-0 p-0 text-gray-800 dark:text-white">
                                    <a href="javascript:void(0);" class="w-full">
                                        <div class="flex items-center">
                                            <div class="leading-none">
                                                <img
                                                    class="avatar avatar-sm rounded-full"
                                                    src="/images/products/04.png"
                                                    alt="image" />
                                            </div>
                                            <div class="flex-auto ltr:ml-2 rtl:mr-2">
                                                <p class="mb-0 text-sm font-semibold">Kikon Camera</p>
                                                <p class="mb-0 text-xs !font-normal text-gray-400 dark:text-white/80">
                                                    Electronics
                                                </p>
                                            </div>
                                            <div class="block text-end">
                                                <span class="text-sm font-semibold text-success">$1,699.00</span>
                                                <p class="text-xs !font-normal text-gray-400 dark:text-white/80">
                                                    <i class="ti ti-clock-hour-2 ltr:mr-1 rtl:mr-1"></i>01 Apr, 2023
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li class="ti-list-group mb-6 border-0 p-0 text-gray-800 dark:text-white">
                                    <a href="javascript:void(0);" class="w-full">
                                        <div class="flex items-center">
                                            <div class="leading-none">
                                                <img
                                                    class="avatar avatar-sm rounded-full"
                                                    src="/images/products/p-1.png"
                                                    alt="image" />
                                            </div>
                                            <div class="flex-auto ltr:ml-2 rtl:mr-2">
                                                <p class="mb-0 text-sm font-semibold">Kids shoes</p>
                                                <p class="mb-0 text-xs !font-normal text-gray-400 dark:text-white/80">
                                                    Clothing
                                                </p>
                                            </div>
                                            <div class="block text-end">
                                                <span class="text-sm font-semibold text-success">$149.00</span>
                                                <p class="text-xs !font-normal text-gray-400 dark:text-white/80">
                                                    <i class="ti ti-clock-hour-2 ltr:mr-1 rtl:mr-1"></i>01 Apr, 2023
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li class="ti-list-group mb-0 border-0 p-0 text-gray-800 dark:text-white">
                                    <a href="javascript:void(0);" class="w-full">
                                        <div class="flex items-center">
                                            <div class="leading-none">
                                                <img
                                                    class="avatar avatar-sm rounded-full"
                                                    src="/images/products/05.png"
                                                    alt="image" />
                                            </div>
                                            <div class="flex-auto ltr:ml-2 rtl:mr-2">
                                                <p class="mb-0 text-sm font-semibold">Photo Frame</p>
                                                <p class="mb-0 text-xs !font-normal text-gray-400 dark:text-white/80">
                                                    Furniture
                                                </p>
                                            </div>
                                            <div class="block text-end">
                                                <span class="text-sm font-semibold text-success">$29.99</span>
                                                <p class="text-xs !font-normal text-gray-400 dark:text-white/80">
                                                    <i class="ti ti-clock-hour-2 ltr:mr-1 rtl:mr-1"></i>01 Apr, 2023
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-span-12 lg:col-span-6 xl:col-span-4">
                    <div class="card h-full">
                        <div class="card-header">
                            <div class="flex">
                                <h5 class="card-title my-auto">Social Visitors</h5>
                                <div class="my-auto block ltr:ml-auto rtl:mr-auto">
                                    <UiDropdown>
                                        <template #trigger>
                                            <button
                                                type="button"
                                                aria-label="button"
                                                class="rounded-sm !border border-gray-200 p-1.5 px-3 text-gray-400 hover:border-gray-200 hover:bg-gray-200 hover:text-gray-500 focus:ring-gray-200 dark:border-white/10 dark:hover:border-white/20 dark:hover:bg-black/30 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
                                                This Week
                                            </button>
                                        </template>
                                        <ul class="dark:text-white-dark right-0 text-black">
                                            <li>
                                                <a class="dropdown-link" href="javascript:void(0)">This Week</a>
                                            </li>
                                            <li>
                                                <a class="dropdown-link" href="javascript:void(0)"> This Month </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-link" href="javascript:void(0)">This Year</a>
                                            </li>
                                        </ul>
                                    </UiDropdown>
                                </div>
                            </div>
                        </div>
                        <div class="card-body p-2">
                            <apexchart height="350" :options="socialVisitors.options" :series="socialVisitors.series" />
                        </div>
                    </div>
                </div>
                <div class="col-span-12 lg:col-span-12 xl:col-span-5">
                    <div class="card h-full">
                        <div class="card-header flex">
                            <h5 class="card-title my-auto">Top Selling Products</h5>
                            <div class="my-auto block ltr:ml-auto rtl:mr-auto">
                                <UiDropdown>
                                    <template #trigger>
                                        <button
                                            type="button"
                                            aria-label="button"
                                            class="rounded-full !border border-gray-200 bg-white p-1.5 text-gray-500 hover:bg-gray-100 focus:ring-gray-200 dark:border-white/10 dark:bg-black/20 dark:hover:border-white/20 dark:hover:bg-black/30 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
                                            <span class="icon-[mdi--dots-vertical]"></span>
                                        </button>
                                    </template>
                                    <ul class="dark:text-white-dark right-0 w-44 text-black">
                                        <li>
                                            <a class="dropdown-link" href="javascript:void(0)">Action</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-link" href="javascript:void(0)"> Another Action </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-link" href="javascript:void(0)"> Something else </a>
                                        </li>
                                    </ul>
                                </UiDropdown>
                            </div>
                        </div>
                        <div class="card-body p-0">
                            <div class="overflow-auto">
                                <table class="tw-table">
                                    <thead>
                                        <tr>
                                            <th scope="col" class="!p-[0.65rem] text-center">Product</th>
                                            <th scope="col" class="!p-[0.65rem]">Category</th>
                                            <th scope="col" class="!p-[0.65rem]">Stock</th>
                                            <th scope="col" class="!p-[0.65rem]">TotalSales</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td
                                                class="min-w-[180px] truncate !p-[0.65rem] leading-none !text-gray-800 dark:!text-white">
                                                <img
                                                    src="/images/products/01.png"
                                                    class="avatar avatar-sm rounded-full bg-gray-100 p-2 ltr:mr-2 rtl:ml-2 dark:bg-black/20"
                                                    alt="Image Description" />Ethnic School bag for children (24L)
                                            </td>
                                            <td class="!p-[0.65rem]">Bags</td>
                                            <td class="!p-[0.65rem] text-sm">
                                                <span class="badge rounded-sm bg-success/10 leading-none text-success"
                                                    >In Stock</span
                                                >
                                            </td>
                                            <td class="!p-[0.65rem]">
                                                <span class="text-sm font-semibold">5,093</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                class="min-w-[180px] truncate !p-[0.65rem] leading-none !text-gray-800 dark:!text-white">
                                                <img
                                                    src="/images/products/02.png"
                                                    class="avatar avatar-sm rounded-full bg-gray-100 p-2 ltr:mr-2 rtl:ml-2 dark:bg-black/20"
                                                    alt="Image Description" />Leather jacket for men (S,M,L,XL)
                                            </td>
                                            <td class="!p-[0.65rem]">Clothing</td>
                                            <td class="!p-[0.65rem] text-sm">
                                                <span class="badge rounded-sm bg-success/10 leading-none text-success"
                                                    >In Stock</span
                                                >
                                            </td>
                                            <td class="!p-[0.65rem]">
                                                <span class="text-sm font-semibold">6,890</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                class="min-w-[180px] truncate !p-[0.65rem] leading-none !text-gray-800 dark:!text-white">
                                                <img
                                                    src="/images/products/03.png"
                                                    class="avatar avatar-sm rounded-full bg-gray-100 p-2 ltr:mr-2 rtl:ml-2 dark:bg-black/20"
                                                    alt="Image Description" />Childrens Teddy toy of high quality
                                            </td>
                                            <td class="!p-[0.65rem]">Toys</td>
                                            <td class="!p-[0.65rem] text-sm">
                                                <span class="badge rounded-sm bg-danger/10 leading-none text-danger"
                                                    >Out Of Stock</span
                                                >
                                            </td>
                                            <td class="!p-[0.65rem]">
                                                <span class="text-sm font-semibold">5,423</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                class="min-w-[180px] truncate !p-[0.65rem] leading-none !text-gray-800 dark:!text-white">
                                                <img
                                                    src="/images/products/04.png"
                                                    class="avatar avatar-sm rounded-full bg-gray-100 p-2 ltr:mr-2 rtl:ml-2 dark:bg-black/20"
                                                    alt="Image Description" />Orange smart watch (24mm)
                                            </td>
                                            <td class="!p-[0.65rem]">Fashion</td>
                                            <td class="!p-[0.65rem] text-sm">
                                                <span class="badge rounded-sm bg-danger/10 leading-none text-danger"
                                                    >Out Of Stock</span
                                                >
                                            </td>
                                            <td class="!p-[0.65rem]">
                                                <span class="text-sm font-semibold">10,234</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                class="min-w-[180px] truncate !p-[0.65rem] leading-none !text-gray-800 dark:!text-white">
                                                <img
                                                    src="/images/products/01.png"
                                                    class="avatar avatar-sm rounded-full bg-gray-100 p-2 ltr:mr-2 rtl:ml-2 dark:bg-black/20"
                                                    alt="Image Description" />Black Camera
                                            </td>
                                            <td class="!p-[0.65rem]">Electronic</td>
                                            <td class="!p-[0.65rem] text-sm">
                                                <span class="badge rounded-sm bg-success/10 leading-none text-success"
                                                    >In Stock</span
                                                >
                                            </td>
                                            <td class="!p-[0.65rem]">
                                                <span class="text-sm font-semibold">10,234</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                class="min-w-[180px] truncate !p-[0.65rem] leading-none !text-gray-800 dark:!text-white">
                                                <img
                                                    src="/images/products/05.png"
                                                    class="avatar avatar-sm rounded-full bg-gray-100 p-2 ltr:mr-2 rtl:ml-2 dark:bg-black/20"
                                                    alt="Image Description" />Hand Bag For Ladies
                                            </td>
                                            <td class="!p-[0.65rem]">Fashion</td>
                                            <td class="!p-[0.65rem] text-sm">
                                                <span class="badge rounded-sm bg-danger/10 leading-none text-danger"
                                                    >Out Of Stock</span
                                                >
                                            </td>
                                            <td class="!p-[0.65rem]">
                                                <span class="text-sm font-semibold">1,034</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-12 gap-x-5">
                <div class="col-span-12">
                    <div class="card">
                        <div class="card-header">
                            <div class="flex">
                                <h5 class="card-title my-auto">Recent Order Details</h5>
                                <div class="my-auto block ltr:ml-auto rtl:mr-auto">
                                    <UiDropdown>
                                        <template #trigger>
                                            <button
                                                type="button"
                                                aria-label="button"
                                                class="rounded-sm !border border-gray-200 bg-white p-1.5 text-gray-500 hover:bg-gray-100 focus:ring-gray-200 dark:border-white/10 dark:bg-black/20 dark:hover:border-white/20 dark:hover:bg-black/30 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
                                                View All
                                            </button>
                                        </template>
                                        <ul class="dark:text-white-dark right-0 text-black">
                                            <li>
                                                <a class="dropdown-link" href="javascript:void(0)">Download</a>
                                            </li>
                                            <li>
                                                <a class="dropdown-link" href="javascript:void(0)">Import</a>
                                            </li>
                                            <li>
                                                <a class="dropdown-link" href="javascript:void(0)">Export</a>
                                            </li>
                                        </ul>
                                    </UiDropdown>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="table-bordered ti-custom-table-head overflow-auto rounded-sm">
                                <table class="tw-table whitespace-nowrap">
                                    <thead class="bg-gray-50 dark:bg-black/20">
                                        <tr>
                                            <th scope="col" class="dark:text-white/80">S.no</th>
                                            <th scope="col" class="dark:text-white/80">Item Details</th>
                                            <th scope="col" class="dark:text-white/80">Customer ID</th>
                                            <th scope="col" class="min-w-[300px] dark:text-white/80">
                                                Customer Details
                                            </th>
                                            <th scope="col" class="dark:text-white/80">Ordered Date</th>
                                            <th scope="col" class="dark:text-white/80">Status</th>
                                            <th scope="col" class="dark:text-white/80">Price</th>
                                            <th scope="col" class="dark:text-white/80">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>
                                                <div class="flex w-full space-x-3 rtl:space-x-reverse">
                                                    <img
                                                        class="avatar rounded-sm bg-gray-100 p-2 dark:bg-black/20"
                                                        src="/images/products/01.png"
                                                        alt="Image Description" />
                                                    <div class="my-auto block w-full">
                                                        <span
                                                            class="block min-w-[180px] truncate text-sm font-semibold text-gray-800 dark:text-gray-300"
                                                            >Black Heals For Women</span
                                                        >
                                                        <span
                                                            class="block text-xs !font-normal text-gray-400 dark:text-white/80"
                                                            >#2343</span
                                                        >
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="text-base font-semibold !text-success">#user1</td>
                                            <td>
                                                <div class="flex space-x-3 text-start rtl:space-x-reverse">
                                                    <img
                                                        class="avatar avatar-sm rounded-sm"
                                                        src="/images/users/avatar-2.png"
                                                        alt="Image Description" />
                                                    <div class="my-auto block">
                                                        <p
                                                            class="my-auto block text-sm font-semibold text-gray-800 dark:text-white">
                                                            Socrates Itumay
                                                        </p>
                                                        <span
                                                            class="my-auto block text-xs !font-normal text-gray-400 dark:text-white/80"
                                                            >socratesitumay@gmail.com</span
                                                        >
                                                    </div>
                                                </div>
                                            </td>
                                            <td>10-12-2022</td>
                                            <td>
                                                <span
                                                    class="inline-block truncate whitespace-nowrap rounded-full bg-success/10 px-3 py-1 text-xs font-medium text-success/80"
                                                    >Success</span
                                                >
                                            </td>
                                            <td>$999</td>
                                            <td class="space-x-2 font-medium rtl:space-x-reverse">
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="View"
                                                        data-theme="primary"
                                                        class="tw-primary-action">
                                                        <span class="icon-[mdi--eye]"></span>
                                                    </a>
                                                </div>
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="Edit"
                                                        data-theme="warning"
                                                        class="tw-warning-action">
                                                        <span class="icon-[mdi--pen]"></span>
                                                    </a>
                                                </div>
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="Delete"
                                                        data-theme="danger"
                                                        class="tw-danger-action">
                                                        <span class="icon-[mdi--delete-outline]"></span>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>
                                                <div class="flex w-full space-x-3 rtl:space-x-reverse">
                                                    <img
                                                        class="avatar rounded-sm bg-gray-100 p-2 dark:bg-black/20"
                                                        src="/images/products/02.png"
                                                        alt="Image Description" />
                                                    <div class="my-auto block w-full">
                                                        <span
                                                            class="block min-w-[180px] truncate text-sm font-semibold text-gray-800 dark:text-gray-300">
                                                            White Tshirt
                                                        </span>
                                                        <span
                                                            class="block text-xs !font-normal text-gray-400 dark:text-white/80">
                                                            #5655
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="text-base font-semibold !text-success">#user2</td>
                                            <td>
                                                <div class="flex space-x-3 text-start rtl:space-x-reverse">
                                                    <img
                                                        class="avatar avatar-sm rounded-sm"
                                                        src="/images/users/avatar-3.png"
                                                        alt="Image Description" />
                                                    <div class="my-auto block">
                                                        <p
                                                            class="my-auto block text-sm font-semibold text-gray-800 dark:text-white">
                                                            Json Taylor
                                                        </p>
                                                        <span
                                                            class="my-auto block text-xs !font-normal text-gray-400 dark:text-white/80"
                                                            >jsontaylor2416@gmail.com</span
                                                        >
                                                    </div>
                                                </div>
                                            </td>
                                            <td>11-12-2022</td>
                                            <td>
                                                <span
                                                    class="inline-block truncate whitespace-nowrap rounded-full bg-info/10 px-3 py-1 text-xs font-medium text-info/80"
                                                    >Shipping</span
                                                >
                                            </td>
                                            <td>$699</td>
                                            <td class="space-x-2 font-medium rtl:space-x-reverse">
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="View"
                                                        data-theme="primary"
                                                        class="tw-primary-action">
                                                        <span class="icon-[mdi--eye]"></span>
                                                    </a>
                                                </div>
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="Edit"
                                                        data-theme="warning"
                                                        class="tw-warning-action">
                                                        <span class="icon-[mdi--pen]"></span>
                                                    </a>
                                                </div>
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="Delete"
                                                        data-theme="danger"
                                                        class="tw-danger-action">
                                                        <span class="icon-[mdi--delete-outline]"></span>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>
                                                <div class="flex w-full space-x-3 rtl:space-x-reverse">
                                                    <img
                                                        class="avatar rounded-sm bg-gray-100 p-2 dark:bg-black/20"
                                                        src="/images/products/03.png"
                                                        alt="Image Description" />
                                                    <div class="my-auto block w-full">
                                                        <span
                                                            class="block min-w-[180px] truncate text-sm font-semibold text-gray-800 dark:text-gray-300"
                                                            >Jacket For Men</span
                                                        >
                                                        <span
                                                            class="block text-xs !font-normal text-gray-400 dark:text-white/80"
                                                            >#15245</span
                                                        >
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="text-base font-semibold !text-success">#user3</td>
                                            <td>
                                                <div class="flex space-x-3 text-start rtl:space-x-reverse">
                                                    <img
                                                        class="avatar avatar-sm rounded-sm"
                                                        src="/images/users/avatar-4.png"
                                                        alt="Image Description" />
                                                    <div class="my-auto block">
                                                        <p
                                                            class="my-auto block text-sm font-semibold text-gray-800 dark:text-white">
                                                            Suzika Stallone
                                                        </p>
                                                        <span
                                                            class="my-auto block text-xs !font-normal text-gray-400 dark:text-white/80"
                                                            >suzikastallone3214@gmail.com</span
                                                        >
                                                    </div>
                                                </div>
                                            </td>
                                            <td>12-12-2022</td>
                                            <td>
                                                <span
                                                    class="inline-block truncate whitespace-nowrap rounded-full bg-warning/10 px-3 py-1 text-xs font-medium text-warning/80"
                                                    >Out For Delivery</span
                                                >
                                            </td>
                                            <td>$599</td>
                                            <td class="space-x-2 font-medium rtl:space-x-reverse">
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="View"
                                                        data-theme="primary"
                                                        class="tw-primary-action">
                                                        <span class="icon-[mdi--eye]"></span>
                                                    </a>
                                                </div>
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="Edit"
                                                        data-theme="warning"
                                                        class="tw-warning-action">
                                                        <span class="icon-[mdi--pen]"></span>
                                                    </a>
                                                </div>
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="Delete"
                                                        data-theme="danger"
                                                        class="tw-danger-action">
                                                        <span class="icon-[mdi--delete-outline]"></span>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>
                                                <div class="flex w-full space-x-3 rtl:space-x-reverse">
                                                    <img
                                                        class="avatar rounded-sm bg-gray-100 p-2 dark:bg-black/20"
                                                        src="/images/products/04.png"
                                                        alt="Image Description" />
                                                    <div class="my-auto block w-full">
                                                        <span
                                                            class="block min-w-[180px] truncate text-sm font-semibold text-gray-800 dark:text-gray-300"
                                                            >Airpods</span
                                                        >
                                                        <span
                                                            class="block text-xs !font-normal text-gray-400 dark:text-white/80"
                                                            >#45415</span
                                                        >
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="text-base font-semibold !text-success">#user4</td>
                                            <td>
                                                <div class="flex space-x-3 text-start rtl:space-x-reverse">
                                                    <img
                                                        class="avatar avatar-sm rounded-sm"
                                                        src="/images/users/avatar-5.png"
                                                        alt="Image Description" />
                                                    <div class="my-auto block">
                                                        <p
                                                            class="my-auto block text-sm font-semibold text-gray-800 dark:text-white">
                                                            Selena Deoyl
                                                        </p>
                                                        <span
                                                            class="my-auto block text-xs !font-normal text-gray-400 dark:text-white/80"
                                                            >selenadeoyl114@gmail.com</span
                                                        >
                                                    </div>
                                                </div>
                                            </td>
                                            <td>12-12-2022</td>
                                            <td>
                                                <span
                                                    class="inline-block truncate whitespace-nowrap rounded-full bg-danger/10 px-3 py-1 text-xs font-medium text-danger/80"
                                                    >Cancelled</span
                                                >
                                            </td>
                                            <td>$299</td>
                                            <td class="space-x-2 font-medium rtl:space-x-reverse">
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="View"
                                                        data-theme="primary"
                                                        class="tw-primary-action">
                                                        <span class="icon-[mdi--eye]"></span>
                                                    </a>
                                                </div>
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="Edit"
                                                        data-theme="warning"
                                                        class="tw-warning-action">
                                                        <span class="icon-[mdi--pen]"></span>
                                                    </a>
                                                </div>
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="Delete"
                                                        data-theme="danger"
                                                        class="tw-danger-action">
                                                        <span class="icon-[mdi--delete-outline]"></span>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>
                                                <div class="flex w-full space-x-3 rtl:space-x-reverse">
                                                    <img
                                                        class="avatar rounded-sm bg-gray-100 p-2 dark:bg-black/20"
                                                        src="/images/products/05.png"
                                                        alt="Image Description" />
                                                    <div class="my-auto block w-full">
                                                        <span
                                                            class="block min-w-[180px] truncate text-sm font-semibold text-gray-800 dark:text-gray-300"
                                                            >Jasmine Fragrance</span
                                                        >
                                                        <span
                                                            class="block text-xs !font-normal text-gray-400 dark:text-white/80"
                                                            >#35656</span
                                                        >
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="text-base font-semibold !text-success">#user5</td>
                                            <td>
                                                <div class="flex space-x-3 text-start rtl:space-x-reverse">
                                                    <img
                                                        class="avatar avatar-sm rounded-sm"
                                                        src="/images/users/avatar-9.png"
                                                        alt="Image Description" />
                                                    <div class="my-auto block">
                                                        <p
                                                            class="my-auto block text-sm font-semibold text-gray-800 dark:text-white">
                                                            Roman Killon
                                                        </p>
                                                        <span
                                                            class="my-auto block text-xs !font-normal text-gray-400 dark:text-white/80"
                                                            >romankillon143@gmail.com</span
                                                        >
                                                    </div>
                                                </div>
                                            </td>
                                            <td>13-12-2022</td>
                                            <td>
                                                <span
                                                    class="inline-block truncate whitespace-nowrap rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary/80"
                                                    >Ordered</span
                                                >
                                            </td>
                                            <td>$299</td>
                                            <td class="space-x-2 font-medium rtl:space-x-reverse">
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="View"
                                                        data-theme="primary"
                                                        class="tw-primary-action">
                                                        <span class="icon-[mdi--eye]"></span>
                                                    </a>
                                                </div>
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="Edit"
                                                        data-theme="warning"
                                                        class="tw-warning-action">
                                                        <span class="icon-[mdi--pen]"></span>
                                                    </a>
                                                </div>
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="Delete"
                                                        data-theme="danger"
                                                        class="tw-danger-action">
                                                        <span class="icon-[mdi--delete-outline]"></span>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>
                                                <div class="flex w-full space-x-3 rtl:space-x-reverse">
                                                    <img
                                                        class="avatar rounded-sm bg-gray-100 p-2 dark:bg-black/20"
                                                        src="/images/products/01.png"
                                                        alt="Image Description" />
                                                    <div class="my-auto block w-full">
                                                        <span
                                                            class="block min-w-[180px] truncate text-sm font-semibold text-gray-800 dark:text-gray-300"
                                                            >Smart Watch</span
                                                        >
                                                        <span
                                                            class="block text-xs !font-normal text-gray-400 dark:text-white/80"
                                                            >#622545</span
                                                        >
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="text-base font-semibold !text-success">#user6</td>
                                            <td>
                                                <div class="flex space-x-3 text-start rtl:space-x-reverse">
                                                    <img
                                                        class="avatar avatar-sm rounded-sm"
                                                        src="/images/users/avatar-10.png"
                                                        alt="Image Description" />
                                                    <div class="my-auto block">
                                                        <p
                                                            class="my-auto block text-sm font-semibold text-gray-800 dark:text-white">
                                                            Charlie Davieson
                                                        </p>
                                                        <span
                                                            class="my-auto block text-xs !font-normal text-gray-400 dark:text-white/80"
                                                            >charliedavieson@gmail.com</span
                                                        >
                                                    </div>
                                                </div>
                                            </td>
                                            <td>13-12-2022</td>
                                            <td>
                                                <span
                                                    class="inline-block truncate whitespace-nowrap rounded-full bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary/80"
                                                    >Packed</span
                                                >
                                            </td>
                                            <td>$299</td>
                                            <td class="space-x-2 font-medium rtl:space-x-reverse">
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="View"
                                                        data-theme="primary"
                                                        class="tw-primary-action">
                                                        <span class="icon-[mdi--eye]"></span>
                                                    </a>
                                                </div>
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="Edit"
                                                        data-theme="warning"
                                                        class="tw-warning-action">
                                                        <span class="icon-[mdi--pen]"></span>
                                                    </a>
                                                </div>
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="Delete"
                                                        data-theme="danger"
                                                        class="tw-danger-action">
                                                        <span class="icon-[mdi--delete-outline]"></span>
                                                    </a>
                                                </div>
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
    </main>
</template>
