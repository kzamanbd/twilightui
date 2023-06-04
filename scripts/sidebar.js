const sidebar = {
    twilight: document.querySelector('.twilight'),
    wrapper: document.querySelector('.twilight-body'),
    sidebar: document.querySelector('.vertical-menu'),
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
            console.log(this.menuItems.length);
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
        const windowWidth = window.innerWidth;

        if (windowWidth < 1024) {
            document.querySelector('.menu-shadow').classList.toggle('hidden');
        }
        this.twilight.classList.toggle('toggle-menu');
    },

    initWrapper() {
        if (this.sidebar) {
            if (this.sidebar.classList.contains('collapsed')) {
                this.wrapper.classList.add('expanded');
            } else {
                this.wrapper.classList.remove('expanded');
            }
        }
    },

    initOverlay() {
        const overlay = document.createElement('div');
        overlay.classList.add('menu-shadow');
        document.body.appendChild(overlay);

        overlay.addEventListener('click', () => {
            this.sidebar.classList.remove('expanded');
            overlay.classList.remove('active');
        });
    },

    handleWindowResize() {
        if (this.sidebar) {
            window.addEventListener('resize', () => {
                if (window.innerWidth < 1024) {
                    this.sidebar.classList.remove('collapsed');
                    this.wrapper.classList.remove('expanded');
                } else {
                    this.sidebar.classList.remove('expanded');
                }
            });
        }
    },

    initSidebarHover() {
        if (this.sidebar) {
            this.sidebar.addEventListener('mouseenter', () => {
                if (window.innerWidth > 1024) {
                    this.sidebar.classList.add('hovered');
                }
            });

            this.sidebar.addEventListener('mouseleave', () => {
                if (window.innerWidth > 1024) {
                    this.sidebar.classList.remove('hovered');
                }
            });
        }
    },

    initScrollBar() {
        if (this.sidebar) {
            const activeMenu = this.content.querySelector('.sidebar-menu.active');
            const activeSubmenu = this.content.querySelector('.sidebar-submenu-item.active');
            window.addEventListener('load', () => {
                if (activeSubmenu) {
                    activeSubmenu.scrollIntoView({ block: 'center', behavior: 'smooth' });
                } else {
                    activeMenu.scrollIntoView({ block: 'center', behavior: 'smooth' });
                }
            });
        }
    },

    init() {
        this.initMenuItems();
        this.initSidebarToggle();
        this.initWrapper();
        this.initOverlay();
        this.handleWindowResize();
        this.initSidebarHover();
        // this.initScrollBar();
    },
};

export default sidebar;
