import { useStorage } from '@vueuse/core';

export default function useTheme() {
    const themeConfig = {
        locale: 'en', // en, da, de, el, es, fr, hu, it, ja, pl, pt, ru, sv, tr, zh
        theme: 'light', // light, dark, system
        rtlClass: 'ltr', // rtl, ltr
        menu: 'vertical', // vertical, horizontal
        layout: 'full', // full, boxed-layout
        animation: 'animate__fadeIn', // animate__fadeIn, animate__fadeInDown, animate__fadeInUp, animate__fadeInLeft, animate__fadeInRight, animate__slideInDown, animate__slideInLeft, animate__slideInRight, animate__zoomIn
        navbar: 'navbar-fixed', // navbar-static, navbar-fixed, navbar-hidden
        footer: 'footer-static', // footer-static, footer-fixed, footer-hidden
        semiDark: false,
        sidebar: false
    };

    themeConfig.theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

    const theme = useStorage('theme', themeConfig.theme);
    const navbar = useStorage('navbar', themeConfig.navbar);
    const animation = useStorage('animation', themeConfig.animation);
    const layout = useStorage('layout', themeConfig.layout);
    const menu = useStorage('menu', themeConfig.menu);
    const rtlClass = useStorage('rtlClass', themeConfig.rtlClass);
    const semiDark = useStorage('semiDark', themeConfig.semiDark);
    const sidebar = useStorage('vMenu', themeConfig.sidebar);
    const footer = useStorage('footer', themeConfig.footer);

    const toggleTheme = (value?: string) => {
        if (!value) {
            theme.value = theme.value === 'light' ? 'dark' : 'light';
        }
        theme.value = value || theme.value;
    };

    const toggleNavbar = (value: string) => {
        navbar.value = value;
    };

    const toggleAnimation = (value: string) => {
        animation.value = value;
    };

    const toggleLayout = (value: string) => {
        layout.value = value;
    };

    const toggleMenu = (value: string) => {
        menu.value = value;
    };

    const toggleSemiDark = () => {
        semiDark.value = !semiDark.value;
    };

    const toggleVMenu = () => {
        sidebar.value = !sidebar.value;
    };

    const collapsibleMenu = () => {
        menu.value = menu.value == 'collapsible' ? 'vertical' : 'collapsible';
    };

    const toggleRTL = (value: string) => {
        rtlClass.value = value;
    };

    return {
        menu,
        theme,
        navbar,
        footer,
        layout,
        sidebar,
        semiDark,
        rtlClass,
        animation,
        // methods
        toggleRTL,
        toggleMenu,
        toggleTheme,
        toggleNavbar,
        toggleVMenu,
        toggleLayout,
        toggleAnimation,
        toggleSemiDark,
        collapsibleMenu
    };
}
