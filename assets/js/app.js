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
    methods:{
        toggleTheme(){
            this.dark = !this.dark
            if(this.dark){
                document.documentElement.className = 'dark';
            }else{
                document.documentElement.className = '';
            }
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