// simplebar
import 'simplebar'; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
// alpine.js config

import collapse from '@alpinejs/collapse';
import focus from '@alpinejs/focus';
import mask from '@alpinejs/mask';
import persist from '@alpinejs/persist';
import Alpine from 'alpinejs';
import dropdown from './dropdown';
import sidebar from './vertical';

window.Alpine = Alpine;
Alpine.plugin(collapse);
Alpine.plugin(focus);
Alpine.plugin(mask);
Alpine.plugin(persist);

sidebar.init();
dropdown.init();

// You will need a ResizeObserver polyfill for browsers that don't support it! (iOS Safari, Edge, ...)
import ResizeObserver from 'resize-observer-polyfill';
window.ResizeObserver = ResizeObserver;

// tippy.js for tooltip
import tippy from 'tippy.js';
window.tippy = tippy;

// sweet alert2
import Swal from 'sweetalert2';
window.Swal = Swal;

// initialize quill editor
import Quill from 'quill';
window.Quill = Quill;

// initialize sortable js
import { MultiDrag, Sortable, Swap } from 'sortablejs';
window.Sortable = Sortable;
Sortable.mount(new MultiDrag());
Sortable.mount(new Swap());

// apexcharts
import ApexCharts from 'apexcharts';
window.ApexCharts = ApexCharts;

// file upload with preview
import { FileUploadWithPreview } from 'file-upload-with-preview';
window.FileUploadWithPreview = FileUploadWithPreview;

// clipboard
import ClipboardJS from 'clipboard';
window.ClipboardJS = ClipboardJS;

// flatpickr
import flatpickr from 'flatpickr';
window.flatpickr = flatpickr;

// simple data tables
import { DataTable, exportCSV, exportJSON, exportTXT } from 'simple-datatables';
window.DataTable = DataTable;
window.DataTableExportCSV = exportCSV;
window.DataTableExportJSON = exportJSON;
window.DataTableExportTXT = exportTXT;

