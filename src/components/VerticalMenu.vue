<script setup lang="ts">
    import verticalMenu from '@/assets/data/vertical-menu';
    import { useTheme } from '@/composables/useTheme';
    const { appName, semiDarkMenu } = useTheme();
</script>

<template>
    <aside class="vertical-menu">
        <div class="vertical-content" :class="semiDarkMenu">
            <!-- Menu Logo -->
            <div id="brand-logo" class="tw-brand-logo">
                <router-link to="/dashboard/sales" class="flex items-center">
                    <img src="/logo.png" alt="App Logo" class="tw-logo" />
                    <div class="app-name" v-html="appName"></div>
                </router-link>
                <button type="button" class="toggle-sidebar">
                    <span class="collapsed-icon icon-[mdi--radiobox-blank]"></span>
                    <span class="expanded-icon icon-[mdi--radiobox-marked]"></span>
                    <span class="icon-[mdi--close] lg:hidden"></span>
                </button>
            </div>
            <!-- Menu Content -->
            <SimpleBar class="tw-menu-content hs-accordion-treeview-root no-scrollbar">
                <ul class="tw-nav-menu hs-accordion-group">
                    <template v-for="menu in verticalMenu" :key="menu.name">
                        <template v-if="menu.group">
                            <li class="tw-menu-header">
                                <span class="minus icon-[mdi--minus]"></span>
                                <span class="label">{{ menu.title }}</span>
                            </li>
                        </template>
                        <template v-else-if="menu.children?.length">
                            <li class="tw-menu-item hs-accordion">
                                <button type="button" data-ripple class="tw-menu-link hs-accordion-toggle">
                                    <span :class="menu.icon"></span>
                                    <span class="tw-link-label">{{ menu.name }}</span>
                                    <span class="tw-arrow icon-[mdi--chevron-down]"></span>
                                </button>

                                <ul class="hs-accordion-content twd--menu">
                                    <li v-for="child in menu.children" :key="child.href" class="twd--menu-item">
                                        <router-link :to="child.href" class="twd--link">
                                            <span class="menu-bullet-dot"></span>
                                            <span class="tw-link-label">{{ child.name }}</span>
                                        </router-link>
                                    </li>
                                </ul>
                            </li>
                        </template>
                        <template v-else>
                            <li class="tw-menu-item">
                                <router-link :to="menu.href || '/'" class="tw-menu-link">
                                    <span :class="menu.icon"></span>
                                    <span class="tw-link-label">{{ menu.name }}</span>
                                </router-link>
                            </li>
                        </template>
                    </template>

                    <!-- documentation -->
                    <li>
                        <div class="documents-button">
                            <a href="https://twilightui-docs.vercel.app" target="_blank" class="documents-link">
                                <span class="icon-[mdi--text-box-search-outline]">description</span>
                                <span class="btn-label ml-2">Documentation</span>
                            </a>
                        </div>
                    </li>
                </ul>
            </SimpleBar>
        </div>
    </aside>
</template>
