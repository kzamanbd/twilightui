// alpine.js config
import Alpine from 'alpinejs';
window.Alpine = Alpine;

// simplebar
import 'simplebar'; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
import 'simplebar/dist/simplebar.css';

// You will need a ResizeObserver polyfill for browsers that don't support it! (iOS Safari, Edge, ...)
import ResizeObserver from 'resize-observer-polyfill';
window.ResizeObserver = ResizeObserver;

(function () {
    'use strict';

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
            return this.$store.accordion.tab == this.idx ? 'active' : '';
        },
        handleToggle() {
            return this.$store.accordion.tab == this.idx
                ? `max-height: ${this.$refs.tab.scrollHeight}px; margin-top: 8px`
                : '';
        },
    }));

    Alpine.start();
})();

document.addEventListener('DOMContentLoaded', function () {
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
})();
