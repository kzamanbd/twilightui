export default {
    twilight: document.querySelector('.twilight'),
    verticalMenu: document.querySelector('.vertical-menu'),
    content: document.querySelector('.tw-nav-menu'),
    menuItems: document.querySelectorAll('.tw-menu-link'),
    wrapper: document.querySelector('.twilight-body'),
    sidebarToggle: document.querySelectorAll('.toggle-sidebar'),
    overlay: document.querySelector('.menu-shadow'),

    toggleHeight(element, height) {
        if (element.style.height === '0px' || element.style.height === '') {
            element.style.height = `${height}px`;
        } else {
            element.style.height = '0px';
        }
    },

    initMenuItems() {
        if (this.menuItems.length) {
            this.menuItems.forEach(menuItem => {
                const parent = menuItem.parentElement;
                const dropdown = parent.querySelector('.tw-dropdown-menu');
                const arrow = menuItem.querySelector('.tw-dropdown-arrow');

                if (dropdown) {
                    menuItem.addEventListener('click', e => {
                        e.preventDefault();
                        this.toggleHeight(dropdown, dropdown.scrollHeight);
                        menuItem.classList.toggle('active');
                    });
                }

                if (dropdown && menuItem.classList.contains('active')) {
                    this.toggleHeight(dropdown, dropdown.scrollHeight);
                    arrow.classList.toggle('rotate');
                }
            });
        }
    },

    initSidebarToggle() {
        if (this.sidebarToggle) {
            this.sidebarToggle.forEach(toggle => {
                toggle.addEventListener('click', () => this.toggleSidebar());
            });
        }
        if (this.overlay) {
            this.overlay.addEventListener('click', () => this.toggleSidebar());
        }
    },

    toggleSidebar() {
        const windowWidth = window.innerWidth;
        if (windowWidth < 1024) {
            this.verticalMenu.classList.toggle('expanded');
            this.overlay.classList.toggle('hidden');
        } else {
            this.verticalMenu.classList.toggle('collapsed');
            this.wrapper.classList.toggle('expanded');
        }
    },

    initWrapper() {
        if (this.verticalMenu) {
            if (this.verticalMenu.classList.contains('collapsed')) {
                this.wrapper.classList.add('expanded');
            } else {
                this.wrapper.classList.remove('expanded');
            }
        }
    },

    handleWindowResize() {
        if (this.verticalMenu) {
            window.addEventListener('resize', () => {
                if (window.innerWidth < 1024) {
                    this.verticalMenu.classList.remove('collapsed');
                } else {
                    this.verticalMenu.classList.remove('expanded');
                }
            });
        }
    },

    initScrollBar() {
        window.addEventListener('load', () => {
            let pathName = window.location.pathname;
            if (pathName == '/') pathName = '/index.html';

            const menuItem = document.querySelector(`ul.tw-nav-menu a[href="${pathName}"]`);
            const dropdownMenu = menuItem?.closest('ul.tw-dropdown-menu');

            if (menuItem) {
                menuItem.classList.add('active');
                if (dropdownMenu) {
                    let elements = dropdownMenu.closest('li.tw-menu-item').querySelectorAll('.tw-menu-link');
                    if (elements) {
                        elements = elements[0];
                        setTimeout(() => {
                            elements.click();
                        });
                    }
                }
            }
            const activeMenu = this.content?.querySelector('.tw-menu-link.active');
            const activeSubmenu = this.content?.querySelector('.tw-dropdown-link.active');
            if (activeSubmenu) {
                activeSubmenu.scrollIntoView({ block: 'center', behavior: 'smooth' });
            } else if (activeMenu) {
                activeMenu.scrollIntoView({ block: 'center', behavior: 'smooth' });
            }
        });
    },

    init() {
        this.initWrapper();
        this.initMenuItems();
        this.initScrollBar();
        this.initSidebarToggle();
        this.handleWindowResize();
    },
};
