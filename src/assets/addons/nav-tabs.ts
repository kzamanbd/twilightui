/**
 * NavTabs Plugin
 * @version 1.0.0
 * @description A simple nav menus plugin for TwilightUI
 * @license MIT
 */

function navTabsActivator(): void {
    document.querySelectorAll('.nav-tabs').forEach(function (elem) {
        elem.querySelectorAll('[data-tw-toggle="tab"]').forEach(function (item) {
            item.addEventListener('click', function () {
                const tabID = item.getAttribute('data-tw-target') as string;
                const tabContents = elem.querySelectorAll('.tab-content > .tab-pane');

                const activeElem = elem.querySelector('[data-tw-toggle="tab"].active');
                if (activeElem) activeElem.classList.remove('active');

                // clear value
                for (let i = 0; i < tabContents.length; i++) {
                    tabContents[i].classList.add('hidden');
                    tabContents[i].classList.remove('block');
                }

                // change value
                item.classList.add('active');
                document?.getElementById(tabID)?.classList.remove('hidden');
                document?.getElementById(tabID)?.classList.add('block');
            });
        });
    });
}

// Watch DOM changes for new nav-tabs
const observer = new MutationObserver(navTabsActivator);
observer.observe(document.body, { childList: true, subtree: true });
document.addEventListener('DOMContentLoaded', navTabsActivator);
