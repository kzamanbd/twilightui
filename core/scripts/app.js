// Description: Main app script
const app = function () {
    document.getElementById('loading').classList.add('hidden');
    function getTwilightTheme() {
        // if user already changed the theme, use it
        if (window.localStorage.getItem('dark')) {
            return JSON.parse(window.localStorage.getItem('dark'));
        }
        // else return their preferences
        return !!window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    //? toggle theme
    if (getTwilightTheme()) document.body.classList.add('dark');
    document.getElementById('toggleTheme').addEventListener('click', () => {
        document.body.classList.toggle('dark');
        //! set theme to local storage
        window.localStorage.setItem('dark', !getTwilightTheme());
    });

    //? sidebar
    const sidebarMenu = document.getElementById('sidebar-menu');
    const sidebarShadow = document.querySelector('.sidebar-shadow');
    document.getElementById('toggleMenuBtn').addEventListener('click', () => {
        if (sidebarMenu.classList.contains('closed')) {
            sidebarMenu.classList.add('open');
            sidebarMenu.classList.remove('closed');
            sidebarShadow.classList.toggle('hidden');
        } else {
            sidebarMenu.classList.add('closed');
            sidebarMenu.classList.remove('open');
        }
    });

    sidebarShadow.addEventListener('click', () => {
        sidebarMenu.classList.add('closed');
        sidebarMenu.classList.remove('open');
        sidebarShadow.classList.toggle('hidden');
    });

    document.getElementById('miniSidebarBtn').addEventListener('click', () => {
        document.body.classList.toggle('mini-sidebar');
    });

    document.querySelector('.sidebar-close').addEventListener('click', () => {
        sidebarMenu.classList.add('closed');
        sidebarMenu.classList.remove('open');
        sidebarShadow.classList.toggle('hidden');
    });

    const header = document.getElementById('sticky__header');
    const scrollable = document.querySelector('.twilight-body');

    scrollable?.addEventListener('scroll', () => {
        // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
        if (scrollable.scrollTop > 0) {
            header?.classList.add('sticky-header');
        } else {
            header?.classList.remove('sticky-header');
        }
    });
};

window.onload = app;
