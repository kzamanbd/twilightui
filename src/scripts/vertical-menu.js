const twilight = document.querySelector('.twilight');
const verticalMenu = document.querySelector('.vertical-menu');
const content = document.querySelector('.tw-nav-menu');
const menuItems = document.querySelectorAll('.tw-menu-link');
const wrapper = document.querySelector('.twilight-body');
const sidebarToggle = document.querySelectorAll('.toggle-sidebar');
const overlay = document.querySelector('.menu-shadow');

function toggleHeight(element, height) {
    if (element.style.height === '0px' || element.style.height === '') {
        element.style.height = `${height}px`;
    } else {
        element.style.height = '0px';
    }
}

function initMenuItems() {
    if (menuItems.length) {
        menuItems.forEach(menuItem => {
            const parent = menuItem.parentElement;
            const dropdown = parent.querySelector('.tw-dropdown-menu');
            const arrow = menuItem.querySelector('.tw-dropdown-arrow');

            if (dropdown) {
                menuItem.addEventListener('click', e => {
                    e.preventDefault();
                    toggleHeight(dropdown, dropdown.scrollHeight);
                    menuItem.classList.toggle('active');
                });
            }

            if (dropdown && menuItem.classList.contains('active')) {
                toggleHeight(dropdown, dropdown.scrollHeight);
                arrow.classList.toggle('rotate');
            }
        });
    }
}

function initSidebarToggle() {
    if (sidebarToggle) {
        sidebarToggle.forEach(toggle => {
            toggle.addEventListener('click', () => toggleSidebar());
        });
    }
    if (overlay) {
        overlay.addEventListener('click', () => toggleSidebar());
    }
}

function toggleSidebar() {
    const windowWidth = window.innerWidth;
    if (windowWidth < 1024) {
        verticalMenu.classList.toggle('expanded');
        overlay.classList.toggle('hidden');
    } else {
        verticalMenu.classList.toggle('collapsed');
        wrapper.classList.toggle('expanded');
    }
}

function initWrapper() {
    if (verticalMenu) {
        if (verticalMenu.classList.contains('collapsed')) {
            wrapper.classList.add('expanded');
        } else {
            wrapper.classList.remove('expanded');
        }
    }
}

function handleWindowResize() {
    if (verticalMenu) {
        window.addEventListener('resize', () => {
            if (window.innerWidth < 1024) {
                verticalMenu.classList.remove('collapsed');
            } else {
                verticalMenu.classList.remove('expanded');
            }
        });
    }
}

function initScrollBar() {
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
        const activeMenu = content?.querySelector('.tw-menu-link.active');
        const activeSubmenu = content?.querySelector('.tw-dropdown-link.active');
        if (activeSubmenu) {
            activeSubmenu.scrollIntoView({ block: 'center', behavior: 'smooth' });
        } else if (activeMenu) {
            activeMenu.scrollIntoView({ block: 'center', behavior: 'smooth' });
        }
    });
}

(function () {
    initWrapper();
    initMenuItems();
    initScrollBar();
    initSidebarToggle();
    handleWindowResize();
})();
