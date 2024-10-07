<script>
    function random(min = 0, max = 1, floating = false) {
        if (typeof min !== 'number' || typeof max !== 'number') {
            throw new Error("Both min and max must be numbers.");
        }
    
        if (min > max) {
            [min, max] = [max, min]; // Swap if min is greater than max
        }
    
        const rand = Math.random() * (max - min) + min;
    
        return floating ? rand : Math.floor(rand);
    }
    // Assume that loading will complete under this amount of time.
    const defaultDuration = 8000;
    // How frequently to update
    const defaultInterval = 1000;
    // 0 - 1. Add some variation to how much the bar will grow at each interval
    const variation = 0.5;
    // 0 - 100. Where the progress bar should start from.
    const startingPoint = 0;
    // Limiting how far the progress bar will get to before loading is complete
    const endingPoint = 90;
    export default {
        // Attach navigation guards
        data: () => ({
            isLoading: false, // Once loading is done, start fading away
            isVisible: false, // Once animate finish, set display: none
            progress: startingPoint,
            timeoutId: undefined
        }),
        mounted() {
            this.$router.beforeEach(() => this.startProgressBar());
            this.$router.afterEach(() => this.stopProgressBar());
        },

        methods: {
            updateProgress(progressEvent) {
                if (progressEvent.lengthComputable) {
                    this.progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
                }
            },
            startProgressBar() {
                this.isLoading = true;
                this.isVisible = true;
                this.progress = startingPoint;
                this.loopProgressBar();
            },

            loopProgressBar() {
                if (this.timeoutId) {
                    clearTimeout(this.timeoutId);
                }
                if (this.progress >= endingPoint) {
                    return;
                }
                const size = (endingPoint - startingPoint) / (defaultDuration / defaultInterval);
                const p = Math.round(this.progress + random(size * (1 - variation), size * (1 + variation)));
                this.progress = Math.min(p, endingPoint);
                this.timeoutId = setTimeout(
                    this.loopProgressBar,
                    random(defaultInterval * (1 - variation), defaultInterval * (1 + variation))
                );
            },

            stopProgressBar() {
                this.isLoading = false;
                this.progress = 100;
                clearTimeout(this.timeoutId);
                setTimeout(() => {
                    if (!this.isLoading) {
                        this.isVisible = false;
                    }
                }, 200);
            }
        }
    };
</script>

<template>
    <div v-if="isLoading" class="w-full bg-gray-200 rounded-full h-0.5 dark:bg-gray-700 absolute top-0 left-0 z-50">
        <div class="bg-primary-600 h-0.5 rounded-full dark:bg-primary-500" :style="{ width: progress + '%' }"></div>
    </div>
</template>
