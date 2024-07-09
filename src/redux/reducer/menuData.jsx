const menuData = [
    {
        menuID: 0,
        menuDataParent: [
            {
                id: 0,
                menuTitle: 'My Space',
                menuLink: 'MySpace',
            },
            {
                id: 1,
                menuTitle: 'Private Reports',
                menuLink: 'PrivateReports',
            },
            {
                id: 2,
                menuTitle: 'Public Reports',
                menuLink: 'PublicReports',
            },
            {
                id: 3,
                menuTitle: 'Organizations',
                menuDataChild: [
                    {
                        id: 0,
                        cMenuItem: 'Users',
                    }
                ]
            },
            {
                id: 4,
                menuTitle: 'Favourites',
                menuLink: 'Favourites',
            },
        ]
    },
    {
        menuID: 1,
        menuDataParent: [
            {
                id: 0,
                menuTitle: 'Service 1',
                menuLink: 'Service1',
            },
            {
                id: 1,
                menuTitle: 'Service 2',
                menuLink: 'Service2',
            },
            {
                id: 2,
                menuTitle: 'Service 3',
                menuLink: 'Service3',
            },
            {
                id: 3,
                menuTitle: 'Service 4',
                menuLink: 'Service4',
            },
            {
                id: 4,
                menuTitle: 'Service 5',
                menuLink: 'Service5',
            },
        ]
    },
    {
        menuID: 2,
        menuDataParent: [
            {
                id: 0,
                menuTitle: 'Organization 1',
                menuLink: 'Organization1',
            },
            {
                id: 1,
                menuTitle: 'Organization 2',
                menuLink: 'Organization2',
            },
            {
                id: 2,
                menuTitle: 'Organization 3',
                menuLink: 'Organization3',
            },
            {
                id: 3,
                menuTitle: 'Organization 4',
                menuLink: 'Organization4',
            },
            {
                id: 4,
                menuTitle: 'Organization 5',
                menuLink: 'Organization5',
            },
        ]
    }

]

export default menuData;






