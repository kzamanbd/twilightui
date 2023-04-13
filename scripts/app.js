// alpine.js config
import collapse from '@alpinejs/collapse';
import focus from '@alpinejs/focus';
import mask from '@alpinejs/mask';
import persist from '@alpinejs/persist';
import Alpine from 'alpinejs';
window.Alpine = Alpine;
Alpine.plugin(collapse);
Alpine.plugin(persist);
Alpine.plugin(focus);
Alpine.plugin(mask);

import 'animate.css';
// simplebar
import 'simplebar'; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
import 'simplebar/dist/simplebar.css';

import { createPopper } from '@popperjs/core';

// You will need a ResizeObserver polyfill for browsers that don't support it! (iOS Safari, Edge, ...)
import ResizeObserver from 'resize-observer-polyfill';
window.ResizeObserver = ResizeObserver;

// tippy.js for tooltip
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css'; // optional for styling

// sweetalert2
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
window.Swal = Swal;

// initialize quill editor
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
window.Quill = Quill;

// initialize sortablejs
import { MultiDrag, Sortable, Swap } from 'sortablejs';
window.Sortable = Sortable;
Sortable.mount(new MultiDrag());
Sortable.mount(new Swap());

// file upload with preview
import { FileUploadWithPreview } from 'file-upload-with-preview';
window.FileUploadWithPreview = FileUploadWithPreview;

// clipboard
import ClipboardJS from 'clipboard';
window.ClipboardJS = ClipboardJS;

// flatpickr
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.css';
window.flatpickr = flatpickr;

// simple datatables
import { DataTable, exportCSV, exportJSON, exportTXT } from 'simple-datatables';
import 'simple-datatables/dist/style.css';
window.DataTable = DataTable;
window.DataTableExportCSV = exportCSV;
window.DataTableExportJSON = exportJSON;
window.DataTableExportTXT = exportTXT;

