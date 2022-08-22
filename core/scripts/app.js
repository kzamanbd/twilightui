const pSidebar = new PerfectScrollbar('#sidebar-menu', {
    wheelSpeed: 2,
    wheelPropagation: true,
    minScrollbarLength: 20,
})
pSidebar.update()
document.addEventListener('alpine:init', () => {
    Alpine.store('dropdown', {
        tab: 1,
    })
    Alpine.data('dropdownItem', idx => ({
        init() {
            this.idx = idx
        },
        idx: -1,
        handleClick() {
            this.$store.dropdown.tab = this.$store.dropdown.tab == this.idx ? 0 : this.idx
        },
        handleRotate() {
            return this.$store.dropdown.tab == this.idx ? 'rotate-180' : ''
        },
        activeDropdown() {
            return this.$store.dropdown.tab == this.idx ? 'nav-link-active' : ''
        },
        handleToggle() {
            return this.$store.dropdown.tab == this.idx ? `max-height: ${this.$refs.tab.scrollHeight}px` : ''
        },
    }))
})

window.onload = function () {
    const header = document.getElementById('sticky__header')
    const scrollableContent = document.getElementById('scrollable-content')
    scrollableContent.addEventListener('scroll', () => {
        // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
        if (scrollableContent.scrollTop > 0) {
            header.classList.add('sticky-header')
        } else {
            header.classList.remove('sticky-header')
        }
    })
}
