<script setup lang="ts">
    import { useTheme } from '@/composables/useTheme';
    import { computed } from 'vue';

    const { menu, theme, sidebar, layout, footer, rtlClass } = useTheme();
    const appConfig = computed(() => [theme.value, layout.value, menu.value, sidebar.value && 'toggle-menu']);
    document.documentElement.dir = rtlClass.value;
</script>

<template>
    <div class="tw--wrapper" :class="appConfig">
        <!-- menu shadow -->
        <div class="menu-shadow hidden"></div>
        <TopProgressBar />
        <!-- vertical-menu -->
        <VerticalMenu />

        <div class="tw--container">
            <NavbarNav />

            <slot />
            <footer class="footer mt-auto" :class="[footer]">
                <span class="footer-text">
                    <span id="footer-year"></span>
                    <a href="#" class="hover:underline" x-html="appName">UI</a>
                    <span class="hidden md:flex"> All Rights Reserved.</span>
                </span>
                <ul class="footer-button">
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
                        <a href="#" class="hover:underline" target="_blank"> Github </a>
                    </li>
                </ul>
            </footer>
        </div>

        <!-- Theme customizer -->
        <ThemeCustomizer />
    </div>
</template>