// app config
(function () {
    // window scroll
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.top-header');
        const scrollTop = document.querySelector('.scroll-top');
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            // do something
            header.classList.add('scrollable');
        } else {
            // do something
            header.classList.remove('scrollable');
        }
        // scroll top button
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            scrollTop.classList.remove('hidden');
        } else {
            scrollTop.classList.add('hidden');
        }
    });

    // theme config
    const $themeConfig = {
        locale: 'en', // en, da, de, el, es, fr, hu, it, ja, pl, pt, ru, sv, tr, zh
        theme: 'light', // light, dark, system
        rtlClass: 'ltr', // rtl, ltr
        menu: 'vertical', // vertical, collapsible, horizontal
        layout: 'full', // full, boxed-layout
        animation: 'animate__fadeIn', // animate__fadeIn, animate__fadeInDown, animate__fadeInUp, animate__fadeInLeft, animate__fadeInRight, animate__slideInDown, animate__slideInLeft, animate__slideInRight, animate__zoomIn
        navbar: 'navbar-sticky', // navbar-static, navbar-fixed, navbar-hidden
        footer: 'footer-static', // footer-static, footer-fixed, footer-hidden
        semiDark: false,
        sidebar: false,
    };

    // theme config persist with alpinejs
    Alpine.store('app', {
        name: 'TwilightUI',
        // theme
        theme: Alpine.$persist($themeConfig.theme),
        toggleTheme(val) {
            let theme = $themeConfig.theme; // light|dark|system
            if (val) {
                theme = val;
            } else {
                if (this.theme === 'dark') {
                    theme = 'light';
                } else {
                    theme = 'dark';
                }
            }
            if (theme == 'dark') {
                this.semiDark = false;
            }

            this.theme = theme;
        },

        // navigation menu
        menu: Alpine.$persist($themeConfig.menu),
        toggleMenu(val) {
            if (!val) {
                val = this.menu || $themeConfig.menu; // vertical, collapsible, horizontal
            }
            this.sidebar = false; // reset sidebar state
            this.menu = val;
        },

        // layout
        layout: Alpine.$persist($themeConfig.layout),
        toggleLayout(val) {
            if (!val) {
                val = this.layout || $themeConfig.layout; // full, boxed-layout
            }

            this.layout = val;
        },

        // rtl support
        rtlClass: Alpine.$persist($themeConfig.rtlClass),
        toggleRTL(val) {
            if (!val) {
                val = this.rtlClass || $themeConfig.rtlClass; // rtl, ltr
            }

            this.rtlClass = val;
            this.setRTLLayout();
        },

        setRTLLayout() {
            document.querySelector('html').setAttribute('dir', this.rtlClass || $themeConfig.rtlClass);
        },

        // animation
        animation: Alpine.$persist($themeConfig.animation),
        toggleAnimation(val) {
            if (!val) {
                val = this.animation || $themeConfig.animation;
            }
            val = val?.trim();

            this.animation = val;
        },

        // navbar type
        navbar: Alpine.$persist($themeConfig.navbar),
        toggleNavbar(val) {
            if (!val) {
                val = this.navbar || $themeConfig.navbar;
            }

            this.navbar = val;
        },
        // footer type
        footer: Alpine.$persist($themeConfig.footer),
        toggleFooter(val) {
            if (!val) {
                val = this.footer || $themeConfig.footer;
            }

            this.footer = val;
        },

        // semi dark
        semiDark: Alpine.$persist($themeConfig.semiDark),

        // multi language
        locale: Alpine.$persist($themeConfig.locale),
        toggleLocale(val) {
            if (!val) {
                val = this.locale || $themeConfig.locale;
            }

            this.locale = val;
        },

        // sidebar
        sidebar: Alpine.$persist($themeConfig.sidebar),
        toggleVMenu() {
            this.sidebar = !this.sidebar;
        },

        collapsibleMenu() {
            this.menu = this.menu == 'collapsible' ? 'vertical' : 'collapsible';
        },

        // window full screen
        fullscreen: false,
        toggleFullscreen() {
            if (this.fullscreen) {
                document.exitFullscreen();
            } else {
                document.documentElement.requestFullscreen();
            }
            this.fullscreen = !this.fullscreen;
        },
    });

    //? alpine data
    Alpine.data('twilightTheme', () => ({
        showCustomizer: false,
        init() {
            this.$store.app.setRTLLayout();
            // watch showCustomizer
            this.$watch('showCustomizer', value => {
                if (value) {
                    document.body.classList.add('overflow-hidden');
                } else {
                    document.body.classList.remove('overflow-hidden');
                }
            });
        },
        toggleCustomizer() {
            this.showCustomizer = !this.showCustomizer;
        },
        get appConfig() {
            const app = this.$store.app;
            const sidebar = app.sidebar && 'toggle-menu';
            let theme = app.theme;
            if (theme == 'system') {
                theme = !!window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            }
            return [sidebar, theme, app.menu, app.layout];
        },
        get isFullscreen() {
            return this.$store.app.fullscreen ? 'fullscreen_exit' : 'fullscreen';
        },
        get themeIcon() {
            return this.$store.app.theme == 'system' ? 'brightness_auto' : `${this.$store.app.theme}_mode`;
        },
    }));

    // set current year in footer
    const yearEle = document.querySelector('#footer-year');
    if (yearEle) {
        yearEle.innerHTML = new Date().getFullYear();
    }

    Alpine.data('collapse', () => ({
        collapse: false,

        collapseSidebar() {
            this.collapse = !this.collapse;
        },
    }));

    Alpine.data('modal', (initialOpenState = false) => ({
        open: initialOpenState,

        toggle(event) {
            this.open = !this.open;
            // if click esc key
            if (event && event.keyCode === 27) this.open = false;
        },
    }));

    // Magic: $tooltip
    Alpine.magic('tooltip', el => (message, placement) => {
        let instance = tippy(el, {
            content: message,
            trigger: 'manual',
            placement: placement || undefined,
            allowHTML: true,
        });

        instance.show();
    });

    Alpine.directive('dynamictooltip', (el, { expression }, { evaluate }) => {
        let string = evaluate(expression);
        tippy(el, {
            content: string.charAt(0).toUpperCase() + string.slice(1),
        });
    });

    // Directive: x-tooltip
    Alpine.directive('tooltip', (el, { expression }) => {
        tippy(el, {
            content: expression,
            placement: el.getAttribute('data-placement') || undefined,
            allowHTML: true,
            delay: el.getAttribute('data-delay') || 0,
            animation: el.getAttribute('data-animation') || 'fade',
            theme: el.getAttribute('data-theme') || '',
        });
    });

    // Magic: $popovers
    Alpine.magic('popovers', el => (message, placement) => {
        let instance = tippy(el, {
            content: message,
            placement: placement || undefined,
            interactive: true,
            allowHTML: true,
            delay: el.getAttribute('data-delay') || 0,
            animation: el.getAttribute('data-animation') || 'fade',
            theme: el.getAttribute('data-theme') || '',
            trigger: el.getAttribute('data-trigger') || 'click',
        });

        instance.show();
    });

    Alpine.start();
})();

