<script setup lang="ts">
    import { teamOverview } from './data';
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
                            <span class="breadcrumb-item-current"> HRM </span>
                        </div>
                    </li>
                </ol>
            </div>
        </nav>
        <!-- End:Breadcrumb -->

        <div class="space-y-4">
            <div class="grid grid-cols-12 gap-x-5">
                <div class="col-span-12 sm:col-span-6 xl:col-span-3">
                    <div class="card">
                        <div class="card-body">
                            <div class="flex">
                                <div class="ltr:mr-3 rtl:ml-3">
                                    <div class="avatar rounded-sm bg-primary/20 p-2.5 text-primary">
                                        <span class="icon-[mdi--account] h-6 w-6">people</span>
                                    </div>
                                </div>
                                <div class="flex-1">
                                    <p class="text-sm">Total Employees</p>
                                    <div class="flex items-center justify-between">
                                        <h5 class="mb-0 text-2xl font-semibold text-gray-800 dark:text-white">1,238</h5>
                                        <span class="badge rounded-sm bg-success/20 p-1 text-success">
                                            <span class="icon-[mdi--chart-line-variant] text-sm/none"></span>
                                            +1.03%
                                        </span>
                                    </div>
                                    <span class="text-xs text-gray-500 dark:text-white/70">This Month</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-span-12 sm:col-span-6 xl:col-span-3">
                    <div class="card">
                        <div class="card-body">
                            <div class="flex">
                                <div class="ltr:mr-3 rtl:ml-3">
                                    <div class="avatar rounded-sm bg-primary/20 p-2.5 text-primary">
                                        <span class="icon-[mdi--account-group] text-2xl/none">group_add</span>
                                    </div>
                                </div>
                                <div class="flex-1">
                                    <p class="text-sm">Employees In Leave</p>
                                    <div class="flex items-center justify-between">
                                        <h5 class="mb-0 text-2xl font-semibold text-gray-800 dark:text-white">116</h5>
                                        <span class="badge rounded-sm bg-success/20 p-1 text-success">
                                            <span class="icon-[mdi--chart-line-variant] text-sm/none"></span>
                                            +0.36%
                                        </span>
                                    </div>
                                    <span class="text-xs text-gray-500 dark:text-white/70">This Month</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-span-12 sm:col-span-6 xl:col-span-3">
                    <div class="card">
                        <div class="card-body">
                            <div class="flex">
                                <div class="ltr:mr-3 rtl:ml-3">
                                    <div class="avatar rounded-sm bg-primary/20 p-2.5 text-primary">
                                        <span class="icon-[mdi--work] text-2xl/none">work</span>
                                    </div>
                                </div>
                                <div class="flex-1">
                                    <p class="text-sm">Total Clients</p>
                                    <div class="flex items-center justify-between">
                                        <h5 class="mb-0 text-2xl font-semibold text-gray-800 dark:text-white">2,159</h5>
                                        <span class="badge rounded-sm bg-danger/20 p-1 text-danger">
                                            <span class="icon-[mdi--chart-line-variant] rotate-180 text-sm/none"></span>
                                            -1.28%
                                        </span>
                                    </div>
                                    <span class="text-xs text-gray-500 dark:text-white/70">This Month</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-span-12 sm:col-span-6 xl:col-span-3">
                    <div class="card">
                        <div class="card-body">
                            <div class="flex">
                                <div class="ltr:mr-3 rtl:ml-3">
                                    <div class="avatar rounded-sm bg-primary/20 p-2.5 text-primary">
                                        <span class="icon-[mdi--google-analytics] text-2xl/none"></span>
                                    </div>
                                </div>
                                <div class="flex-1">
                                    <p class="text-sm">New Leads</p>
                                    <div class="flex items-center justify-between">
                                        <h5 class="mb-0 text-2xl font-semibold text-gray-800 dark:text-white">773</h5>
                                        <span class="badge rounded-sm bg-success/20 p-1 text-success">
                                            <span class="icon-[mdi--chart-line-variant] rotate-180 text-sm/none"></span>
                                            +4.25%
                                        </span>
                                    </div>
                                    <span class="text-xs text-gray-500 dark:text-white/70">This Month</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-12 gap-x-5">
                <div class="col-span-12 xl:col-span-6">
                    <div class="card h-full">
                        <div class="card-header">
                            <div class="justify-between sm:flex">
                                <h5 class="card-title my-auto">Team Overview</h5>
                                <div class="inline-flex rounded-md shadow-sm">
                                    <button
                                        type="button"
                                        class="btn btn-outline-primary rounded-r-none border-r-0 px-3 py-2 text-xs">
                                        1D
                                    </button>
                                    <button
                                        type="button"
                                        class="btn btn-outline-primary rounded-none border-r-0 px-3 py-2 text-xs">
                                        1W
                                    </button>
                                    <button
                                        type="button"
                                        class="btn btn-outline-primary rounded-none border-r-0 px-3 py-2 text-xs">
                                        1M
                                    </button>
                                    <button
                                        type="button"
                                        class="btn btn-outline-primary rounded-none border-r-0 px-3 py-2 text-xs">
                                        3M
                                    </button>
                                    <button
                                        type="button"
                                        class="btn btn-outline-primary rounded-none border-r-0 px-3 py-2 text-xs">
                                        6M
                                    </button>
                                    <button
                                        type="button"
                                        class="btn btn-primary rounded-l-none border-0 px-3 py-2 text-xs">
                                        1Y
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <div id="performanceReport" style="min-height: 325px">
                                <apexchart :options="teamOverview" :series="teamOverview.series" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-span-12 md:col-span-6 xl:col-span-3">
                    <div class="card h-full">
                        <div class="card-header flex justify-between">
                            <div class="card-title my-auto">Upcoming Events</div>
                            <div>
                                <button
                                    type="button"
                                    aria-label="button"
                                    class="ti-btn ti-btn-soft-primary m-0 py-1 ltr:mr-2 rtl:ml-2">
                                    View All
                                </button>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="overflow-x-auto">
                                <ul class="list-unstyled timeline-widget mb-0">
                                    <li class="ti-list-group timeline-widget-list w-full border-0 p-0">
                                        <div class="flex w-full">
                                            <div class="text-center ltr:mr-12 rtl:ml-12">
                                                <span class="block text-sm font-semibold">02</span>
                                                <span class="block text-xs text-gray-500 dark:text-white/70">Mon</span>
                                            </div>
                                            <div class="flex flex-auto flex-wrap items-center justify-between">
                                                <div>
                                                    <a href="javascript:void(0);">
                                                        <p
                                                            class="timeline-widget-content mb-1 !max-w-[15rem] truncate text-wrap text-sm">
                                                            You have an announcement - Ipsum Est Diam Eirmod
                                                        </p>
                                                        <p
                                                            class="mb-0 text-xs leading-none text-gray-500 dark:text-white/70">
                                                            10:00AM<span
                                                                class="badge rounded-sm bg-primary/10 py-1 text-xs text-primary ltr:ml-2 rtl:mr-2"
                                                                >Announcement</span
                                                            >
                                                        </p>
                                                    </a>
                                                </div>
                                                <div class="dropdown">
                                                    <button class="dropdown-toggle text-lg leading-none text-gray-500">
                                                        <span class="icon-[mdi--dots-vertical] text-sm/none"></span>
                                                    </button>
                                                    <ul class="dropdown-menu">
                                                        <li>
                                                            <a class="dropdown-link" href="javascript:void(0);">
                                                                Action
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-link" href="javascript:void(0);">
                                                                Another action
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-link" href="javascript:void(0);">
                                                                Something else here
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="ti-list-group timeline-widget-list w-full border-0 p-0">
                                        <div class="flex w-full">
                                            <div class="text-center ltr:mr-12 rtl:ml-12">
                                                <span class="block text-sm font-semibold">15</span>
                                                <span class="block text-xs text-gray-500 dark:text-white/70">Sun</span>
                                            </div>
                                            <div class="flex flex-auto flex-wrap items-center justify-between">
                                                <div>
                                                    <a href="javascript:void(0);">
                                                        <p
                                                            class="timeline-widget-content mb-1 !max-w-[15rem] truncate text-wrap text-sm">
                                                            National holiday - Vero Jayanti
                                                        </p>
                                                        <p
                                                            class="mb-0 text-xs leading-none text-gray-500 dark:text-white/70">
                                                            <span
                                                                class="badge rounded-sm bg-warning/10 py-1 text-xs text-warning ltr:ml-2 rtl:mr-2"
                                                                >Holiday</span
                                                            >
                                                        </p></a
                                                    >
                                                </div>
                                                <div class="dropdown">
                                                    <button class="dropdown-toggle text-lg leading-none text-gray-500">
                                                        <span class="icon-[mdi--dots-vertical] text-sm/none"></span>
                                                    </button>
                                                    <ul class="dropdown-menu">
                                                        <li>
                                                            <a class="dropdown-link" href="javascript:void(0);">
                                                                Action
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-link" href="javascript:void(0);">
                                                                Another action
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-link" href="javascript:void(0);">
                                                                Something else here
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="ti-list-group timeline-widget-list w-full border-0 p-0">
                                        <div class="flex w-full">
                                            <div class="text-center ltr:mr-12 rtl:ml-12">
                                                <span class="block text-sm font-semibold">23</span>
                                                <span class="block text-xs text-gray-500 dark:text-white/70">Mon</span>
                                            </div>
                                            <div class="flex flex-auto flex-wrap items-center justify-between">
                                                <div>
                                                    <a href="javascript:void(0);">
                                                        <p
                                                            class="timeline-widget-content mb-1 !max-w-[15rem] truncate text-wrap text-sm">
                                                            John pup birthday - Team Member
                                                        </p>
                                                        <p
                                                            class="mb-4 text-xs leading-none text-gray-500 dark:text-white/70">
                                                            09:00AM<span class="badge bg-success/10 ltr:ml-2 rtl:mr-2"
                                                                >Birthday</span
                                                            >
                                                        </p>
                                                        <p
                                                            class="timeline-widget-content mb-1 !max-w-[15rem] truncate text-wrap text-sm">
                                                            Amet sed no dolor kasd - Et Dolores Tempor Erat
                                                        </p>
                                                        <p
                                                            class="mb-0 text-xs leading-none text-gray-500 dark:text-white/70">
                                                            04:00PM<span
                                                                class="badge rounded-sm bg-primary/10 py-1 text-xs text-primary ltr:ml-2 rtl:mr-2"
                                                                >Announcement</span
                                                            >
                                                        </p></a
                                                    >
                                                </div>
                                                <div class="dropdown">
                                                    <button class="dropdown-toggle text-lg leading-none text-gray-500">
                                                        <span class="icon-[mdi--dots-vertical] text-sm/none"></span>
                                                    </button>
                                                    <ul class="dropdown-menu">
                                                        <li>
                                                            <a class="dropdown-link" href="javascript:void(0);">
                                                                Action
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-link" href="javascript:void(0);">
                                                                Another action
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-link" href="javascript:void(0);">
                                                                Something else here
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="ti-list-group timeline-widget-list w-full border-0 p-0">
                                        <div class="flex w-full">
                                            <div class="text-center ltr:mr-12 rtl:ml-12">
                                                <span class="block text-sm font-semibold">31</span>
                                                <span class="block text-xs text-gray-500 dark:text-white/70">Tue</span>
                                            </div>
                                            <div class="flex flex-auto flex-wrap items-center justify-between">
                                                <div>
                                                    <a href="javascript:void(0);">
                                                        <p
                                                            class="timeline-widget-content mb-1 !max-w-[15rem] truncate text-wrap text-sm">
                                                            National Holiday - Dolore Ipsum
                                                        </p>
                                                        <p
                                                            class="mb-0 text-xs leading-none text-gray-500 dark:text-white/70">
                                                            <span
                                                                class="badge rounded-sm bg-warning/10 py-1 text-xs text-warning ltr:ml-2 rtl:mr-2"
                                                                >Holiday</span
                                                            >
                                                        </p></a
                                                    >
                                                </div>
                                                <div class="dropdown">
                                                    <button class="dropdown-toggle text-lg leading-none text-gray-500">
                                                        <span class="icon-[mdi--dots-vertical] text-sm/none"></span>
                                                    </button>
                                                    <ul class="dropdown-menu">
                                                        <li>
                                                            <a class="dropdown-link" href="javascript:void(0);">
                                                                Action
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-link" href="javascript:void(0);">
                                                                Another action
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-link" href="javascript:void(0);">
                                                                Something else here
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-span-12 md:col-span-6 xl:col-span-3">
                    <div class="card h-full">
                        <div class="card-header flex justify-between">
                            <div class="card-title my-auto">Notice Board</div>
                            <div>
                                <button
                                    type="button"
                                    aria-label="button"
                                    class="ti-btn ti-btn-soft-primary m-0 py-1 ltr:mr-2 rtl:ml-2">
                                    View All
                                </button>
                            </div>
                        </div>
                        <div class="card-body">
                            <ul class="list-unstyled mb-0">
                                <li class="ti-list-group mb-6 w-full border-0 p-0">
                                    <div class="flex border-0">
                                        <div class="ltr:mr-3 rtl:ml-3">
                                            <div class="calendar-icon icons">
                                                <div
                                                    class="avatar rounded-sm bg-primary/20 p-1.5 text-center text-sm leading-none text-primary">
                                                    <span class="mb-1 block">10</span>
                                                    <span class="block">April</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="my-auto ltr:ml-1 rtl:mr-1">
                                            <div class="text-sm font-semibold text-gray-800 dark:text-white">
                                                Board meeting Completed
                                            </div>
                                            <small class="text-xs font-normal text-gray-500 dark:text-white/70"
                                                >attend the company mangers...</small
                                            >
                                        </div>
                                    </div>
                                </li>
                                <li class="ti-list-group mb-6 w-full border-0 p-0">
                                    <div class="flex border-0">
                                        <div class="ltr:mr-3 rtl:ml-3">
                                            <div class="calendar-icon icons">
                                                <div
                                                    class="avatar rounded-sm bg-info/20 p-1.5 text-center text-sm leading-none text-info">
                                                    <span class="mb-1 block">07</span>
                                                    <span class="block">April</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="my-auto ltr:ml-1 rtl:mr-1">
                                            <div class="text-sm font-semibold text-gray-800 dark:text-white">
                                                Good Friday
                                            </div>
                                            <small class="text-xs font-normal text-gray-500 dark:text-white/70"
                                                >participate the all employess</small
                                            >
                                        </div>
                                    </div>
                                </li>
                                <li class="ti-list-group mb-6 w-full border-0 p-0">
                                    <div class="flex border-0">
                                        <div class="ltr:mr-3 rtl:ml-3">
                                            <div class="calendar-icon icons">
                                                <div
                                                    class="avatar rounded-sm bg-secondary/20 p-1.5 text-center text-sm leading-none text-secondary">
                                                    <span class="mb-1 block">16</span>
                                                    <span class="block">April</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="my-auto ltr:ml-1 rtl:mr-1">
                                            <div class="text-sm font-semibold text-gray-800 dark:text-white">
                                                Updated the Company Policy
                                            </div>
                                            <small class="text-xs font-normal text-gray-500 dark:text-white/70"
                                                >some changes &amp; add the terms &amp; conditions</small
                                            >
                                        </div>
                                    </div>
                                </li>
                                <li class="ti-list-group mb-6 w-full border-0 p-0">
                                    <div class="flex border-0">
                                        <div class="ltr:mr-3 rtl:ml-3">
                                            <div class="calendar-icon icons">
                                                <div
                                                    class="avatar rounded-sm bg-warning/20 p-1.5 text-center text-sm leading-none text-warning">
                                                    <span class="mb-1 block">20</span>
                                                    <span class="block">April</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="my-auto ltr:ml-1 rtl:mr-1">
                                            <div class="text-sm font-semibold text-gray-800 dark:text-white">
                                                Office Timings Changed
                                            </div>
                                            <small class="text-xs font-normal text-gray-500 dark:text-white/70"
                                                >this effetct after May 01st 9:00 Am To 5:00 Pm</small
                                            >
                                        </div>
                                    </div>
                                </li>
                                <li class="ti-list-group mb-0 w-full border-0 p-0">
                                    <div class="flex border-0">
                                        <div class="ltr:mr-3 rtl:ml-3">
                                            <div class="calendar-icon icons">
                                                <div
                                                    class="avatar rounded-sm bg-danger/20 p-1.5 text-center text-sm leading-none text-danger">
                                                    <span class="mb-1 block">01</span>
                                                    <span class="block">May</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="my-auto ltr:ml-1 rtl:mr-1">
                                            <div class="text-sm font-semibold text-gray-800 dark:text-white">
                                                May Day
                                            </div>
                                            <small class="text-xs font-normal text-gray-500 dark:text-white/70"
                                                >participate the all employess</small
                                            >
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-12 gap-x-5">
                <div class="col-span-12">
                    <div class="card">
                        <div class="card-body p-0">
                            <div class="grid grid-cols-12">
                                <div
                                    class="col-span-12 border-b border-gray-200 dark:border-white/10 sm:col-span-6 sm:border-b-0 xl:col-span-3 ltr:border-r rtl:border-l">
                                    <div class="flex flex-wrap items-center p-6">
                                        <div class="leading-none ltr:mr-3 rtl:ml-3">
                                            <span
                                                class="avatar inline-flex items-center justify-center rounded-full bg-primary/20 text-primary shadow-sm">
                                                <span class="icon-[mdi--cube-scan] text-lg"></span>
                                            </span>
                                        </div>
                                        <div class="flex-1 font-semibold">
                                            <div class="mb-2 flex items-center justify-between">
                                                <p class="mb-0 text-gray-800 dark:text-white">Projects</p>
                                                <span>85/120</span>
                                            </div>
                                            <div class="ti-main-progress mb-2 bg-gray-200 dark:bg-black/20">
                                                <div
                                                    class="h-2.5 w-7/12 rounded-full rounded-bl-full bg-primary text-center text-xs text-white"
                                                    role="progressbar"
                                                    style="width: 55%"
                                                    aria-valuenow="55"
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"></div>
                                            </div>
                                            <a
                                                href="javascript:void(0);"
                                                class="flex text-xs text-gray-500 dark:text-white/70">
                                                Full Details
                                                <i class="icon-[mdi--trending-neutral] ltr:ml-2 rtl:mr-2"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="col-span-12 border-b border-gray-200 dark:border-white/10 sm:col-span-6 sm:border-b-0 xl:col-span-3 ltr:border-r rtl:border-l">
                                    <div class="flex flex-wrap items-center p-6">
                                        <div class="leading-none ltr:mr-3 rtl:ml-3">
                                            <span
                                                class="avatar inline-flex items-center justify-center rounded-full bg-secondary/20 text-secondary shadow-sm">
                                                <span class="icon-[mdi--ticket-confirmation-outline] text-lg"></span>
                                            </span>
                                        </div>
                                        <div class="flex-1 font-semibold">
                                            <div class="mb-2 flex items-center justify-between">
                                                <p class="mb-0 text-gray-800 dark:text-white">Open Tickets</p>
                                                <span>350/390</span>
                                            </div>
                                            <div class="ti-main-progress mb-2 bg-gray-200 dark:bg-black/20">
                                                <div
                                                    class="h-2.5 w-7/12 rounded-full rounded-bl-full bg-secondary text-center text-xs text-white"
                                                    role="progressbar"
                                                    style="width: 75%"
                                                    aria-valuenow="75"
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"></div>
                                            </div>
                                            <a
                                                href="javascript:void(0);"
                                                class="flex text-xs text-gray-500 dark:text-white/70">
                                                Full Details
                                                <i class="icon-[mdi--trending-neutral] ltr:ml-2 rtl:mr-2"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="col-span-12 border-b border-gray-200 dark:border-white/10 sm:col-span-6 sm:border-b-0 xl:col-span-3 ltr:border-r rtl:border-l">
                                    <div class="flex flex-wrap items-center p-6">
                                        <div class="leading-none ltr:mr-3 rtl:ml-3">
                                            <span
                                                class="avatar inline-flex items-center justify-center rounded-full bg-danger/20 text-danger shadow-sm">
                                                <span class="icon-[mdi--text-box-outline] text-lg"></span>
                                            </span>
                                        </div>
                                        <div class="flex-1 font-semibold">
                                            <div class="mb-2 flex items-center justify-between">
                                                <p class="mb-0 text-gray-800 dark:text-white">Invoices</p>
                                                <span>110/200</span>
                                            </div>
                                            <div class="ti-main-progress mb-2 bg-gray-200 dark:bg-black/20">
                                                <div
                                                    class="h-2.5 w-7/12 rounded-full rounded-bl-full bg-danger text-center text-xs text-white"
                                                    style="width: 75%"
                                                    role="progressbar"
                                                    aria-valuenow="75"
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"></div>
                                            </div>
                                            <a
                                                href="javascript:void(0);"
                                                class="flex text-xs text-gray-500 dark:text-white/70">
                                                Full Details
                                                <i class="icon-[mdi--trending-neutral] ltr:ml-2 rtl:mr-2"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-span-12 sm:col-span-6 xl:col-span-3">
                                    <div class="flex flex-wrap items-center p-6">
                                        <div class="leading-none ltr:mr-3 rtl:ml-3">
                                            <span
                                                class="avatar inline-flex items-center justify-center rounded-full bg-info/20 text-info shadow-sm">
                                                <span class="icon-[mdi--book-open-variant] text-lg"></span>
                                            </span>
                                        </div>
                                        <div class="flex-1 font-semibold">
                                            <div class="mb-2 flex items-center justify-between">
                                                <p class="mb-0 text-gray-800 dark:text-white">Tasks</p>
                                                <span>100/200</span>
                                            </div>
                                            <div class="ti-main-progress mb-2 bg-gray-200 dark:bg-black/20">
                                                <div
                                                    class="h-2.5 w-7/12 rounded-full rounded-bl-full bg-info text-center text-xs text-white"
                                                    style="width: 55%"
                                                    role="progressbar"
                                                    aria-valuenow="55"
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"></div>
                                            </div>
                                            <a
                                                href="javascript:void(0);"
                                                class="flex text-xs text-gray-500 dark:text-white/70">
                                                Full Details
                                                <i class="icon-[mdi--trending-neutral] ltr:ml-2 rtl:mr-2"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-12 gap-x-5">
                <div class="col-span-12 lg:col-span-5">
                    <div class="card">
                        <div class="card-header flex justify-between">
                            <div class="card-title my-auto">Attendance</div>
                            <div class="my-auto block ltr:ml-auto rtl:mr-auto">
                                <button
                                    type="button"
                                    class="ti-btn m-0 rounded-sm !border border-gray-200 p-1 px-3 text-gray-400 hover:border-gray-200 hover:bg-gray-200 hover:text-gray-500 focus:ring-gray-200 dark:border-white/10 dark:hover:border-white/20 dark:hover:bg-black/30 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
                                    View All
                                </button>
                            </div>
                        </div>
                        <div class="card-body attendance-table p-0">
                            <div class="overflow-auto">
                                <table class="tw-table whitespace-nowrap">
                                    <thead>
                                        <tr>
                                            <th scope="col">S.no</th>
                                            <th scope="col">Employee</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Checkin</th>
                                            <th scope="col">Checkout</th>
                                            <th scope="col">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>
                                                <div class="flex w-full space-x-3 rtl:space-x-reverse">
                                                    <img
                                                        class="avatar"
                                                        src="/images/users/avatar-3.png"
                                                        alt="Image Description" />
                                                    <div class="my-auto block w-full">
                                                        <span
                                                            class="block max-w-[180px] truncate text-sm font-semibold text-gray-800 dark:text-gray-300"
                                                            >Alice Rex</span
                                                        >
                                                        <span
                                                            class="block text-xs !font-normal text-gray-400 dark:text-white/80"
                                                            >Tester</span
                                                        >
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span
                                                    class="inline-block whitespace-nowrap rounded-sm bg-success/10 px-3 py-1 text-xs font-medium text-success/80"
                                                    >Present</span
                                                >
                                            </td>
                                            <td>09:30 Am</td>
                                            <td>06:30 Pm</td>
                                            <td class="space-x-2 font-medium rtl:space-x-reverse">
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="Call"
                                                        data-theme="primary"
                                                        class="tw-primary-action">
                                                        <span class="icon-[mdi--headphones] text-sm/none"></span>
                                                    </a>
                                                </div>
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="Message"
                                                        data-theme="warning"
                                                        class="tw-warning-action">
                                                        <span class="icon-[mdi--message-outline] text-sm/none"></span>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>
                                                <div class="flex w-full space-x-3 rtl:space-x-reverse">
                                                    <img
                                                        class="avatar"
                                                        src="/images/users/avatar-5.png"
                                                        alt="Image Description" />
                                                    <div class="my-auto block w-full">
                                                        <span
                                                            class="block max-w-[180px] truncate text-sm font-semibold text-gray-800 dark:text-gray-300"
                                                            >Rehna Eni</span
                                                        >
                                                        <span
                                                            class="block text-xs !font-normal text-gray-400 dark:text-white/80"
                                                            >UI/UX Designer
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span
                                                    class="inline-block whitespace-nowrap rounded-sm bg-success/10 px-3 py-1 text-xs font-medium text-success/80"
                                                    >Present</span
                                                >
                                            </td>
                                            <td>09:45 Am</td>
                                            <td>06:50 Pm</td>
                                            <td class="space-x-2 font-medium rtl:space-x-reverse">
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="Call"
                                                        data-theme="primary"
                                                        class="tw-primary-action">
                                                        <span class="icon-[mdi--headphones] text-sm/none"></span>
                                                    </a>
                                                </div>
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="Message"
                                                        data-theme="warning"
                                                        class="tw-warning-action">
                                                        <span class="icon-[mdi--message-outline] text-sm/none"></span>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>
                                                <div class="flex w-full space-x-3 rtl:space-x-reverse">
                                                    <img
                                                        class="avatar"
                                                        src="/images/users/avatar-6.png"
                                                        alt="Image Description" />
                                                    <div class="my-auto block w-full">
                                                        <span
                                                            class="block max-w-[180px] truncate text-sm font-semibold text-gray-800 dark:text-gray-300">
                                                            Bob Upt</span
                                                        >
                                                        <span
                                                            class="block text-xs !font-normal text-gray-400 dark:text-white/80"
                                                            >Backend
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span
                                                    class="inline-block whitespace-nowrap rounded-sm bg-danger/10 px-3 py-1 text-xs font-medium text-danger/80"
                                                    >Absent</span
                                                >
                                            </td>
                                            <td>00:00 Am</td>
                                            <td>00:00 Pm</td>
                                            <td class="space-x-2 font-medium rtl:space-x-reverse">
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="Call"
                                                        data-theme="primary"
                                                        class="tw-primary-action">
                                                        <span class="icon-[mdi--headphones] text-sm/none"></span>
                                                    </a>
                                                </div>
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="Message"
                                                        data-theme="warning"
                                                        class="tw-warning-action">
                                                        <span class="icon-[mdi--message-outline] text-sm/none"></span>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>
                                                <div class="flex w-full space-x-3 rtl:space-x-reverse">
                                                    <img
                                                        class="avatar"
                                                        src="/images/users/avatar-15.png"
                                                        alt="Image Description" />
                                                    <div class="my-auto block w-full">
                                                        <span
                                                            class="block max-w-[180px] truncate text-sm font-semibold text-gray-800 dark:text-gray-300"
                                                            >Charlie Davieson</span
                                                        >
                                                        <span
                                                            class="block text-xs !font-normal text-gray-400 dark:text-white/80">
                                                            Team Lead
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span
                                                    class="inline-block whitespace-nowrap rounded-sm bg-success/10 px-3 py-1 text-xs font-medium text-success/80"
                                                    >Present</span
                                                >
                                            </td>
                                            <td>10:00 Am</td>
                                            <td>07:00 Pm</td>
                                            <td class="space-x-2 font-medium rtl:space-x-reverse">
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="Call"
                                                        data-theme="primary"
                                                        class="tw-primary-action">
                                                        <span class="icon-[mdi--headphones] text-sm/none"></span>
                                                    </a>
                                                </div>
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="Message"
                                                        data-theme="warning"
                                                        class="tw-warning-action">
                                                        <span class="icon-[mdi--message-outline] text-sm/none"></span>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>
                                                <div class="flex w-full space-x-3 rtl:space-x-reverse">
                                                    <img
                                                        class="avatar"
                                                        src="/images/users/avatar-21.png"
                                                        alt="Image Description" />
                                                    <div class="my-auto block w-full">
                                                        <span
                                                            class="block max-w-[180px] truncate text-sm font-semibold text-gray-800 dark:text-gray-300"
                                                            >Suzika Stallone</span
                                                        >
                                                        <span
                                                            class="block text-xs !font-normal text-gray-400 dark:text-white/80"
                                                            >UI Designer
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span
                                                    class="inline-block whitespace-nowrap rounded-sm bg-success/10 px-3 py-1 text-xs font-medium text-success/80"
                                                    >Present</span
                                                >
                                            </td>
                                            <td>09:30 Am</td>
                                            <td>05:15 Pm</td>
                                            <td class="space-x-2 font-medium rtl:space-x-reverse">
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="Call"
                                                        data-theme="primary"
                                                        class="tw-primary-action">
                                                        <span class="icon-[mdi--headphones] text-sm/none"></span>
                                                    </a>
                                                </div>
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="Message"
                                                        data-theme="warning"
                                                        class="tw-warning-action">
                                                        <span class="icon-[mdi--message-outline] text-sm/none"></span>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>
                                                <div class="flex w-full space-x-3 rtl:space-x-reverse">
                                                    <img
                                                        class="avatar"
                                                        src="/images/users/avatar-12.png"
                                                        alt="Image Description" />
                                                    <div class="my-auto block w-full">
                                                        <span
                                                            class="block max-w-[180px] truncate text-sm font-semibold text-gray-800 dark:text-gray-300"
                                                            >Mc Greggor</span
                                                        >
                                                        <span
                                                            class="block text-xs !font-normal text-gray-400 dark:text-white/80"
                                                            >Java Developer
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span
                                                    class="inline-block whitespace-nowrap rounded-sm bg-danger/10 px-3 py-1 text-xs font-medium text-danger/80"
                                                    >Absent</span
                                                >
                                            </td>
                                            <td>00:00 Am</td>
                                            <td>00:00 Pm</td>
                                            <td class="space-x-2 font-medium rtl:space-x-reverse">
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="Call"
                                                        data-theme="primary"
                                                        class="tw-primary-action">
                                                        <span class="icon-[mdi--headphones] text-sm/none"></span>
                                                    </a>
                                                </div>
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="Message"
                                                        data-theme="warning"
                                                        class="tw-warning-action">
                                                        <span class="icon-[mdi--message-outline] text-sm/none"></span>
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
                <div class="col-span-12 lg:col-span-7">
                    <div class="card">
                        <div class="card-header flex justify-between">
                            <div class="card-title my-auto">Leave Request</div>
                            <div class="my-auto block ltr:ml-auto rtl:mr-auto">
                                <button
                                    type="button"
                                    class="ti-btn m-0 rounded-sm !border border-gray-200 p-1 px-3 text-gray-400 hover:border-gray-200 hover:bg-gray-200 hover:text-gray-500 focus:ring-gray-200 dark:border-white/10 dark:hover:border-white/20 dark:hover:bg-black/30 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
                                    View All
                                </button>
                            </div>
                        </div>
                        <div class="card-body p-0">
                            <div class="overflow-auto">
                                <table class="tw-table whitespace-nowrap">
                                    <thead>
                                        <tr>
                                            <th scope="col">Employee</th>
                                            <th scope="col">Type</th>
                                            <th scope="col">From</th>
                                            <th scope="col">To</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div class="flex w-full space-x-3 rtl:space-x-reverse">
                                                    <img
                                                        class="avatar"
                                                        src="/images/users/avatar-2.png"
                                                        alt="Image Description" />
                                                    <div class="my-auto block w-full">
                                                        <span
                                                            class="block max-w-[180px] truncate text-sm font-semibold text-gray-800 dark:text-gray-300">
                                                            Socrates Itumay
                                                        </span>
                                                        <span
                                                            class="block text-xs !font-normal text-gray-400 dark:text-white/80">
                                                            Team Lead
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Sick Leave</td>
                                            <td>05-04-2023</td>
                                            <td>08-04-2023</td>
                                            <td>
                                                <span
                                                    class="inline-block whitespace-nowrap rounded-sm bg-success/10 px-3 py-1 text-xs font-medium text-success"
                                                    >Approved</span
                                                >
                                            </td>
                                            <td class="space-x-2 font-medium rtl:space-x-reverse">
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="View"
                                                        data-theme="primary"
                                                        class="tw-primary-action">
                                                        <span class="icon-[mdi--eye] text-sm/none"></span>
                                                    </a>
                                                </div>
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="Edit"
                                                        data-theme="warning"
                                                        class="tw-warning-action">
                                                        <span class="icon-[mdi--pen] text-sm/none"></span>
                                                    </a>
                                                </div>
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="Delete"
                                                        data-theme="danger"
                                                        class="tw-danger-action">
                                                        <span class="icon-[mdi--delete] text-sm/none"></span>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="flex w-full space-x-3 rtl:space-x-reverse">
                                                    <img
                                                        class="avatar"
                                                        src="/images/users/avatar-4.png"
                                                        alt="Image Description" />
                                                    <div class="my-auto block w-full">
                                                        <span
                                                            class="block max-w-[180px] truncate text-sm font-semibold text-gray-800 dark:text-gray-300"
                                                            >Samantha Paul</span
                                                        >
                                                        <span
                                                            class="block text-xs !font-normal text-gray-400 dark:text-white/80"
                                                            >Sr.UI Developer</span
                                                        >
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Casual Leave</td>
                                            <td>20-04-2023</td>
                                            <td>24-04-2023</td>
                                            <td>
                                                <span
                                                    class="inline-block whitespace-nowrap rounded-sm bg-warning/10 px-3 py-1 text-xs font-medium text-warning"
                                                    >Pending</span
                                                >
                                            </td>
                                            <td class="space-x-2 font-medium rtl:space-x-reverse">
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="View"
                                                        data-theme="primary"
                                                        class="tw-primary-action">
                                                        <span class="icon-[mdi--eye] text-sm/none"></span>
                                                    </a>
                                                </div>
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="Edit"
                                                        data-theme="warning"
                                                        class="tw-warning-action">
                                                        <span class="icon-[mdi--pen] text-sm/none"></span>
                                                    </a>
                                                </div>
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="Delete"
                                                        data-theme="danger"
                                                        class="tw-danger-action">
                                                        <span class="icon-[mdi--delete] text-sm/none"></span>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="flex w-full space-x-3 rtl:space-x-reverse">
                                                    <img
                                                        class="avatar"
                                                        src="/images/users/avatar-14.png"
                                                        alt="Image Description" />
                                                    <div class="my-auto block w-full">
                                                        <span
                                                            class="block max-w-[180px] truncate text-sm font-semibold text-gray-800 dark:text-gray-300"
                                                            >Gray Noal</span
                                                        >
                                                        <span
                                                            class="block text-xs !font-normal text-gray-400 dark:text-white/80"
                                                            >Java Developer</span
                                                        >
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Paternity Leave</td>
                                            <td>18-04-2023</td>
                                            <td>24-04-2023</td>
                                            <td>
                                                <span
                                                    class="inline-block whitespace-nowrap rounded-sm bg-success/10 px-3 py-1 text-xs font-medium text-success"
                                                    >Approved</span
                                                >
                                            </td>
                                            <td class="space-x-2 font-medium rtl:space-x-reverse">
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="View"
                                                        data-theme="primary"
                                                        class="tw-primary-action">
                                                        <span class="icon-[mdi--eye] text-sm/none"></span>
                                                    </a>
                                                </div>
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="Edit"
                                                        data-theme="warning"
                                                        class="tw-warning-action">
                                                        <span class="icon-[mdi--pen] text-sm/none"></span>
                                                    </a>
                                                </div>
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="Delete"
                                                        data-theme="danger"
                                                        class="tw-danger-action">
                                                        <span class="icon-[mdi--delete] text-sm/none"></span>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="flex w-full space-x-3 rtl:space-x-reverse">
                                                    <img
                                                        class="avatar"
                                                        src="/images/users/avatar-15.png"
                                                        alt="Image Description" />
                                                    <div class="my-auto block w-full">
                                                        <span
                                                            class="block max-w-[180px] truncate text-sm font-semibold text-gray-800 dark:text-gray-300"
                                                            >Gray Noal</span
                                                        >
                                                        <span
                                                            class="block text-xs !font-normal text-gray-400 dark:text-white/80"
                                                            >React Developer</span
                                                        >
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Personal Leave</td>
                                            <td>05-04-2023</td>
                                            <td>06-04-2023</td>
                                            <td>
                                                <span
                                                    class="inline-block whitespace-nowrap rounded-sm bg-danger/10 px-3 py-1 text-xs font-medium text-danger"
                                                    >Rejected</span
                                                >
                                            </td>
                                            <td class="space-x-2 font-medium rtl:space-x-reverse">
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="View"
                                                        data-theme="primary"
                                                        class="tw-primary-action">
                                                        <span class="icon-[mdi--eye] text-sm/none"></span>
                                                    </a>
                                                </div>
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="Edit"
                                                        data-theme="warning"
                                                        class="tw-warning-action">
                                                        <span class="icon-[mdi--pen] text-sm/none"></span>
                                                    </a>
                                                </div>
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="Delete"
                                                        data-theme="danger"
                                                        class="tw-danger-action">
                                                        <span class="icon-[mdi--delete] text-sm/none"></span>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="flex w-full space-x-3 rtl:space-x-reverse">
                                                    <img
                                                        class="avatar"
                                                        src="/images/users/avatar-8.png"
                                                        alt="Image Description" />
                                                    <div class="my-auto block w-full">
                                                        <span
                                                            class="block max-w-[180px] truncate text-sm font-semibold text-gray-800 dark:text-gray-300"
                                                            >Emiley Jackson</span
                                                        >
                                                        <span
                                                            class="block text-xs !font-normal text-gray-400 dark:text-white/80"
                                                            >Full Stack Developer</span
                                                        >
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Maternity Leave</td>
                                            <td>05-04-2023</td>
                                            <td>06-06-2023</td>
                                            <td>
                                                <span
                                                    class="inline-block whitespace-nowrap rounded-sm bg-success/10 px-3 py-1 text-xs font-medium text-success"
                                                    >Approved</span
                                                >
                                            </td>
                                            <td class="space-x-2 font-medium rtl:space-x-reverse">
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="View"
                                                        data-theme="primary"
                                                        class="tw-primary-action">
                                                        <span class="icon-[mdi--eye] text-sm/none"></span>
                                                    </a>
                                                </div>
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="Edit"
                                                        data-theme="warning"
                                                        class="tw-warning-action">
                                                        <span class="icon-[mdi--pen] text-sm/none"></span>
                                                    </a>
                                                </div>
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="Delete"
                                                        data-theme="danger"
                                                        class="tw-danger-action">
                                                        <span class="icon-[mdi--delete] text-sm/none"></span>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="flex w-full space-x-3 rtl:space-x-reverse">
                                                    <img
                                                        class="avatar"
                                                        src="/images/users/avatar-16.png"
                                                        alt="Image Description" />
                                                    <div class="my-auto block w-full">
                                                        <span
                                                            class="block max-w-[180px] truncate text-sm font-semibold text-gray-800 dark:text-gray-300"
                                                            >Pope Johnson</span
                                                        >
                                                        <span
                                                            class="block text-xs !font-normal text-gray-400 dark:text-white/80"
                                                            >Jr.Java Developer</span
                                                        >
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Gifted Leave</td>
                                            <td>06-04-2023</td>
                                            <td>20-04-2023</td>
                                            <td>
                                                <span
                                                    class="inline-block whitespace-nowrap rounded-sm bg-warning/10 px-3 py-1 text-xs font-medium text-warning"
                                                    >Pending</span
                                                >
                                            </td>
                                            <td class="space-x-2 font-medium rtl:space-x-reverse">
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="View"
                                                        data-theme="primary"
                                                        class="tw-primary-action">
                                                        <span class="icon-[mdi--eye] text-sm/none"></span>
                                                    </a>
                                                </div>
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="Edit"
                                                        data-theme="warning"
                                                        class="tw-warning-action">
                                                        <span class="icon-[mdi--pen] text-sm/none"></span>
                                                    </a>
                                                </div>
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="Delete"
                                                        data-theme="danger"
                                                        class="tw-danger-action">
                                                        <span class="icon-[mdi--delete] text-sm/none"></span>
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

            <div class="grid grid-cols-12 gap-x-6">
                <div class="col-span-12">
                    <div class="card">
                        <div class="card-header">
                            <div class="flex">
                                <h5 class="card-title my-auto">Employee Salary Details</h5>
                                <div class="my-auto block ltr:ml-auto rtl:mr-auto">
                                    <button
                                        type="button"
                                        class="ti-btn m-0 rounded-sm !border border-gray-200 p-1 px-3 text-gray-400 hover:border-gray-200 hover:bg-gray-200 hover:text-gray-500 focus:ring-gray-200 dark:border-white/10 dark:hover:border-white/20 dark:hover:bg-black/30 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
                                        View All
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="overflow-auto">
                                <table id="employeeTable" class="tw-table table-bordered whitespace-nowrap rounded-sm">
                                    <thead class="bg-gray-50 dark:bg-black/20">
                                        <tr>
                                            <th scope="col" class="dark:text-white/80">S.no</th>
                                            <th scope="col" class="dark:text-white/80">Employee Details</th>
                                            <th scope="col" class="dark:text-white/80">Department</th>
                                            <th scope="col" class="dark:text-white/80">Designation</th>
                                            <th scope="col" class="dark:text-white/80">Salary</th>
                                            <th scope="col" class="dark:text-white/80">Leaves</th>
                                            <th scope="col" class="dark:text-white/80">Net Salary</th>
                                            <th scope="col" class="dark:text-white/80">Status</th>
                                            <th scope="col" class="dark:text-white/80">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>
                                                <div class="flex w-full min-w-[200px] space-x-3 rtl:space-x-reverse">
                                                    <img
                                                        class="avatar"
                                                        src="/images/users/avatar-8.png"
                                                        alt="Image Description" />
                                                    <div class="my-auto block w-full">
                                                        <span
                                                            class="block max-w-[180px] truncate text-sm font-semibold text-gray-800 dark:text-gray-300">
                                                            Robert Steeve</span
                                                        >
                                                        <span
                                                            class="block text-xs !font-normal text-gray-400 dark:text-white/80"
                                                            >robertsteeve112@demo.com</span
                                                        >
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span>Front End</span></td>
                                            <td><span>UI Designer</span></td>
                                            <td><span>$12,000</span></td>
                                            <td><span>2</span></td>
                                            <td><span>$11,890</span></td>
                                            <td>
                                                <span
                                                    class="inline-block whitespace-nowrap rounded-sm bg-success/10 px-3 py-1 text-xs font-medium text-success"
                                                    >Paid</span
                                                >
                                            </td>
                                            <td class="space-x-2 font-medium rtl:space-x-reverse">
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="View"
                                                        data-theme="primary"
                                                        class="tw-primary-action">
                                                        <span class="icon-[mdi--eye] text-sm/none"></span>
                                                    </a>
                                                </div>
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="Edit"
                                                        data-theme="warning"
                                                        class="tw-warning-action">
                                                        <span class="icon-[mdi--pen] text-sm/none"></span>
                                                    </a>
                                                </div>
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="Delete"
                                                        data-theme="danger"
                                                        class="tw-danger-action">
                                                        <span class="icon-[mdi--delete] text-sm/none"></span>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="tx-center">2</td>
                                            <td>
                                                <div class="flex w-full min-w-[200px] space-x-3 rtl:space-x-reverse">
                                                    <img
                                                        class="avatar"
                                                        src="/images/users/avatar-4.png"
                                                        alt="Image Description" />
                                                    <div class="my-auto block w-full">
                                                        <span
                                                            class="block max-w-[180px] truncate text-sm font-semibold text-gray-800 dark:text-gray-300"
                                                            >Steeve Robert</span
                                                        >
                                                        <span
                                                            class="block text-xs !font-normal text-gray-400 dark:text-white/80"
                                                            >steeverobert121@demo.com</span
                                                        >
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span>Front End</span></td>
                                            <td><span>UI Developer</span></td>
                                            <td><span>$15,000</span></td>
                                            <td><span>0</span></td>
                                            <td><span>$15,000</span></td>
                                            <td>
                                                <span
                                                    class="inline-block whitespace-nowrap rounded-sm bg-success/10 px-3 py-1 text-xs font-medium text-success"
                                                    >Paid</span
                                                >
                                            </td>
                                            <td class="space-x-2 font-medium rtl:space-x-reverse">
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="View"
                                                        data-theme="primary"
                                                        class="tw-primary-action">
                                                        <span class="icon-[mdi--eye] text-sm/none"></span>
                                                    </a>
                                                </div>
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="Edit"
                                                        data-theme="warning"
                                                        class="tw-warning-action">
                                                        <span class="icon-[mdi--pen] text-sm/none"></span>
                                                    </a>
                                                </div>
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="Delete"
                                                        data-theme="danger"
                                                        class="tw-danger-action">
                                                        <span class="icon-[mdi--delete] text-sm/none"></span>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="tx-center">3</td>
                                            <td>
                                                <div class="flex w-full min-w-[200px] space-x-3 rtl:space-x-reverse">
                                                    <img
                                                        class="avatar"
                                                        src="/images/users/avatar-3.png"
                                                        alt="Image Description" />
                                                    <div class="my-auto block w-full">
                                                        <span
                                                            class="block max-w-[180px] truncate text-sm font-semibold text-gray-800 dark:text-gray-300"
                                                            >Mary Rose</span
                                                        >
                                                        <span
                                                            class="block text-xs !font-normal text-gray-400 dark:text-white/80"
                                                            >marymary334@demo.com</span
                                                        >
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span>Back End</span></td>
                                            <td><span>PHP Developer</span></td>
                                            <td><span>$22,000</span></td>
                                            <td><span>1</span></td>
                                            <td><span>$21,890</span></td>
                                            <td>
                                                <span
                                                    class="inline-block whitespace-nowrap rounded-sm bg-warning/10 px-3 py-1 text-xs font-medium text-warning"
                                                    >pending</span
                                                >
                                            </td>
                                            <td class="space-x-2 font-medium rtl:space-x-reverse">
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="View"
                                                        data-theme="primary"
                                                        class="tw-primary-action">
                                                        <span class="icon-[mdi--eye] text-sm/none"></span>
                                                    </a>
                                                </div>
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="Edit"
                                                        data-theme="warning"
                                                        class="tw-warning-action">
                                                        <span class="icon-[mdi--pen] text-sm/none"></span>
                                                    </a>
                                                </div>
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="Delete"
                                                        data-theme="danger"
                                                        class="tw-danger-action">
                                                        <span class="icon-[mdi--delete] text-sm/none"></span>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="tx-center">4</td>
                                            <td>
                                                <div class="flex w-full min-w-[200px] space-x-3 rtl:space-x-reverse">
                                                    <img
                                                        class="avatar"
                                                        src="/images/users/avatar-21.png"
                                                        alt="Image Description" />
                                                    <div class="my-auto block w-full">
                                                        <span
                                                            class="block max-w-[180px] truncate text-sm font-semibold text-gray-800 dark:text-gray-300"
                                                            >Stella Rose</span
                                                        >
                                                        <span
                                                            class="block text-xs !font-normal text-gray-400 dark:text-white/80"
                                                            >stellarose258@demo.com</span
                                                        >
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span>Android</span></td>
                                            <td><span>Ionic Developer</span></td>
                                            <td><span>$21,500</span></td>
                                            <td><span>0</span></td>
                                            <td><span>$21,500</span></td>
                                            <td>
                                                <span
                                                    class="inline-block whitespace-nowrap rounded-sm bg-danger/10 px-3 py-1 text-xs font-medium text-danger"
                                                    >Technical Issue</span
                                                >
                                            </td>
                                            <td class="space-x-2 font-medium rtl:space-x-reverse">
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="View"
                                                        data-theme="primary"
                                                        class="tw-primary-action">
                                                        <span class="icon-[mdi--eye] text-sm/none"></span>
                                                    </a>
                                                </div>
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="Edit"
                                                        data-theme="warning"
                                                        class="tw-warning-action">
                                                        <span class="icon-[mdi--pen] text-sm/none"></span>
                                                    </a>
                                                </div>
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="Delete"
                                                        data-theme="danger"
                                                        class="tw-danger-action">
                                                        <span class="icon-[mdi--delete] text-sm/none"></span>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="tx-center">5</td>
                                            <td>
                                                <div class="flex w-full min-w-[200px] space-x-3 rtl:space-x-reverse">
                                                    <img
                                                        class="avatar"
                                                        src="/images/users/avatar-11.png"
                                                        alt="Image Description" />
                                                    <div class="my-auto block w-full">
                                                        <span
                                                            class="block max-w-[180px] truncate text-sm font-semibold text-gray-800 dark:text-gray-300"
                                                            >John Abraham</span
                                                        >
                                                        <span
                                                            class="block text-xs !font-normal text-gray-400 dark:text-white/80"
                                                            >abrahamjohn394@demo.com</span
                                                        >
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span>Front End</span></td>
                                            <td><span>UI Designer</span></td>
                                            <td><span>$12,000</span></td>
                                            <td><span>3</span></td>
                                            <td><span>$11,835</span></td>
                                            <td>
                                                <span
                                                    class="inline-block whitespace-nowrap rounded-sm bg-success/10 px-3 py-1 text-xs font-medium text-success"
                                                    >Paid</span
                                                >
                                            </td>
                                            <td class="space-x-2 font-medium rtl:space-x-reverse">
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="View"
                                                        data-theme="primary"
                                                        class="tw-primary-action">
                                                        <span class="icon-[mdi--eye] text-sm/none"></span>
                                                    </a>
                                                </div>
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="Edit"
                                                        data-theme="warning"
                                                        class="tw-warning-action">
                                                        <span class="icon-[mdi--pen] text-sm/none"></span>
                                                    </a>
                                                </div>
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="Delete"
                                                        data-theme="danger"
                                                        class="tw-danger-action">
                                                        <span class="icon-[mdi--delete] text-sm/none"></span>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="tx-center">6</td>
                                            <td>
                                                <div class="flex w-full min-w-[200px] space-x-3 rtl:space-x-reverse">
                                                    <img
                                                        class="avatar"
                                                        src="/images/users/avatar-12.png"
                                                        alt="Image Description" />
                                                    <div class="my-auto block w-full">
                                                        <span
                                                            class="block max-w-[180px] truncate text-sm font-semibold text-gray-800 dark:text-gray-300"
                                                            >Richard Bose</span
                                                        >
                                                        <span
                                                            class="block text-xs !font-normal text-gray-400 dark:text-white/80"
                                                            >richardrichi.1233@demo.com</span
                                                        >
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span>Front End</span></td>
                                            <td><span>UI Developer</span></td>
                                            <td><span>$12,000</span></td>
                                            <td><span>4</span></td>
                                            <td><span>$11,780</span></td>
                                            <td>
                                                <span
                                                    class="inline-block whitespace-nowrap rounded-sm bg-warning/10 px-3 py-1 text-xs font-medium text-warning"
                                                    >pending</span
                                                >
                                            </td>
                                            <td class="space-x-2 font-medium rtl:space-x-reverse">
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="View"
                                                        data-theme="primary"
                                                        class="tw-primary-action">
                                                        <span class="icon-[mdi--eye] text-sm/none"></span>
                                                    </a>
                                                </div>
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="Edit"
                                                        data-theme="warning"
                                                        class="tw-warning-action">
                                                        <span class="icon-[mdi--pen] text-sm/none"></span>
                                                    </a>
                                                </div>
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="Delete"
                                                        data-theme="danger"
                                                        class="tw-danger-action">
                                                        <span class="icon-[mdi--delete] text-sm/none"></span>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="tx-center">7</td>
                                            <td>
                                                <div class="flex w-full min-w-[200px] space-x-3 rtl:space-x-reverse">
                                                    <img
                                                        class="avatar"
                                                        src="/images/users/avatar-13.png"
                                                        alt="Image Description" />
                                                    <div class="my-auto block w-full">
                                                        <span
                                                            class="block max-w-[180px] truncate text-sm font-semibold text-gray-800 dark:text-gray-300"
                                                            >Abagnale Mal</span
                                                        >
                                                        <span
                                                            class="block text-xs !font-normal text-gray-400 dark:text-white/80"
                                                            >abgnalemal000@demo.com</span
                                                        >
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span>Back End</span></td>
                                            <td><span>Java Developer</span></td>
                                            <td><span>$25,000</span></td>
                                            <td><span>0</span></td>
                                            <td><span>$25,000</span></td>
                                            <td>
                                                <span
                                                    class="inline-block whitespace-nowrap rounded-sm bg-success/10 px-3 py-1 text-xs font-medium text-success"
                                                    >Paid</span
                                                >
                                            </td>
                                            <td class="space-x-2 font-medium rtl:space-x-reverse">
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="View"
                                                        data-theme="primary"
                                                        class="tw-primary-action">
                                                        <span class="icon-[mdi--eye] text-sm/none"></span>
                                                    </a>
                                                </div>
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="Edit"
                                                        data-theme="warning"
                                                        class="tw-warning-action">
                                                        <span class="icon-[mdi--pen] text-sm/none"></span>
                                                    </a>
                                                </div>
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="Delete"
                                                        data-theme="danger"
                                                        class="tw-danger-action">
                                                        <span class="icon-[mdi--delete] text-sm/none"></span>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="tx-center">8</td>
                                            <td>
                                                <div class="flex w-full min-w-[200px] space-x-3 rtl:space-x-reverse">
                                                    <img
                                                        class="avatar"
                                                        src="/images/users/avatar-5.png"
                                                        alt="Image Description" />
                                                    <div class="my-auto block w-full">
                                                        <span
                                                            class="block max-w-[180px] truncate text-sm font-semibold text-gray-800 dark:text-gray-300"
                                                            >Rose Mary</span
                                                        >
                                                        <span
                                                            class="block text-xs !font-normal text-gray-400 dark:text-white/80"
                                                            >rosemary434@demo.com</span
                                                        >
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span>Back End</span></td>
                                            <td><span>PHP Developer</span></td>
                                            <td><span>$22,000</span></td>
                                            <td><span>0</span></td>
                                            <td><span>$22,000</span></td>
                                            <td>
                                                <span
                                                    class="inline-block whitespace-nowrap rounded-sm bg-danger/10 px-3 py-1 text-xs font-medium text-danger"
                                                    >Technical Issue</span
                                                >
                                            </td>
                                            <td class="space-x-2 font-medium rtl:space-x-reverse">
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="View"
                                                        data-theme="primary"
                                                        class="tw-primary-action">
                                                        <span class="icon-[mdi--eye] text-sm/none"></span>
                                                    </a>
                                                </div>
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="Edit"
                                                        data-theme="warning"
                                                        class="tw-warning-action">
                                                        <span class="icon-[mdi--pen] text-sm/none"></span>
                                                    </a>
                                                </div>
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="Delete"
                                                        data-theme="danger"
                                                        class="tw-danger-action">
                                                        <span class="icon-[mdi--delete] text-sm/none"></span>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="tx-center">9</td>
                                            <td>
                                                <div class="flex w-full min-w-[200px] space-x-3 rtl:space-x-reverse">
                                                    <img
                                                        class="avatar"
                                                        src="/images/users/avatar-6.png"
                                                        alt="Image Description" />
                                                    <div class="my-auto block w-full">
                                                        <span
                                                            class="block max-w-[180px] truncate text-sm font-semibold text-gray-800 dark:text-gray-300"
                                                            >Johnson Oley</span
                                                        >
                                                        <span
                                                            class="block text-xs !font-normal text-gray-400 dark:text-white/80"
                                                            >johnsonoley394@demo.com</span
                                                        >
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span>Android</span></td>
                                            <td><span>Ionic Developer</span></td>
                                            <td><span>$21,500</span></td>
                                            <td><span>1</span></td>
                                            <td><span>$21,455</span></td>
                                            <td>
                                                <span
                                                    class="inline-block whitespace-nowrap rounded-sm bg-warning/10 px-3 py-1 text-xs font-medium text-warning"
                                                    >pending</span
                                                >
                                            </td>
                                            <td class="space-x-2 font-medium rtl:space-x-reverse">
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="View"
                                                        data-theme="primary"
                                                        class="tw-primary-action">
                                                        <span class="icon-[mdi--eye] text-sm/none"></span>
                                                    </a>
                                                </div>
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="Edit"
                                                        data-theme="warning"
                                                        class="tw-warning-action">
                                                        <span class="icon-[mdi--pen] text-sm/none"></span>
                                                    </a>
                                                </div>
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="Delete"
                                                        data-theme="danger"
                                                        class="tw-danger-action">
                                                        <span class="icon-[mdi--delete] text-sm/none"></span>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="tx-center">10</td>
                                            <td>
                                                <div class="flex w-full min-w-[200px] space-x-3 rtl:space-x-reverse">
                                                    <img
                                                        class="avatar"
                                                        src="/images/users/avatar-7.png"
                                                        alt="Image Description" />
                                                    <div class="my-auto block w-full">
                                                        <span
                                                            class="block max-w-[180px] truncate text-sm font-semibold text-gray-800 dark:text-gray-300"
                                                            >Stephen Msi</span
                                                        >
                                                        <span
                                                            class="block text-xs !font-normal text-gray-400 dark:text-white/80"
                                                            >stephenmsi222@demo.com</span
                                                        >
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span>Back End</span></td>
                                            <td><span>PHP Developer</span></td>
                                            <td><span>$25,000</span></td>
                                            <td><span>0</span></td>
                                            <td><span>$25,000</span></td>
                                            <td>
                                                <span
                                                    class="inline-block whitespace-nowrap rounded-sm bg-success/10 px-3 py-1 text-xs font-medium text-success"
                                                    >Paid</span
                                                >
                                            </td>
                                            <td class="space-x-2 font-medium rtl:space-x-reverse">
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="View"
                                                        data-theme="primary"
                                                        class="tw-primary-action">
                                                        <span class="icon-[mdi--eye] text-sm/none"></span>
                                                    </a>
                                                </div>
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="Edit"
                                                        data-theme="warning"
                                                        class="tw-warning-action">
                                                        <span class="icon-[mdi--pen] text-sm/none"></span>
                                                    </a>
                                                </div>
                                                <div class="inline-block">
                                                    <a
                                                        href="javascript:void(0);"
                                                        x-tooltip="Delete"
                                                        data-theme="danger"
                                                        class="tw-danger-action">
                                                        <span class="icon-[mdi--delete] text-sm/none"></span>
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