// app config
(function () {
    'use strict';

    //? alpine data
    Alpine.data('twilightTheme', () => ({
        init() {
            let pathName = window.location.pathname;
            if (pathName == '/') pathName = '/index.html';

            const selector = document.querySelector(`ul.tw-nav-menu a[href="${pathName}"]`);
            console.log(pathName, selector);
            if (selector) {
                selector.classList.add('active');
                const ul = selector.closest('ul.tw-dropdown-menu');
                if (ul) {
                    let elements = ul.closest('li.tw-menu-item').querySelectorAll('.tw-menu-link');
                    if (elements) {
                        elements = elements[0];
                        setTimeout(() => {
                            elements.click();
                        });
                    }
                }
            }
            this.$store.app.setRTLLayout();
        },
        showCustomizer: false,
    }));

    Alpine.store('accordion', {
        item: undefined,
    });

    Alpine.data('accordionItem', idx => ({
        init() {
            this.idx = idx;
        },
        idx: null,
        handleClick() {
            this.$store.accordion.item = this.$store.accordion.item != this.idx && this.idx;
        },
        activeDropdown() {
            return this.$store.accordion.item == this.idx && 'active';
        },
        expanded() {
            return this.$store.accordion.item == this.idx;
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

    Alpine.data('dropdown', (initialOpenState = false) => ({
        open: initialOpenState,

        toggle() {
            this.open = !this.open;
        },
        close() {
            this.open = false;
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
            // hideOnClick: el.getAttribute("data-dismissable") ? true : "toggle",
            delay: el.getAttribute('data-delay') || 0,
            animation: el.getAttribute('data-animation') || 'fade',
            theme: el.getAttribute('data-theme') || '',
            trigger: el.getAttribute('data-trigger') || 'click',
        });

        instance.show();
    });

    // theme config
    const $themeConfig = {
        locale: 'en', // en, da, de, el, es, fr, hu, it, ja, pl, pt, ru, sv, tr, zh
        theme: 'light', // light, dark, system
        rtlClass: 'ltr', // rtl, ltr
        menu: 'vertical', // vertical, collapsible-vertical, horizontal
        layout: 'full', // full, boxed-layout
        animation: 'animate__fadeIn', // animate__fadeIn, animate__fadeInDown, animate__fadeInUp, animate__fadeInLeft, animate__fadeInRight, animate__slideInDown, animate__slideInLeft, animate__slideInRight, animate__zoomIn
        navbar: 'navbar-sticky', // navbar-sticky, navbar-floating, navbar-static
        semiDark: false,
    };

    Alpine.store('app', {
        name: 'TwilightUI',
        // theme
        theme: Alpine.$persist($themeConfig.theme),
        toggleTheme(val) {
            let theme = $themeConfig.theme; // light|dark|system
            if (val) {
                theme = val;
            } else {
                if (this.theme === 'system') {
                    theme = 'light';
                } else if (this.theme === 'light') {
                    theme = 'dark';
                } else if (this.theme === 'dark') {
                    theme = 'system';
                }
            }

            this.theme = theme;
        },

        // navigation menu
        menu: Alpine.$persist($themeConfig.menu),
        toggleMenu(val) {
            if (!val) {
                val = this.menu || $themeConfig.menu; // vertical, collapsible-vertical, horizontal
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
                val = this.animation || $themeConfig.animation; // animate__fadeIn, animate__fadeInDown, animate__fadeInLeft, animate__fadeInRight
            }
            val = val?.trim();

            this.animation = val;
        },

        // navbar type
        navbar: Alpine.$persist($themeConfig.navbar),
        toggleNavbar(val) {
            if (!val) {
                val = this.navbar || $themeConfig.navbar; // navbar-sticky, navbar-floating, navbar-static
            }

            this.navbar = val;
        },

        // semi dark
        semiDark: Alpine.$persist($themeConfig.semiDark),
        toggleSemiDark(val) {
            if (!val) {
                val = this.semiDark || $themeConfig.semiDark;
            }

            this.semiDark = val;
        },

        // multi language
        locale: Alpine.$persist($themeConfig.locale),
        toggleLocale(val) {
            if (!val) {
                val = this.locale || $themeConfig.locale;
            }

            this.locale = val;
        },

        // sidebar
        sidebar: false,
        toggleVMenu() {
            this.sidebar = !this.sidebar;
        },
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
});

(function () {
    'use strict';

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

        Array.from(alertDismiss).forEach(function (item) {
            item.querySelector('.alert-dismiss').addEventListener('click', function () {
                item.classList.add('hidden');
            });
        });
    }

    /********* dropdown common js *********/
    function dropdownEvent(elem, place) {
        Array.from(elem).forEach(function (item) {
            item.querySelectorAll('.dropdown-toggle').forEach(function (subitem) {
                subitem.addEventListener('click', function (event) {
                    subitem.classList.toggle('show');
                    var popper = createPopper(subitem, item.querySelector('.dropdown-menu'), {
                        placement: place,
                    });

                    if (subitem.classList.contains('show') != true) {
                        item.querySelector('.dropdown-menu').classList.remove('block');
                        item.querySelector('.dropdown-menu').classList.add('hidden');
                    } else {
                        dismissDropdownMenu();
                        item.querySelector('.dropdown-menu').classList.add('block');
                        item.querySelector('.dropdown-menu').classList.remove('hidden');
                        if (item.querySelector('.dropdown-menu').classList.contains('block')) {
                            subitem.classList.add('show');
                        } else {
                            subitem.classList.remove('show');
                        }
                        event.stopPropagation();
                    }

                    isMenuInside = false;
                });
            });
        });
    }

    var dropdownElem = document.querySelectorAll('.dropdown');
    var dropupElem = document.querySelectorAll('.dropup');
    var dropStartElem = document.querySelectorAll('.dropstart');
    var dropendElem = document.querySelectorAll('.dropend');
    var isShowDropMenu = false;
    var isMenuInside = false;
    // dropdown event
    dropdownEvent(dropdownElem, 'bottom-start');
    // dropup event
    dropdownEvent(dropupElem, 'top-start');
    // dropstart event
    dropdownEvent(dropStartElem, 'left-start');
    // dropend event
    dropdownEvent(dropendElem, 'right-start');

    function dismissDropdownMenu() {
        Array.from(document.querySelectorAll('.dropdown-menu')).forEach(function (item) {
            item.classList.remove('block');
            item.classList.add('hidden');
        });
        Array.from(document.querySelectorAll('.dropdown-toggle')).forEach(function (item) {
            item.classList.remove('show');
        });
        isShowDropMenu = false;
    }

    // dropdown form
    Array.from(document.querySelectorAll('.dropdown-menu')).forEach(function (item) {
        if (item.querySelectorAll('form')) {
            Array.from(item.querySelectorAll('form')).forEach(function (subitem) {
                subitem.addEventListener('click', function (event) {
                    if (!isShowDropMenu) {
                        isShowDropMenu = true;
                    }
                });
            });
        }
    });
    // data-tw-auto-close
    Array.from(document.querySelectorAll('.dropdown-toggle')).forEach(function (item) {
        var elem = item.parentElement;
        if (item.getAttribute('data-tw-auto-close') == 'outside') {
            elem.querySelector('.dropdown-menu').addEventListener('click', function () {
                if (!isShowDropMenu) {
                    isShowDropMenu = true;
                }
            });
        } else if (item.getAttribute('data-tw-auto-close') == 'inside') {
            item.addEventListener('click', function () {
                isShowDropMenu = true;
                isMenuInside = true;
            });
            elem.querySelector('.dropdown-menu').addEventListener('click', function () {
                isShowDropMenu = false;
                isMenuInside = false;
            });
        }
    });

    window.addEventListener('click', function (e) {
        if (!isShowDropMenu && !isMenuInside) {
            dismissDropdownMenu();
        }
        isShowDropMenu = false;
    });
})();
