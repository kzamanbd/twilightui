// alpine.js config
document.addEventListener('alpine:init', () => {
    //! get theme from local storage
    function getTwilightTheme() {
        // if user already changed the theme, use it
        if (window.localStorage.getItem('dark')) {
            return JSON.parse(window.localStorage.getItem('dark'));
        }

        // else return their preferences
        return !!window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    const testUser = {
        name: 'John Doe',
        email: 'john@example.com',
        title: 'Software Engineer',
        title2: 'Web dev',
        status: 'Active',
        role: 'Owner',
    };

    Alpine.store('accordion', {
        tab: undefined,
    });
    //? alpine data
    Alpine.data('twilightTheme', () => ({
        init() {
            this.$refs.loading.classList.add('hidden');
            if (getTwilightTheme()) {
                document.body.classList.add('dark');
            }
        },
        users: [...Array(10).keys()].map(() => testUser),
        toggleTheme() {
            document.body.classList.toggle('dark');
            //! set theme to local storage
            window.localStorage.setItem('dark', !getTwilightTheme());
        },
        // sidebar
        isMenuOpen: false,
        isMiniSidebar: false,
        toggleMenuOpen() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        toggleMiniSidebar() {
            this.isMiniSidebar = !this.isMiniSidebar;
            document.body.classList.toggle('mini-sidebar');
        },
        activeAccordion(tabName) {
            this.$store.accordion.tab = tabName;
        },
    }));

    Alpine.data('accordionItem', idx => ({
        init() {
            this.idx = idx;
        },
        idx: null,
        handleClick() {
            this.$store.accordion.tab = this.$store.accordion.tab == this.idx ? null : this.idx;
        },
        activeAccordion() {
            return this.$store.accordion.tab == this.idx ? 'nav-link-active' : '';
        },
        handleToggle() {
            return this.$store.accordion.tab == this.idx
                ? `max-height: ${this.$refs.tab.scrollHeight}px; margin-top: 12px`
                : '';
        },
    }));
});
