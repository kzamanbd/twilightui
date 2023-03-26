document.addEventListener('alpine:init', () => {
    Alpine.data('dropdown', (initialOpenState = false) => ({
        open: initialOpenState,

        toggle() {
            this.open = !this.open;
        },
    }));
});
