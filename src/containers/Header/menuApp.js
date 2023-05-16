export const adminMenu = [
    {// quản lý người dùng
        name: 'menu.admin.manage-user',
        menus: [
            {
                name: 'menu.admin.crud', link: '/system/user-manage'
            },
            {
                name: 'menu.admin.crud-redux', link: '/system/user-redux'
            },
            {
                name: 'menu.admin.manage-doctor', link: '/system/manage-doctor'
                // subMenus: [
                //     { name: 'menu.system.system-administrator.user-manage', link: '/system/user-manage' },
                //     { name: 'menu.system.system-administrator.user-redux', link: '/system/user-redux' },
                // ]
            },
            {// quản lý kế hoạch người dùng
                name: 'menu.doctor.manage-schedule',
                menus: [
                    {
                        name: 'menu.admin.crud', link: '/system/user-manage'
                    },
                ]
            },
        ]
    },
    {// quản lý sản phẩm
        name: 'menu.admin.product',
        menus: [
            {
                name: 'menu.admin.manage-product', link: '/system/product-manage'
            },
            {
                name: 'menu.admin.manage-product-redux', link: '/system/product-redux'
            },
        ]
    },
    {// quản lý bài đăng
        name: 'menu.admin.post',
        menus: [
            {
                name: 'menu.admin.manage-post', link: '/system/manage-post'
            },
        ]
    },
    {// quản lý đơn đặt hàng
        name: 'menu.admin.purchase-order',
        menus: [
            {
                name: 'menu.admin.manage-order', link: '/system/manage-order'
            },
        ]
    },
];
export const doctorMenu = [
    {// quản lý kế hoạch người dùng
        name: 'menu.doctor.manage-schedule',
        menus: [
            {
                name: 'menu.admin.crud', link: '/system/user-manage'
            },
        ]
    },
];

// export const doctorMenu = [
//     {// quản lý người dùng
//         name: 'menu.admin.manage-user',
//         menus: [
//             {
//                 name: 'menu.admin.crud', link: '/system/user-manage'
//             },
//             {
//                 name: 'menu.admin.crud-redux', link: '/system/user-redux'
//             },
//             {
//                 name: 'menu.admin.manage-doctor', link: '/system/manage-doctor'
//                 // subMenus: [
//                 //     { name: 'menu.system.system-administrator.user-manage', link: '/system/user-manage' },
//                 //     { name: 'menu.system.system-administrator.user-redux', link: '/system/user-redux' },
//                 // ]
//             },
//             {
//                 name: 'menu.admin.manage-admin', link: '/system/manage-admin'
//             },

//         ]
//     },
//     {// quản lý sản phẩm
//         name: 'menu.admin.product',
//         menus: [
//             {
//                 name: 'menu.admin.manage-product', link: '/system/product-manage'
//             },
//             {
//                 name: 'menu.admin.manage-product-redux', link: '/system/product-redux'
//             },
//         ]
//     },
//     {// quản lý bài đăng
//         name: 'menu.admin.post',
//         menus: [
//             {
//                 name: 'menu.admin.manage-post', link: '/system/manage-post'
//             },
//         ]
//     },
//     {// quản lý đơn đặt hàng
//         name: 'menu.admin.purchase-order',
//         menus: [
//             {
//                 name: 'menu.admin.manage-order', link: '/system/manage-order'
//             },
//         ]
//     },
// ];