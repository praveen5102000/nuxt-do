export let menuData = [
    {
        menuTitle: 'MAIN'
    },
    {
        type: 'sub',
        title: 'Dashboards',
        icon: 'bx bx-home',
        badge: '12',
        badgeColor: 'bg-warning-transparent',
        selected: false,
        active: false,
        dirchange: false,
        children: [
            {
                path: '/dashboard/crm',
                type: 'link',
                title: 'CRM',
                selected: false,
                active: false,
                dirchange: false,
            },
            {
                path: '/dashboard/sales',
                type: 'link',
                title: 'Sales',
                selected: false,
                active: false,
                dirchange: false,
            },
        ]
    },
    {
        menuTitle: 'GENERAL'
    },
    {
        path: '/widgets',
        type: 'link',
        title: 'Widgets',
        icon: 'bx bx-gift',
        badge: 'Hot',
        badgeColor: 'bg-danger-transparent',
        selected: false,
        active: false,
        dirchange: false,
    },
    {
        menuTitle: 'ICONS'
    },
    {
        path: '/icons',
        type: 'link',
        icon: 'bx bx-store-alt',
        title: 'Icons',
        selected: false,
        active: false,
        dirchange: false,
    },
    {
        menuTitle: 'UI TEMPLATES'
    },
    {
        path: '/page1',
        type: 'link',
        icon: 'bx bx-store-alt',
        title: 'Templates',
        selected: false,
        active: false,
        dirchange: false,
    },
   
   
];