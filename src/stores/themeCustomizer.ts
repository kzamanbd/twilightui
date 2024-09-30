import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useThemeCustomizerStore = defineStore('themeCustomizer', () => {
    const showCustomizer = ref(false);
    const toggleCustomizer = () => {
        showCustomizer.value = !showCustomizer.value;
    };

    return { showCustomizer, toggleCustomizer };
});
