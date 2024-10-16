<script setup lang="ts">
    import { useWindowScroll } from '@vueuse/core';
    import { computed, ref } from 'vue';
    import { useTheme } from '@/composables/useTheme';
    import { useAuth } from '@/composables/useAuth';

    const { y: scrollY } = useWindowScroll();
    const scrollable = computed(() => scrollY.value > 0 && 'scrollable');
    // fullscreen toggle
    const isFullscreen = ref('fullscreen');
    const toggleFullscreen = () => {
        isFullscreen.value = isFullscreen.value == 'fullscreen' ? '' : 'fullscreen';
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            document.documentElement.requestFullscreen();
        }
    };

    const { theme, navbar, toggleTheme } = useTheme();

    const { logout } = useAuth();

    const brightnessIcon = computed(() => {
        return {
            'icon-[mdi--brightness-6]': theme.value === 'light',
            'icon-[mdi--brightness-2]': theme.value === 'dark',
            'icon-[mdi--brightness-auto]': theme.value === 'system'
        };
    });

    const fullScreenIcon = computed(() => {
        return {
            'icon-[mdi--fullscreen]': isFullscreen.value == 'fullscreen',
            'icon-[mdi--fullscreen-exit]': isFullscreen.value !== 'fullscreen'
        };
    });
</script>

