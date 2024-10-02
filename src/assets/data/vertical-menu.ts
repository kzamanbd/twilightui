export default [
    {
        name: 'Dashboard',
        icon: 'icon-[mdi--square-rounded-badge-outline]',
        children: [
            {
                name: 'Sales',
                href: '/dashboard/sales'
            },
            {
                name: 'Crypto',
                href: '/dashboard/crypto'
            },
            {
                name: 'CRM',
                href: '/dashboard/crm'
            },
            {
                name: 'HRM',
                href: '/dashboard/hrm'
            },
            {
                name: 'Analytics',
                href: '/dashboard/analytics'
            },
            {
                name: 'ECommerce',
                href: '/dashboard/ecommerce'
            },
            {
                name: 'Projects',
                href: '/dashboard/projects'
            }
        ]
    },
    {
        group: true,
        title: 'USER INTERFACE'
    },
    {
        name: 'Components',
        icon: 'icon-[mdi--layers-outline]',
        href: '/',
        children: [
            {
                name: 'Accordion',
                href: '/components/accordions'
            },
            {
                name: 'Cards',
                href: '/components/cards'
            },
            {
                name: 'Carousel',
                href: '/components/carousel'
            },
            {
                name: 'Lightbox',
                href: '/components/lightbox'
            },
            {
                name: 'Modals',
                href: '/components/modals'
            },
            {
                name: 'Progress',
                href: '/components/progress'
            },
            {
                name: 'SweetAlert2',
                href: '/components/sweetalert'
            },
            {
                name: 'Tabs',
                href: '/components/tabs'
            },
            {
                name: 'Toasts',
                href: '/components/toasts'
            }
        ]
    },
    {
        name: 'UI Elements',
        icon: 'icon-[mdi--hexagon-outline]',
        href: '/',
        children: [
            {
                name: 'Alerts',
                href: '/elements/alerts'
            },
            {
                name: 'Avatars',
                href: '/elements/avatars'
            },
            {
                name: 'Badges',
                href: '/elements/badges'
            },
            {
                name: 'Breadcrumbs',
                href: '/elements/breadcrumbs'
            },
            {
                name: 'Buttons',
                href: '/elements/buttons'
            },
            {
                name: 'Countdown',
                href: '/elements/countdown'
            },
            {
                name: 'Dropdowns',
                href: '/elements/dropdowns'
            },
            {
                name: 'Drawers',
                href: '/ui-drawer'
            },
            {
                name: 'Popovers',
                href: '/elements/popovers'
            },
            {
                name: 'Tooltips',
                href: '/elements/tooltips'
            },
            {
                name: 'Treeview',
                href: '/elements/treeview'
            },
            {
                name: 'Typography',
                href: '/elements/typography'
            }
        ]
    },
    {
        name: 'Charts',
        icon: 'icon-[mdi--poll]',
        href: '/',
        children: [
            {
                name: 'ApexChart',
                href: '/charts/apexcharts'
            },
            {
                name: 'ChartJs',
                href: '/charts/chartjs'
            },
            {
                name: 'E Charts',
                href: '/charts/echarts'
            }
        ]
    },
    {
        name: 'Icons',
        icon: 'icon-[mdi--shape-outline]',
        href: '/icons',
        children: []
    },
    {
        name: 'Widgets',
        icon: 'icon-[mdi--widgets-outline]',
        href: '/widgets',
        children: []
    },
    {
        name: 'Drag & Drop',
        icon: 'icon-[mdi--drag-variant]',
        href: '/dragndrop',
        children: []
    },
    {
        group: true,
        title: 'TABLES AND FORMS'
    },
    {
        name: 'Tables',
        icon: 'icon-[mdi--table]',
        href: '/table-layout',
        children: []
    },
    {
        name: 'Data Tables',
        icon: 'icon-[mdi--table-large-plus]',
        href: '/',
        children: [
            {
                name: 'Basic',
                href: '/datatables/basic'
            },
            {
                name: 'Advanced',
                href: '/datatables/advanced'
            },
            {
                name: 'Order Sorting',
                href: '/datatables/order-sorting'
            },
            {
                name: 'Multi Column',
                href: '/datatables/multi-column'
            },
            {
                name: 'Checkbox',
                href: '/datatables/checkbox'
            },
            {
                name: 'Range Search',
                href: '/datatables/range-search'
            },
            {
                name: 'Export',
                href: '/datatables/export'
            },
            {
                name: 'Sticky Header',
                href: '/datatables/sticky-header'
            },
            {
                name: 'Clone Header',
                href: '/datatables/clone-header'
            },
            {
                name: 'Column Chooser',
                href: '/datatables/column-chooser'
            }
        ]
    },
    {
        name: 'Form Elements',
        icon: 'icon-[mdi--format-textbox]',
        href: '/',
        children: [
            {
                name: 'Basic Elements',
                href: '/forms/basic'
            }
        ]
    },
    {
        group: true,
        title: 'USER AND PAGES'
    },
    {
        name: 'Calendars',
        icon: 'icon-[mdi--calendar-blank]',
        href: '/apps/calendars',
        children: []
    },
    {
        name: 'Chats',
        icon: 'icon-[mdi--message-text-outline]',
        href: '/apps/chats',
        children: []
    },
    {
        name: 'Mailbox',
        icon: 'icon-[mdi--email-outline]',
        href: '/apps/mailbox',
        children: []
    },
    {
        name: 'Todo List',
        icon: 'icon-[mdi--list-box-outline]',
        href: '/apps/todos',
        children: []
    },
    {
        name: 'ScrumBoard',
        icon: 'icon-[mdi--plus-box-outline]',
        href: '/apps/scrumboard',
        children: []
    },
    {
        name: 'Projects',
        icon: 'icon-[mdi--abacus]',
        href: '/apps/projects',
        children: []
    },
    {
        name: 'User Profile',
        icon: 'icon-[mdi--account-switch]',
        href: '/',
        children: [
            {
                name: 'Overview',
                href: '/user-profile/overview'
            },
            {
                name: 'Documents',
                href: '/user-profile/documents'
            },
            {
                name: 'Followers',
                href: '/user-profile/followers'
            },
            {
                name: 'Activities',
                href: '/user-profile/activities'
            }
        ]
    },
    {
        name: 'Accounts',
        icon: 'icon-[mdi--badge-account-horizontal-outline]',
        href: '/',
        children: [
            {
                name: 'Overview',
                href: '/accounts/overview'
            },
            {
                name: 'Settings',
                href: '/accounts/settings'
            },
            {
                name: 'Statements',
                href: '/accounts/statements'
            },
            {
                name: 'Activities',
                href: '/accounts/activities'
            },
            {
                name: 'Logs',
                href: '/accounts/logs'
            }
        ]
    },
    {
        name: 'Authentication',
        icon: 'icon-[mdi--logout-variant]',
        href: '/',
        children: [
            {
                name: 'Login',
                href: '/login'
            },
            {
                name: 'Register',
                href: '/authentication/register'
            },
            {
                name: 'Reset Password',
                href: '/authentication/reset-password'
            },
            {
                name: 'Forget Password',
                href: '/authentication/forget-password'
            },
            {
                name: 'New Password',
                href: '/authentication/new-password'
            }
        ]
    },
    {
        name: 'Corporate',
        icon: 'icon-[mdi--home-group]',
        href: '/',
        children: [
            {
                name: 'About',
                href: '/corporate/about'
            },
            {
                name: 'Our Team',
                href: '/corporate/our-team'
            },
            {
                name: 'Contact Us',
                href: '/corporate/contact-us'
            },
            {
                name: 'Licenses',
                href: '/corporate/licenses'
            },
            {
                name: 'Sitemap',
                href: '/corporate/sitemap'
            }
        ]
    },
    {
        name: 'Utilities',
        icon: 'icon-[mdi--cog]',
        href: '/',
        children: [
            {
                name: 'Modals',
                href: '/utilities/modals'
            },
            {
                name: 'Search',
                href: '/utilities/search'
            },
            {
                name: 'Wizards',
                href: '/utilities/wizards'
            }
        ]
    },
    {
        name: 'Careers',
        icon: 'icon-[mdi--briefcase-outline]',
        href: '/',
        children: [
            {
                name: 'Careers List',
                href: '/careers/careers-list'
            },
            {
                name: 'Careers Apply',
                href: '/careers/apply'
            }
        ]
    },
    {
        name: 'ECommerce',
        icon: 'icon-[mdi--basket-outline]',
        href: '/',
        children: [
            {
                name: 'Category',
                href: '/eCommerce/category'
            },
            {
                name: 'Sales',
                href: '/eCommerce/sales'
            },
            {
                name: 'Customers',
                href: '/eCommerce/customers'
            },
            {
                name: 'Reports',
                href: '/eCommerce/reports'
            },
            {
                name: 'Settings',
                href: '/eCommerce/settings'
            }
        ]
    },
    {
        name: 'Contacts',
        icon: 'icon-[mdi--contacts-outline]',
        href: '/',
        children: [
            {
                name: 'Getting Started',
                href: '/contacts/getting-started'
            },
            {
                name: 'Add Contact',
                href: '/contacts/add-contact'
            },
            {
                name: 'Edit Contact',
                href: '/contacts/edit-contact'
            },
            {
                name: 'View Contact',
                href: '/contacts/view-contact'
            },
            {
                name: 'Settings',
                href: '/contacts/settings'
            }
        ]
    },
    {
        name: 'User Management',
        icon: 'icon-[mdi--account-key]',
        href: '/',
        children: [
            {
                name: 'Users',
                href: '/user-management/users'
            },
            {
                name: 'Roles',
                href: '/user-management/roles'
            },
            {
                name: 'Permissions',
                href: '/user-management/permissions'
            }
        ]
    },
    {
        name: 'Customers',
        icon: 'icon-[mdi--face-agent]',
        href: '/',
        children: [
            {
                name: 'Getting Started',
                href: '/customers/getting-started'
            },
            {
                name: 'Customer Listing',
                href: '/customers/customer-listing'
            },
            {
                name: 'Customer Details',
                href: '/customers/customer-details'
            }
        ]
    }
];
