/**
 * dropdown
 * @version 1.0.0
 * @description A simple dropdown plugin for TwilightUI
 * @license MIT
 */

import { autoUpdate, computePosition, flip, hide, offset, shift } from '@floating-ui/dom';

import type { Middleware, Placement, Strategy } from '@floating-ui/dom';

interface DropdownOptions {
    placement?: Placement;
    strategy?: Strategy;
}

class Dropdown {
    private target: HTMLElement;
    private toggle: HTMLElement | null;
    private content: HTMLElement | null;
    private options: DropdownOptions;
    private cleanup: (() => void) | null = null;

    constructor(target: string | HTMLElement, options: DropdownOptions = {}) {
        if (typeof target === 'string') {
            this.target = document.querySelector(target) as HTMLElement;
        } else if (target instanceof HTMLElement) {
            this.target = target;
        } else {
            throw new Error('No target element found');
        }

        if (!this.target) {
            throw new Error('No target element found');
        }

        this.toggle = this.target.querySelector('.dropdown-toggle');
        this.content = this.target.querySelector('.dropdown-menu');

        if (!this.toggle) {
            throw new Error('No toggle element found');
        }

        if (!this.content) {
            throw new Error('No content element found');
        }

        this.options = options;
        this.init();
    }

    private init() {
        console.log('[Dropdown] init', this.target);
        const outsideClickListener = (e: MouseEvent) => {
            if (!this.target.contains(e.target as Node)) {
                this.content?.classList.remove('show');
                this.content?.classList.remove('animate-fade-in-up');
                removeClickListener();
            }
        };
        const removeClickListener = () => {
            this.cleanup?.();
            document.removeEventListener('click', outsideClickListener);
        };

        this.toggle?.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default action for links
            removeClickListener();
            this.updatePosition();
            this.content?.classList.toggle('show');
            this.content?.classList.toggle('animate-fade-in-up');
            document.addEventListener('click', outsideClickListener);
            console.log('click toggle');
        });
    }

    private computePosition() {
        if (this.options.strategy === 'fixed') {
            if (this.content) {
                this.content.style.position = 'fixed';
            }
        }

        computePosition(this.target, this.content as HTMLElement, {
            placement: this.options.placement || 'bottom-start',
            strategy: this.options.strategy || 'fixed',
            middleware: [flip(), shift(), offset(6), hide()] as Middleware[]
        }).then((position: any) => {
            const { referenceHidden } = position.middlewareData.hide;
            if (this.content) {
                Object.assign(this.content.style, {
                    visibility: referenceHidden ? 'hidden' : 'visible',
                    top: `${position.y}px`
                });
            }
        });
    }

    private updatePosition() {
        const cleanup = autoUpdate(this.target, this.content as HTMLElement, this.computePosition.bind(this));
        this.cleanup = cleanup;
    }
}

function dropdownActivator() {
    console.log('dropdownActivator');
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach((dropdown: any) => {
        new Dropdown(dropdown as HTMLElement, dropdown.dataset as unknown as DropdownOptions);
    });
}

document.addEventListener('DOMContentLoaded', dropdownActivator);
// Watch DOM changes for new dropdowns

function observeDropdowns() {
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
                if (node instanceof HTMLElement && node.classList.contains('dropdown')) {
                    console.log('New dropdown detected', node);
                    // Initialize the dropdown for new elements
                    new Dropdown(node as HTMLElement, node.dataset as unknown as DropdownOptions);
                }
            });
        });
    });

    observer.observe(document.body, {
        childList: true, // Detect when new elements are added/removed
        subtree: true // Detect within the subtree of elements
    });
}
// Start observing for new dropdowns dynamically added to the DOM
observeDropdowns();
