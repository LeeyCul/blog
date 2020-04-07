export default [
    { name: '首页', path: '/' },
    {
        name: '博客管理',
        path: '/blogManage',
        children: [
            { name: '添加修改文章', path: '/addArticle' },
            { name: '博客列表', path: '/articleList' }
        ]
    },
    {
        name: '留言管理',
        path: '/comment',
        children: [
            { name: '留言管理', path: '/messageManage' },
            { name: '评论管理', path: '/commentManage' }
        ]
    },
    { name: '权限管理', path: '/power' }
]
