const pSidebar = new PerfectScrollbar('#sidebar-menu', {
    wheelSpeed: 2,
    wheelPropagation: true,
    minScrollbarLength: 20,
})
pSidebar.update()
document.addEventListener('alpine:init', () => {
    //! get theme from local storage
    function getThemeFromLocalStorage() {
        // if user already changed the theme, use it
        if (window.localStorage.getItem('dark')) {
            return JSON.parse(window.localStorage.getItem('dark'))
        }

        // else return their preferences
        return !!window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    //! set theme to local storage
    function setThemeToLocalStorage(value) {
        window.localStorage.setItem('dark', value)
    }
    const testUser = {
        name: 'John Doe',
        email: 'john@example.com',
        title: 'Software Engineer',
        title2: 'Web dev',
        status: 'Active',
        role: 'Owner',
    }
    Alpine.data('twilight', () => ({
        users: [...Array(10).keys()].map(() => testUser),
        isDarkMode: getThemeFromLocalStorage(),
        toggleTheme() {
            this.isDarkMode = !this.isDarkMode
            setThemeToLocalStorage(this.isDarkMode)
        },
        // sidebar
        isSideMenuOpen: false,
    }))

    Alpine.store('dropdown', {
        tab: undefined,
    })
    Alpine.data('dropdownItem', idx => ({
        init() {
            this.idx = idx
        },
        idx: -1,
        handleClick() {
            this.$store.dropdown.tab = this.$store.dropdown.tab == this.idx ? -1 : this.idx
        },
        handleRotate() {
            return this.$store.dropdown.tab == this.idx ? 'rotate-180' : ''
        },
        activeDropdown() {
            return this.$store.dropdown.tab == this.idx ? 'nav-link-active' : ''
        },
        handleToggle() {
            return this.$store.dropdown.tab == this.idx ? `max-height: ${this.$refs.tab.scrollHeight}px` : ''
        },
    }))
})

window.onload = function () {
    const header = document.getElementById('sticky__header')
    const scrollableContent = document.getElementById('scrollable-content')
    scrollableContent.addEventListener('scroll', () => {
        // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
        if (scrollableContent.scrollTop > 0) {
            header.classList.add('sticky-header')
        } else {
            header.classList.remove('sticky-header')
        }
    })
}
