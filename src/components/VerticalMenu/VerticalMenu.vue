<script setup lang="ts">
    import verticalMenu from '@/static/vertical-menu';
    import { useRoute } from 'vue-router';

    const $route = useRoute();

    const defaultOpen = (children: any) => {
        return children.some((child: any) => child.href === $route.path);
    };
</script>

<template>
    <aside class="vertical-menu">
        <div class="vertical-content">
            <!-- Menu Logo -->
            <div id="brand-logo" class="tw-brand-logo">
                <router-link to="/dashboard/sales" class="flex items-center">
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
                </router-link>
                <button type="button" class="toggle-sidebar">
                    <span class="icon-[mdi--radiobox-marked] hidden lg:block"></span>
                    <span class="icon-[mdi--close] lg:hidden"></span>
                </button>
            </div>

            <!-- Menu Content -->
            <SimpleBar class="tw-menu-content no-scrollbar">
                <ul class="tw-nav-menu">
                    <template v-for="menu in verticalMenu" :key="menu.name">
                        <template v-if="menu.group">
                            <li class="tw-menu-header">
                                <span class="minus icon-[mdi--minus]"></span>
                                <span class="label">{{ menu.title }}</span>
                            </li>
                        </template>
                        <template v-else-if="menu.children?.length">
                            <TwDisclosure
                                :label="menu.name"
                                :iconClass="menu.icon"
                                :defaultOpen="defaultOpen(menu.children)">
                                <li
                                    v-for="children in menu.children"
                                    :key="children.name"
                                    class="tw-dropdown-item group">
                                    <router-link :to="children.href" class="tw-dropdown-link">
                                        <span class="menu-bullet-dot"></span>
                                        <span class="tw-link-label">{{ children.name }}</span>
                                    </router-link>
                                </li>
                            </TwDisclosure>
                        </template>
                        <template v-else-if="!menu.children?.length">
                            <li v-if="menu.href" class="tw-menu-item">
                                <router-link :to="menu.href" class="tw-menu-link">
                                    <span :class="menu.icon"></span>
                                    <span class="tw-link-label">{{ menu.name }}</span>
                                </router-link>
                            </li>
                        </template>
                    </template>

                    <!-- documentation -->
                    <li>
                        <div class="documents-button">
                            <a href="/documentation/index.html" target="_blank" class="documents-link">
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
