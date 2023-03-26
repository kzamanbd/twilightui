// alpine.js config
import Alpine from 'alpinejs';
window.Alpine = Alpine;

// simplebar
import 'simplebar'; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
import 'simplebar/dist/simplebar.css';

import { createPopper } from '@popperjs/core';

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

    /********* Alert common js *********/

    // alert dismissible
    if (document.querySelectorAll('.alert-dismissible')) {
        var alertDismiss = document.querySelectorAll('.alert-dismissible');

        Array.from(alertDismiss).forEach(function (item) {
            item.querySelector('.alert-close').addEventListener('click', function () {
                item.classList.add('hidden');
            });
        });
    }

    /********* dropdown common js *********/
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

    // Handler that uses various data-* attributes to trigger
    // specific actions, miming bootstraps attributes
    const triggers = Array.from(document.querySelectorAll('[data-toggle="collapse"]'));

    window.addEventListener(
        'click',
        ev => {
            const elm = ev.target;
            if (triggers.includes(elm)) {
                const selector = elm.getAttribute('data-target');
                collapse(selector, 'toggle');
            }
        },
        false,
    );

    const fnmap = {
        toggle: 'toggle',
        show: 'add',
        hide: 'remove',
    };
    const collapse = (selector, cmd) => {
        const targets = Array.from(document.querySelectorAll(selector));
        targets.forEach(target => {
            target.classList[fnmap[cmd]]('show');
        });
    };

    /********* modal common js *********/
    // openModal
    var modalTrigger = document.querySelectorAll('[data-tw-toggle="modal"]');
    var isModalShow = false;
    Array.from(modalTrigger).forEach(function (item) {
        item.addEventListener('click', function () {
            var target = this.getAttribute('data-tw-target').substr(1);
            var modalWindow = document.getElementById(target);

            if (modalWindow.classList.contains('hidden')) {
                modalWindow.classList.remove('hidden');
                document.body.classList.add('overflow-hidden');
            } else {
                modalWindow.classList.add('hidden');
                document.body.classList.remove('overflow-hidden');
            }
            isModalShow = false;

            if (item.getAttribute('data-tw-backdrop') == 'static') {
                isModalShow = true;
            }
        });
    });

    // closeButton
    var closeButton = document.querySelectorAll('[data-tw-dismiss="modal"]');
    Array.from(closeButton).forEach(function (subElem) {
        subElem.addEventListener('click', function () {
            var modalWindow = subElem.closest('.modal');
            if (modalWindow.classList.contains('hidden')) {
                modalWindow.classList.remove('hidden');
                document.body.classList.add('overflow-hidden');
            } else {
                modalWindow.classList.add('hidden');
                document.body.classList.remove('overflow-hidden');
            }
        });
    });

    // closeModal
    var modalElem = document.querySelectorAll('.modal');
    Array.from(modalElem).forEach(function (elem) {
        // modalOverlay
        var modalOverlay = elem.querySelectorAll('.modal-overlay');
        Array.from(modalOverlay).forEach(function (subItem) {
            subItem.addEventListener('click', function () {
                if (!isModalShow) {
                    if (elem.classList.contains('hidden')) {
                        elem.classList.remove('hidden');
                        document.body.classList.add('overflow-hidden');
                    } else {
                        elem.classList.add('hidden');
                        document.body.classList.remove('overflow-hidden');
                    }
                }
            });
        });

        // Escape
        document.addEventListener('keydown', function (event) {
            var key = event.key;
            if (!isModalShow) {
                if (key == 'Escape') {
                    elem.classList.add('hidden');
                    document.body.classList.remove('overflow-hidden');
                }
            }
        });
    });
})();
