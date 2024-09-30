<script setup lang="ts">
    defineProps({
        label: {
            type: String,
            default: 'Accordion Tabs'
        },
        iconClass: {
            type: String,
            default: 'icon-[mdi--square-rounded-badge-outline]'
        },
        isActive: {
            type: Boolean,
            default: false
        },
        defaultOpen: {
            type: Boolean,
            default: false
        }
    });
</script>

<template>
    <Disclosure :defaultOpen="defaultOpen" v-slot="{ open }" as="li" class="tw-dropdown-menu">
        <DisclosureButton class="tw-menu-link flex justify-between" :class="{ active: isActive || open }">
            <div class="flex items-center">
                <slot name="button">
                    <slot name="icon">
                        <span :class="iconClass"></span>
                    </slot>
                    <slot name="label">
                        <span class="tw-link-label">
                            {{ label }}
                        </span>
                    </slot>
                </slot>
            </div>

            <span :class="{ 'rotate-90': open }" class="icon-[mdi--chevron-right]"></span>
        </DisclosureButton>
        <transition
            enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform opacity-0 max-h-0"
            enter-to-class="transform opacity-100 max-h-[1000px]"
            leave-active-class="transition duration-75 ease-out"
            leave-from-class="transform opacity-100 max-h-[1000px]"
            leave-to-class="transform opacity-0 max-h-0">
            <DisclosurePanel as="ul" class="tw-dropdown-menu">
                <slot />
            </DisclosurePanel>
        </transition>
    </Disclosure>
</template>
