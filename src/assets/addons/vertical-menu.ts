/**
 * Vertical Menus
 * @version 1.0.0
 * @description A simple vertical menus plugin for TwilightUI
 * @license MIT
 */

document.addEventListener('DOMContentLoaded', () => {
    const verticalMenu = document.querySelector('.vertical-menu') as HTMLElement | null;
    const content = document.querySelector('.tw-nav-menu') as HTMLElement | null;
    const menuItems = document.querySelectorAll('.tw-menu-link') as NodeListOf<HTMLElement>;
    const wrapper = document.querySelector('.twilight-body') as HTMLElement | null;
    const sidebarToggle = document.querySelectorAll('.toggle-sidebar') as NodeListOf<HTMLElement>;
    const overlay = document.querySelector('.menu-shadow') as HTMLElement | null;

    function toggleHeight(element: HTMLElement, height: number): void {
        // Function implementation, if any
    }

    function initMenuItems(): void {
        // Initialize menu items logic, if any
    }

    function initSidebarToggle(): void {
        if (sidebarToggle) {
            sidebarToggle.forEach((toggle) => {
                toggle.addEventListener('click', toggleSidebar);
            });
        }
        if (overlay) {
            overlay.addEventListener('click', toggleSidebar);
        }
    }

    function toggleSidebar(): void {
        const windowWidth = window.innerWidth;
        if (!verticalMenu || !overlay || !wrapper) return;

        if (windowWidth < 1024) {
            verticalMenu.classList.toggle('expanded');
            overlay.classList.toggle('hidden');
        } else {
            verticalMenu.classList.toggle('collapsed');
            wrapper.classList.toggle('expanded');
        }
    }

    function initWrapper(): void {
        if (verticalMenu && wrapper) {
            if (verticalMenu.classList.contains('collapsed')) {
                wrapper.classList.add('expanded');
            } else {
                wrapper.classList.remove('expanded');
            }
        }
    }

    function handleWindowResize(): void {
        if (!verticalMenu) return;

        window.addEventListener('resize', () => {
            if (window.innerWidth < 1024) {
                verticalMenu.classList.remove('collapsed');
            } else {
                verticalMenu.classList.remove('expanded');
            }
        });
    }

    function initScrollBar(): void {
        window.addEventListener('load', () => {
            let pathName = window.location.pathname;
            if (pathName === '/') pathName = '/index.html';

            const menuItem = document.querySelector(`ul.tw-nav-menu a[href="${pathName}"]`) as HTMLElement | null;
            const dropdownMenu = menuItem?.closest('ul.tw-dropdown-menu') as HTMLElement | null;

            if (menuItem) {
                menuItem.classList.add('active');
                if (dropdownMenu) {
                    const elements = dropdownMenu.closest('li.tw-menu-item')?.querySelectorAll('.tw-menu-link');
                    const firstElement = elements?.[0] as HTMLElement | undefined;

                    if (firstElement) {
                        setTimeout(() => {
                            firstElement.click();
                        });
                    }
                }
            }

            const activeMenu = content?.querySelector('.tw-menu-link.active') as HTMLElement | null;
            const activeSubmenu = content?.querySelector('.tw-dropdown-link.active') as HTMLElement | null;

            if (activeSubmenu) {
                activeSubmenu.scrollIntoView({ block: 'center', behavior: 'smooth' });
            } else if (activeMenu) {
                activeMenu.scrollIntoView({ block: 'center', behavior: 'smooth' });
            }
        });
    }

    initWrapper();
    initMenuItems();
    initScrollBar();
    initSidebarToggle();
    handleWindowResize();
});