// ripple effect
document.addEventListener('DOMContentLoaded', function () {
    // screen loader
    const loading = document.getElementsByClassName('loading');
    if (loading?.length) {
        loading[0].classList.add('animate__fadeOut');
        setTimeout(() => {
            loading[0].remove();
        }, 200);
    }

    // scroll top
    document.querySelector('.scroll-top').addEventListener('click', () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
    // get all elements with ripple attribute
    const ripples = document.querySelectorAll('[data-ripple]');

    // add event listener to each element
    function debounce(func, delay) {
        let inDebounce;

        return function () {
            let args = arguments;
            let context = this;

            clearTimeout(inDebounce);
            return (inDebounce = setTimeout(() => {
                return func.apply(context, args);
            }, delay));
        };
    }

    // add event listener to each element
    function addRipple(e) {
        const rippleContainer = this.querySelector('.ripple--container');

        const size = rippleContainer.offsetWidth;
        const pos = rippleContainer.getBoundingClientRect();
        const rippler = document.createElement('span');
        const x = e.pageX - pos.left - size / 2;
        const y = e.pageY - pos.top - size / 2;
        let style = `top: ${y}px; left: ${x}px; height: ${size}px; width: ${size}px;`;

        // adding optional option for ripple
        if (this.getAttribute('ripple-color')) {
            style += `background-color: ${this.getAttribute('ripple-color')}`;
        }

        if (this.getAttribute('ripple-radius')) {
            style += `border-radius: ${this.getAttribute('ripple-radius')}`;
        }

        rippleContainer.appendChild(rippler);
        rippler.setAttribute('style', style);
    }

    // remove all ripples
    function cleanUp(e) {
        const rippleContainer = this.querySelector('.ripple--container');
        while (rippleContainer.firstChild) {
            rippleContainer.removeChild(rippleContainer.firstChild);
        }
    }
    // add event listener to each element
    ripples.forEach(ripple => {
        const rippleContainer = document.createElement('div');
        rippleContainer.className = 'ripple--container';

        // add ripple on mouse click
        ripple.addEventListener('mousedown', addRipple);
        // remove ripple after mouse click
        ripple.addEventListener('mouseup', debounce(cleanUp, 2000));

        ripple.rippleContainer = rippleContainer;
        ripple.appendChild(rippleContainer);
    });

    // nav-tabs
    document.querySelectorAll('.nav-tabs').forEach(function (elem) {
        elem.querySelectorAll('[data-tw-toggle="tab"]').forEach(function (item) {
            item.addEventListener('click', function () {
                var tabID = item.getAttribute('data-tw-target');
                var tabContents = elem.querySelectorAll('.tab-content > .tab-pane');

                var activeElem = elem.querySelector('[data-tw-toggle="tab"].active');
                if (activeElem) activeElem.classList.remove('active');

                // clear value
                for (let i = 0; i < tabContents.length; i++) {
                    tabContents[i].classList.add('hidden');
                    tabContents[i].classList.remove('block');
                }

                // change value
                item.classList.add('active');
                document.getElementById(tabID).classList.remove('hidden');
                document.getElementById(tabID).classList.add('block');
            });
        });
    });

    /********* Alert common js *********/

    // alert dismissible
    if (document.querySelectorAll('.alert-dismissible')) {
        var alertDismiss = document.querySelectorAll('.alert-dismissible');

        Array.from(alertDismiss).forEach(function (elem) {
            elem.querySelector('.alert-dismiss').addEventListener('click', function () {
                elem.classList.add('hidden');
            });
        });
    }
});
