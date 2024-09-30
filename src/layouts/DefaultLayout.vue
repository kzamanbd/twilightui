<script setup lang="ts">
    import useTheme from '@/composables/useTheme';
    import { computed } from 'vue';

    const { menu, theme, sidebar, layout, footer, rtlClass } = useTheme();
    const appConfig = computed(() => [theme.value, layout.value, menu.value, sidebar.value && 'toggle-menu']);
    document.documentElement.dir = rtlClass.value;
</script>

<template>
    <div class="twilight" :class="appConfig">
        <!-- menu shadow -->
        <div class="menu-shadow hidden"></div>
        <TopProgressBar />
        <!-- vertical-menu -->
        <VerticalMenu />

        <div class="twilight-body">
            <NavbarNav />

            <main class="twilight-content">
                <!-- End:Breadcrumb -->
                <slot />
            </main>

            <footer class="footer" :class="[footer]">
                <span class="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
                    © <span id="footer-year"></span> <a href="#" class="hover:underline">Twilight™</a>. All Rights
                    Reserved.
                </span>
                <ul class="mt-3 flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6">About</a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6">Licensing</a>
                    </li>
                    <li>
                        <a href="https://github.com/kzamaan/twilight" class="hover:underline" target="_blank">
                            Github
                        </a>
                    </li>
                </ul>
            </footer>
        </div>

        <!-- Theme customizer -->
        <ThemeCustomizer />
    </div>
</template>
