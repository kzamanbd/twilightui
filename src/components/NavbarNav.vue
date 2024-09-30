<script setup lang="ts">
    import { useWindowScroll } from '@vueuse/core';
    import { computed, ref } from 'vue';
    import useTheme from '@/composables/useTheme';
    import useAuth from '@/composables/useAuth';
    import { useThemeCustomizerStore } from '@/stores/themeCustomizer';

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
    const customizer = useThemeCustomizerStore();

    const toggleCustomizer = () => {
        customizer.toggleCustomizer();
    };
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
                    <svg class="tw-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 102.66 120.85">
                        <path
                            class="twl-path"
                            d="M102.66,43.16h0v34.34c0,23.93-19.43,43.35-43.35,43.35h0v-34.34c0-23.93,19.43-43.35,43.35-43.35Z" />

                        <path
                            class="twl-path"
                            d="M23.43,24.86h49.72c0,26.65-21.64,48.29-48.29,48.29H-24.86C-24.86,46.5-3.22,24.86,23.43,24.86Z"
                            transform="translate(73.14 24.86) rotate(90)" />
                        <circle
                            class="twl-circle"
                            cx="75.7"
                            cy="20.66"
                            r="16.39"
                            transform="translate(38.08 89.53) rotate(-76.62)" />
                    </svg>
                    <div class="app-name">Twilight <span class="text-primary">UI</span></div>
                </a>
            </div>

            <div class="flex items-center space-x-2">
                <button type="button" class="header-icon" @click="toggleTheme()" aria-label="Themes">
                    <span
                        :class="{
                            'icon-[mdi--brightness-6]': theme === 'light',
                            'icon-[mdi--brightness-2]': theme === 'dark',
                            'icon-[mdi--brightness-auto]': theme === 'system'
                        }">
                    </span>
                </button>

                <button type="button" class="header-icon" aria-label="Notification">
                    <span class="icon-[mdi--bell-outline]"></span>
                </button>

                <button type="button" class="header-icon" @click="toggleFullscreen()" aria-label="fullscreen">
                    <span
                        :class="{
                            'icon-[mdi--fullscreen]': isFullscreen == 'fullscreen',
                            'icon-[mdi--fullscreen-exit]': isFullscreen !== 'fullscreen'
                        }"></span>
                </button>

                <button type="button" class="header-icon" @click="toggleCustomizer" aria-label="settings">
                    <span class="icon-[mdi--cog]"></span>
                </button>

                <UiDropdown>
                    <template #trigger>
                        <button
                            type="button"
                            aria-label="User Profile"
                            class="dropdown-toggle flex h-8 w-8 overflow-hidden rounded-md shadow">
                            <img class="h-full w-full object-cover" src="/images/author.png" alt="Author" />
                        </button>
                    </template>

                    <ul class="w-64 py-2">
                        <li class="flex items-center border-b px-4 py-2 dark:border-gray-700">
                            <div class="flex-shrink-0">
                                <img class="h-8 w-8 rounded-full object-cover" src="/images/author.png" alt="Author" />
                            </div>
                            <div class="ml-3">
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
                            <div class="user-menu-item">
                                <button type="button" @click.prevent="logout" class="user-menu-link">Log out</button>
                            </div>
                        </li>
                    </ul>
                </UiDropdown>
            </div>
        </div>
    </header>
</template>
