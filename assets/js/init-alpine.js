function initApp() {
    function getThemeFromLocalStorage() {
        // if user already changed the theme, use it
        if (window.localStorage.getItem('dark')) {
            return JSON.parse(window.localStorage.getItem('dark'))
        }

        // else return their preferences
        return !!window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    }

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

    return {
        users: [...Array(10).keys()].map(() => testUser),
        isDarkMode: getThemeFromLocalStorage(),
        toggleTheme() {
            this.isDarkMode = !this.isDarkMode
            setThemeToLocalStorage(this.isDarkMode)
        },
        // sidebar
        isSideMenuOpen: false,
        // settings panel
        isSettingsPanelOpen: false,
        // search modal
        isSearchBoxOpen: false,

        // notifications
        isNotificationsMenuOpen: false,
        toggleNotificationsMenu() {
            this.isNotificationsMenuOpen = !this.isNotificationsMenuOpen
        },

        isProfileMenuOpen: false,
        toggleProfileMenu() {
            this.isProfileMenuOpen = !this.isProfileMenuOpen
        },

        isPagesMenuOpen: false,
        togglePagesMenu() {
            this.isPagesMenuOpen = !this.isPagesMenuOpen
        },
        // Modal
        isModalOpen: false,
        trapCleanup: null,
        openModal() {
            this.isModalOpen = true
            this.trapCleanup = focusTrap(document.querySelector('#modal'))
        },
        closeModal() {
            this.isModalOpen = false
            this.trapCleanup()
        },
    }
}
