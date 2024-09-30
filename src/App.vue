<script setup>
    import BlankLayout from '@/layouts/BlankLayout.vue';
    import DefaultLayout from '@/layouts/DefaultLayout.vue';

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
                    <template #fallback> Loading... </template>
                </Suspense>
            </template>
        </RouterView>
    </component>
</template>
