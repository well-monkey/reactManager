const menuList = [
    {
        title: '首页',
        key: 'admin/home'
    },
    {
        title: 'UI',
        key: '/admin/ui',
        children: [
            {
                title: '按钮',
                key: '/admin/ui/buttons'
            },
            {
                title: '弹框',
                key: '/admin/ui/modals'
            },
            {
                title: 'loading',
                key: '/admin/ui/loading'
            },
            {
                title: '饼图',
                key: '/admin/charts/pie'  
            },
            {
                title: '折线图',
                key: '/admin/charts/line'  
            }
        ]
    },
    {
        title: '权限设置',
        key: '/admin/permission'
    }
]