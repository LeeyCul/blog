export default [
    { name: '用户数据统计', path: '/' },
    {
        name: '博客管理',
        path: '/1',
        children: [
            { name: '发表列表', path: '/a' },
            { name: '博客发布', path: '/b' }
        ]
    },
    { name: '博客设置', path: '/2' },
    { name: '文章贡献', path: '/3' },
    { name: '个人生活', path: '/4' },
    { name: '系统设置', path: '/5' }
]
