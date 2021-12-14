new Vue({
    el: '#app',
    data(){
        return {
            dark: false,
            isPagesMenuOpen: false,
            isSideMenuOpen: false,
            isProfileMenuOpen: false,
            isNotificationsMenuOpen: false,
        }
    },
    mounted() {
        console.log('mounted');
        this.dark = this.getThemeFromLocalStorage();
    },
    methods:{
        getThemeFromLocalStorage() {
            // if user already changed the theme, use it
            if (window.localStorage.getItem('dark')) {
                return JSON.parse(window.localStorage.getItem('dark'))
            }
    
            // else return their preferences
            return (
                !!window.matchMedia &&
                window.matchMedia('(prefers-color-scheme: dark)').matches
            )
        },
    
        setThemeToLocalStorage(value) {
            window.localStorage.setItem('dark', value)
        },
        toggleTheme(){
            this.dark = !this.dark
            if(this.dark){
                document.documentElement.className = 'dark';
            }else{
                document.documentElement.className = '';
            }
            this.setThemeToLocalStorage(this.dark)
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
    }
})