<template>
    <header class="navbar-nav" :class="[navbar, scrollable]">
        <div class="primary-header">
            <!-- sidebar toggle button -->
            <div class="flex items-center">
                <button type="button" class="toggle-sidebar" aria-label="Menu">
                    <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        height="22"
                        width="22"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h8m-8 6h16"></path>
                    </svg>
                </button>
                <a href="/index.html" class="horizontal-logo">
                    <img src="/logo.png" alt="App Logo" class="tw-logo" />
                    <div class="app-name" x-html="appName"></div>
                </a>
            </div>

            <div class="group relative ml-auto transition md:mx-4">
                <form action="#">
                    <div class="relative">
                        <label for="quick-search-orig" class="m-0 block text-sm font-medium">
                            <span class="sr-only">Quick search</span>
                        </label>
                        <input
                            type="text"
                            name="quick-search"
                            id="quick-search-orig"
                            class="quick-search-input"
                            placeholder="Quick search..." />
                        <div class="absolute inset-y-0 end-0 hidden p-2 md:block">
                            <span class="rounded-md p-1 text-xs font-medium text-gray-400 dark:text-neutral-500">
                                Ctrl + /
                            </span>
                        </div>
                        <button type="button" class="quick-search-btn group">
                            <svg
                                class="quick-search-svg"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round">
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </svg>
                        </button>
                    </div>
                </form>
                <div id="quick-search" class="quick-search-icon"></div>
            </div>

            <div class="flex items-center space-x-2">
                <button
                    type="button"
                    class="header-icon hidden md:flex"
                    @click="toggleTheme('toggle')"
                    aria-label="Themes">
                    <span :class="brightnessIcon"></span>
                </button>

                <button type="button" class="header-icon" @click="toggleFullscreen" aria-label="Fullscreen">
                    <span :class="fullScreenIcon"></span>
                </button>

                <div class="hs-dropdown [--placement:bottom-right]">
                    <button type="button" class="header-icon hs-dropdown-toggle" aria-label="Message">
                        <span class="icon-[mdi--email-outline]"></span>
                        <span class="bell-icon-container">
                            <span class="bell-icon-badge"></span>
                            <span class="bell-icon-badge-dot"></span>
                        </span>
                    </button>
                    <div class="hs-dropdown-menu dropdown-menu" role="none">
                        <div
                            class="flex justify-between border-b border-slate-100 px-4 py-4 dark:border-slate-600"
                            role="none">
                            <div class="text-sm font-medium leading-6 text-slate-800 dark:text-slate-200" role="none">
                                Messages
                            </div>
                            <div class="text-xs text-slate-800 dark:text-slate-200 md:text-right" role="none">
                                <a class="underline" href="/chat" role="none">View all</a>
                            </div>
                        </div>
                        <div class="divide-y divide-slate-100 dark:divide-slate-800" role="none">
                            <div
                                class="block w-full cursor-pointer px-4 py-2 text-sm text-slate-600 dark:text-slate-300"
                                id="headlessui-menu-item-:rj:"
                                role="menuitem">
                                <div class="flex space-x-3 ltr:text-left rtl:space-x-reverse rtl:text-right">
                                    <div class="flex-none">
                                        <div class="relative h-8 w-8 rounded-full bg-white dark:bg-slate-700">
                                            <span
                                                class="absolute right-0 top-0 inline-block h-[10px] w-[10px] rounded-full border border-white bg-secondary-500 dark:border-slate-700"></span>
                                            <img
                                                src="/images/users/avatar-1.png"
                                                alt=""
                                                class="block h-full w-full rounded-full border border-transparent object-cover hover:border-white" />
                                        </div>
                                    </div>
                                    <div class="flex-1">
                                        <div class="mb-1` text-sm font-medium text-slate-800 dark:text-slate-300">
                                            Wade Warren
                                        </div>
                                        <div
                                            class="mb-1 text-xs text-slate-600 hover:text-[#68768A] dark:text-slate-300">
                                            Hi! How are you doing?.....
                                        </div>
                                        <div class="text-xs text-slate-400 dark:text-slate-400">3 min ago</div>
                                    </div>
                                    <div class="flex-0">
                                        <span
                                            class="flex h-4 w-4 items-center justify-center rounded-full border border-white bg-danger-500 text-[10px] text-white">
                                            1</span
                                        >
                                    </div>
                                </div>
                            </div>
                            <div
                                class="block w-full cursor-pointer px-4 py-2 text-sm text-slate-600 dark:text-slate-300"
                                id="headlessui-menu-item-:rk:"
                                role="menuitem">
                                <div class="flex space-x-3 ltr:text-left rtl:space-x-reverse rtl:text-right">
                                    <div class="flex-none">
                                        <div class="relative h-8 w-8 rounded-full bg-white dark:bg-slate-700">
                                            <span
                                                class="absolute right-0 top-0 inline-block h-[10px] w-[10px] rounded-full border border-white bg-green-500 dark:border-slate-700"></span>
                                            <img
                                                src="/images/users/avatar-2.png"
                                                alt=""
                                                class="block h-full w-full rounded-full border border-transparent object-cover hover:border-white" />
                                        </div>
                                    </div>
                                    <div class="flex-1">
                                        <div class="mb-1` text-sm font-medium text-slate-800 dark:text-slate-300">
                                            Savannah Nguyen
                                        </div>
                                        <div
                                            class="mb-1 text-xs text-slate-600 hover:text-[#68768A] dark:text-slate-300">
                                            Hi! How are you doing?.....
                                        </div>
                                        <div class="text-xs text-slate-400 dark:text-slate-400">3 min ago</div>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="block w-full cursor-pointer px-4 py-2 text-sm text-slate-600 dark:text-slate-300"
                                id="headlessui-menu-item-:rl:"
                                role="menuitem">
                                <div class="flex space-x-3 ltr:text-left rtl:space-x-reverse rtl:text-right">
                                    <div class="flex-none">
                                        <div class="relative h-8 w-8 rounded-full bg-white dark:bg-slate-700">
                                            <span
                                                class="absolute right-0 top-0 inline-block h-[10px] w-[10px] rounded-full border border-white bg-green-500 dark:border-slate-700"></span>
                                            <img
                                                src="/images/users/avatar-3.png"
                                                alt=""
                                                class="block h-full w-full rounded-full border border-transparent object-cover hover:border-white" />
                                        </div>
                                    </div>
                                    <div class="flex-1">
                                        <div class="mb-1` text-sm font-medium text-slate-800 dark:text-slate-300">
                                            Ralph Edwards
                                        </div>
                                        <div
                                            class="mb-1 text-xs text-slate-600 hover:text-[#68768A] dark:text-slate-300">
                                            Hi! How are you doing?.....
                                        </div>
                                        <div class="text-xs text-slate-400 dark:text-slate-400">3 min ago</div>
                                    </div>
                                    <div class="flex-0">
                                        <span
                                            class="flex h-4 w-4 items-center justify-center rounded-full border border-white bg-danger-500 text-[10px] text-white"
                                            >8</span
                                        >
                                    </div>
                                </div>
                            </div>
                            <div
                                class="block w-full cursor-pointer px-4 py-2 text-sm text-slate-600 dark:text-slate-300"
                                id="headlessui-menu-item-:rm:"
                                role="menuitem">
                                <div class="flex space-x-3 ltr:text-left rtl:space-x-reverse rtl:text-right">
                                    <div class="flex-none">
                                        <div class="relative h-8 w-8 rounded-full bg-white dark:bg-slate-700">
                                            <span
                                                class="absolute right-0 top-0 inline-block h-[10px] w-[10px] rounded-full border border-white bg-secondary-500 dark:border-slate-700"></span>
                                            <img
                                                src="/images/users/avatar-4.png"
                                                alt=""
                                                class="block h-full w-full rounded-full border border-transparent object-cover hover:border-white" />
                                        </div>
                                    </div>
                                    <div class="flex-1">
                                        <div class="mb-1` text-sm font-medium text-slate-800 dark:text-slate-300">
                                            Cody Fisher
                                        </div>
                                        <div
                                            class="mb-1 text-xs text-slate-600 hover:text-[#68768A] dark:text-slate-300">
                                            Hi! How are you doing?.....
                                        </div>
                                        <div class="text-xs text-slate-400 dark:text-slate-400">3 min ago</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="hs-dropdown [--placement:bottom-right]">
                    <button type="button" class="header-icon hs-dropdown-toggle" aria-label="Notification">
                        <span class="icon-[mdi--bell-outline]"></span>
                        <span class="bell-icon-container">
                            <span class="bell-icon-badge"></span>
                            <span class="bell-icon-badge-dot"></span>
                        </span>
                    </button>
                    <div class="hs-dropdown-menu dropdown-menu" role="none">
                        <div
                            class="flex justify-between border-b border-slate-100 px-4 py-4 dark:border-slate-600"
                            role="none">
                            <div class="text-sm font-medium leading-6 text-slate-800 dark:text-slate-200" role="none">
                                Notifications
                            </div>
                            <div class="text-xs text-slate-800 dark:text-slate-200 md:text-right" role="none">
                                <a class="underline" href="/notifications" role="none">View all</a>
                            </div>
                        </div>
                        <div class="divide-y divide-slate-100 dark:divide-slate-800" role="none">
                            <div
                                class="block w-full cursor-pointer px-4 py-2 text-sm text-slate-600 dark:text-slate-300"
                                id="headlessui-menu-item-:r12:"
                                role="menuitem">
                                <div class="flex ltr:text-left rtl:text-right">
                                    <div class="flex-none ltr:mr-3 rtl:ml-3">
                                        <div class="h-8 w-8 rounded-full bg-white">
                                            <img
                                                src="/images/users/avatar-1.png"
                                                alt="user"
                                                class="block h-full w-full rounded-full border border-transparent object-cover" />
                                        </div>
                                    </div>
                                    <div class="flex-1">
                                        <div class="text-sm text-slate-600 dark:text-slate-300">
                                            Your order is placed
                                        </div>
                                        <div class="text-xs leading-4 text-slate-600 dark:text-slate-300">
                                            Amet minim mollit non deser unt ullamco est sit aliqua.
                                        </div>
                                        <div class="mt-1 text-xs text-slate-400 dark:text-slate-400">3 min ago</div>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="block w-full cursor-pointer px-4 py-2 text-sm text-slate-600 dark:text-slate-300"
                                id="headlessui-menu-item-:r13:"
                                role="menuitem">
                                <div class="flex ltr:text-left rtl:text-right">
                                    <div class="flex-none ltr:mr-3 rtl:ml-3">
                                        <div class="h-8 w-8 rounded-full bg-white">
                                            <img
                                                src="/images/users/avatar-2.png"
                                                alt="user"
                                                class="block h-full w-full rounded-full border border-transparent object-cover" />
                                        </div>
                                    </div>
                                    <div class="flex-1">
                                        <div class="text-sm text-slate-600 dark:text-slate-300">
                                            Congratulations Darlene 🎉
                                        </div>
                                        <div class="text-xs leading-4 text-slate-600 dark:text-slate-300">
                                            Won the monthly best seller badge
                                        </div>
                                        <div class="mt-1 text-xs text-slate-400 dark:text-slate-400">3 min ago</div>
                                    </div>
                                    <div class="flex-0">
                                        <span
                                            class="inline-block h-[10px] w-[10px] rounded-full border border-white bg-danger-500 dark:border-slate-400"></span>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="block w-full cursor-pointer px-4 py-2 text-sm text-slate-600 dark:text-slate-300"
                                id="headlessui-menu-item-:r14:"
                                role="menuitem">
                                <div class="flex ltr:text-left rtl:text-right">
                                    <div class="flex-none ltr:mr-3 rtl:ml-3">
                                        <div class="h-8 w-8 rounded-full bg-white">
                                            <img
                                                src="/images/users/avatar-3.png"
                                                alt="user"
                                                class="block h-full w-full rounded-full border border-transparent object-cover" />
                                        </div>
                                    </div>
                                    <div class="flex-1">
                                        <div class="text-sm text-slate-600 dark:text-slate-300">Revised Order 👋</div>
                                        <div class="text-xs leading-4 text-slate-600 dark:text-slate-300">
                                            Won the monthly best seller badge
                                        </div>
                                        <div class="mt-1 text-xs text-slate-400 dark:text-slate-400">3 min ago</div>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="block w-full cursor-pointer px-4 py-2 text-sm text-slate-600 dark:text-slate-300"
                                id="headlessui-menu-item-:r15:"
                                role="menuitem">
                                <div class="flex ltr:text-left rtl:text-right">
                                    <div class="flex-none ltr:mr-3 rtl:ml-3">
                                        <div class="h-8 w-8 rounded-full bg-white">
                                            <img
                                                src="/images/users/avatar-4.png"
                                                alt="user"
                                                class="block h-full w-full rounded-full border border-transparent object-cover" />
                                        </div>
                                    </div>
                                    <div class="flex-1">
                                        <div class="text-sm text-slate-600 dark:text-slate-300">Brooklyn Simmons</div>
                                        <div class="text-xs leading-4 text-slate-600 dark:text-slate-300">
                                            Added you to Top Secret Project group...
                                        </div>
                                        <div class="mt-1 text-xs text-slate-400 dark:text-slate-400">3 min ago</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="hs-dropdown [--placement:bottom-right]">
                    <button type="button" aria-label="User Profile" class="hs-dropdown-toggle flex items-center gap-2">
                        <img class="h-8 w-8 rounded-md object-cover" src="/images/author.png" alt="Author" />
                        <div class="hidden items-center gap-2 md:flex">
                            <div class="dark--text">Kamruzzaman</div>
                            <span class="icon-[mdi--chevron-down]"></span>
                        </div>
                    </button>

                    <ul class="hs-dropdown-menu dropdown-menu w-64 shadow-2xl">
                        <li class="border-b px-4 py-2 dark:border-gray-700 md:hidden">
                            <div class="px-1">
                                <p class="font-medium leading-5 text-gray-900 dark:text-gray-300">Kamruzzaman</p>
                                <p class="text-xs leading-5 text-gray-500 dark:text-gray-300">Software Engineer</p>
                            </div>
                        </li>
                        <li class="border-b py-2 dark:border-gray-700">
                            <div class="user-menu-item">
                                <a href="#" class="user-menu-link"> My Profile </a>
                            </div>
                            <div class="user-menu-item">
                                <a href="#" class="user-menu-link">
                                    My Projects
                                    <span
                                        class="ml-1 inline-flex items-center justify-center rounded-full bg-primary px-2 py-1 text-xs font-bold leading-none text-white">
                                        9
                                    </span>
                                </a>
                            </div>
                            <div class="user-menu-item">
                                <a href="#" class="user-menu-link"> My Subscription </a>
                            </div>
                        </li>
                        <li class="relative py-2">
                            <div class="user-menu-item group">
                                <a href="#" class="user-menu-link">
                                    Language
                                    <span class="flex items-center text-xs font-bold leading-none">
                                        <img
                                            src="/images/flags/united-states.svg"
                                            class="mr-2 h-4 w-4 rounded-full"
                                            alt="English" />
                                        English
                                    </span>
                                    <!-- language dropdown -->
                                    <div class="language-dropdown">
                                        <div class="language-dropdown-item">
                                            <img
                                                src="/images/flags/united-states.svg"
                                                class="mr-2 h-4 w-4 rounded-full"
                                                alt="English" />
                                            <span class="text-xs leading-none">English</span>
                                        </div>
                                        <div class="language-dropdown-item">
                                            <img
                                                src="/images/flags/france.svg"
                                                class="mr-2 h-4 w-4 rounded-full"
                                                alt="france" />
                                            <span class="text-xs leading-none">France</span>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div class="user-menu-item">
                                <a href="#" class="user-menu-link"> Account Settings </a>
                            </div>
                            <div @click.prevent="logout" class="user-menu-item">
                                <a href="/pages/login.html" class="user-menu-link"> Log out </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>
