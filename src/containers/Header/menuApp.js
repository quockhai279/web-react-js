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
                name: 'menu.admin.manage-doctor', link: '/system/user-doctor'
                // subMenus: [
                //     { name: 'menu.system.system-administrator.user-manage', link: '/system/user-manage' },
                //     { name: 'menu.system.system-administrator.user-redux', link: '/system/user-redux' },
                // ]
            },
            {
                name: 'menu.admin.manage-admin', link: '/system/manage-admin'
            },

        ]
    },
    {// quản lý sản phẩm
        name: 'menu.admin.product',
        menus: [
            {
                name: 'menu.admin.manage-product', link: '/system/manage-product'
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