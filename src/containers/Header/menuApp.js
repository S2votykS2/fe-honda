export const adminMenu = [{
        //hệ thống
        name: "menu.system.header",
        menus: [{
                name: "menu.system.manage.manage-user",
                link: "/system/user-manage",

                // subMenus: [
                //   {
                //     name: "menu.system.manage.manage-specific.manage-seller",
                //     link: "/system/user-manage",
                //   },
                //   {
                //     name: "menu.system.manage.manage-specific.manage-customer",
                //     link: "/system/product-manage",
                //   },
                // ],
            },
            {
                name: "menu.system.manage.booking-try-drive",
                link: "/system/booking-try-drive",
            }
        ],
    },

    {
        name: "menu.home.header",
        menus: [{
                name: "menu.home.manage.header",
                link: "/system/home-header",
            },
            {
                name: "menu.home.manage.slider",
                link: "/system/home-slider",
            },
            {
                name: "menu.home.manage.product",
                link: "/system/product-manage",
            },
            {
                name: "menu.home.manage.operation",
                link: "/system/product-manage",
            },
            {
                name: "menu.home.manage.news",
                link: "/system/product-manage",
            },
        ],
    },

    {
        name: "menu.motorbike.header",
        menus: [{
                name: "menu.motorbike.manage.product",
                link: "/system/motorbike-manage",
                subMenus: [{
                        name: "menu.motorbike.manage.product",
                        link: "/system/motorbike-manage",
                    },
                    {
                        name: "menu.motorbike.manage.detail.intro",
                        link: "/system/motorbike-manage-intro",
                    },
                    {
                        name: "menu.motorbike.manage.detail.type",
                        link: "/system/motorbike-manage-type",
                    },
                    {
                        name: "menu.motorbike.manage.detail.info",
                        link: "/system/motorbike-manage-info",
                    },
                ],
            },

            {
                name: "menu.motorbike.manage.accessories",
                link: "/system/motorbike-manage-accessory",
            },
        ],
    },
    {
        name: "menu.car.header",
        menus: [{
                name: "menu.car.manage.product",
                link: "/system/car-manage",
                subMenus: [{
                        name: "menu.car.manage.product",
                        link: "/system/car-manage",
                    },
                    {
                        name: "menu.car.manage.detail.color",
                        link: "/system/car-manage-color",
                    },
                    {
                        name: "menu.car.manage.detail.base",
                        link: "/system/car-manage-base-inf",
                    },
                    {
                        name: "menu.car.manage.detail.technology",
                        link: "/system/car-manage-technology",
                    },
                ],
            },

            {
                name: "menu.motorbike.manage.accessories",
                link: "/system/motorbike-manage-accessory",
            },
        ],
    },
];