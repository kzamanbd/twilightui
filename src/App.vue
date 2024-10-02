<script setup lang="ts">
    import BlankLayout from '@/layouts/BlankLayout.vue';
    // @ts-ignore
    import DefaultLayout from '@/layouts/DefaultLayout.vue';
    import { computed } from 'vue';
    import { useRoute, RouterView } from 'vue-router';

    const route = useRoute();

    const resolveComponent = computed(() => {
        const layout = route.meta.layout;
        if (layout === 'blank') {
            return BlankLayout;
        }
        return DefaultLayout;
    });
</script>

<template>
    <component :is="resolveComponent">
        <RouterView v-slot="{ Component }">
            <template v-if="Component">
                <Suspense>
                    <component :is="Component" />
                    <template #fallback>
                        <main class="twilight-content">Loading...</main>
                    </template>
                </Suspense>
            </template>
        </RouterView>
    </component>
</template>
