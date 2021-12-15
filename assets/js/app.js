new Vue({
    el: '#app',
    data(){
        return {
            isDarkMode: false,
            isPagesMenuOpen: false,
            isSideMenuOpen: false,
            isProfileMenuOpen: false,
            isNotificationsMenuOpen: false,
            isModalOpen: false,
            trapCleanup: null,
        }
    },
    mounted() {
        this.isDarkMode = this.getThemeFromLocalStorage();
        if(this.isDarkMode){
            document.documentElement.classList.add('dark');
        }
    },
    methods:{
        getThemeFromLocalStorage() {
            // if user already changed the theme, use it
            if (window.localStorage.getItem('isDarkMode')) {
                return JSON.parse(window.localStorage.getItem('isDarkMode'))
            }
    
            // else return their preferences
            return (
                !!window.matchMedia &&
                window.matchMedia('(prefers-color-scheme: dark)').matches
            )
        },
    
        setThemeToLocalStorage(value) {
            window.localStorage.setItem('isDarkMode', value)
        },
        toggleTheme(){
            this.isDarkMode = !this.isDarkMode
            document.documentElement.classList.toggle('dark');
            this.setThemeToLocalStorage(this.isDarkMode)
        },
        toggleSideMenu(){
            this.isSideMenuOpen = !this.isSideMenuOpen;
        },
        closeSideMenu(){
            this.isSideMenuOpen = false;
        },
        toggleProfileMenu(){
            this.isNotificationsMenuOpen = false;
            this.isProfileMenuOpen = !this.isProfileMenuOpen
        },
        closeProfileMenu(){
            this.isProfileMenuOpen = false
        },
        toggleNotificationsMenu(){
            this.isProfileMenuOpen = false
            this.isNotificationsMenuOpen = !this.isNotificationsMenuOpen
        },
        closeNotificationsMenu(){
            this.isNotificationsMenuOpen = false
        },
        togglePagesMenu(){
            this.isPagesMenuOpen = !this.isPagesMenuOpen
        },
        closePagesMenu(){
            this.isPagesMenuOpen = false
        },
        openModal(){
            this.isModalOpen = true;
        },
        closeModal(){
            this.isModalOpen = false;
            this.trapCleanup = null;
        }
    }
})