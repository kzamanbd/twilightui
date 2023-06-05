const verticalMenu = {
    twilight: document.querySelector('.twilight'),
    verticalMenu: document.querySelector('.vertical-menu'),
    sidebarToggle: document.querySelector('.sidebar-toggle'),
    content: document.querySelector('.tw-nav-menu'),
    menuItems: document.querySelectorAll('.tw-menu-link'),

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
            this.sidebarToggle.addEventListener('click', () => this.toggleSidebar());
            document.querySelector('.collapse-icon').addEventListener('click', () => this.toggleSidebar());
        }
    },

    toggleSidebar() {
        document.querySelector('.menu-shadow').classList.toggle('hidden');
        this.twilight.classList.toggle('toggle-menu');
    },

    initOverlay() {
        const overlay = document.createElement('div');
        overlay.classList.add('menu-shadow');
        this.twilight.appendChild(overlay);

        overlay.addEventListener('click', () => {
            this.twilight.classList.toggle('toggle-menu');
            overlay.classList.toggle('hidden');
        });
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
            } else {
                activeMenu.scrollIntoView({ block: 'center', behavior: 'smooth' });
            }
        });
    },

    init() {
        this.initMenuItems();
        this.initSidebarToggle();
        this.initOverlay();
        this.initScrollBar();
    },
};

export default verticalMenu;
