import React from 'react'
import { List } from 'antd'

import './styles.scss'

function listItem(item: CommonComponent.RecommendView) {
    const { title, href, description } = item
    return (
        <div className="article-conainer">
            <img width="110" height="80" alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />
            <div className="right">
                <h4>
                    <a href={href}>{title}</a>
                </h4>
                <div>{description}</div>
            </div>
        </div>
    )
}

function RecommendView() {
    const listData = [
        {
            href: 'http://ant.design',
            title: `YzmCMS v5.6正式版发布0 `,
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            description:
                'YzmCMS是一款轻量级开源内容管理系统，它采轻量级开源内它采轻量级开容管理系统，它采用OOP轻量级开源内容管理系统，它采用OOP轻量级开源内容管理系统，它采用OOP轻量级开源内容管理系统，它采用OOP轻量级开源内容管理系统，它采用OOP轻量级开源内容管理系统，它采用OOP轻量级开源内容管理系统，它采用OOP轻量级开源内容管理系统，它采用OOP轻量级开源内容管理系统，它采用OOP轻量级开源内容管理系统，它采用OOP轻量级开源内容管理系统，它采用OOP用OOP（面向对象）方式自主开发的框架。基于PHP+Mysql架构，并采用MVC框架式开发的一款高效开源的内容管理系统，可运行在Linux、Windows、MacOSX、Solaris等各种平台上。'
        },
        {
            href: 'http://ant.design',
            title: `YzmCMS v5.6正式版发布 `,
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            description:
                'YzmCMS是一款轻量级开源内容管理系统，它采轻量级开源内它采轻量级开容管理系统，它采用OOP轻量级开源内容管理系统，它采用OOP轻量级开源内容管理系统，它采用OOP轻量级开源内容管理系统，它采用OOP轻量级开源内容管理系统，它采用OOP轻量级开源内容管理系统，它采用OOP轻量级开源内容管理系统，它采用OOP轻量级开源内容管理系统，它采用OOP轻量级开源内容管理系统，它采用OOP轻量级开源内容管理系统，它采用OOP轻量级开源内容管理系统，它采用OOP用OOP（面向对象）方式自主开发的框架。基于PHP+Mysql架构，并采用MVC框架式开发的一款高效开源的内容管理系统，可运行在Linux、Windows、MacOSX、Solaris等各种平台上。'
        },
        {
            href: 'http://ant.design',
            title: `YzmCMS v5.6正式版发布 `,
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            description:
                'YzmCMS是一款轻量级开源内容管理系统，它采轻量级开源内它采轻量级开容管理系统，它采用OOP轻量级开源内容管理系统，它采用OOP轻量级开源内容管理系统，它采用OOP轻量级开源内容管理系统，它采用OOP轻量级开源内容管理系统，它采用OOP轻量级开源内容管理系统，它采用OOP轻量级开源内容管理系统，它采用OOP轻量级开源内容管理系统，它采用OOP轻量级开源内容管理系统，它采用OOP轻量级开源内容管理系统，它采用OOP轻量级开源内容管理系统，它采用OOP用OOP（面向对象）方式自主开发的框架。基于PHP+Mysql架构，并采用MVC框架式开发的一款高效开源的内容管理系统，可运行在Linux、Windows、MacOSX、Solaris等各种平台上。'
        },
        {
            href: 'http://ant.design',
            title: `YzmCMS v5.6正式版发布 `,
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            description:
                'YzmCMS是一款轻量级开源内容管理系统，它采轻量级开源内它采轻量级开容管理系统，它采用OOP轻量级开源内容管理系统，它采用OOP轻量级开源内容管理系统，它采用OOP轻量级开源内容管理系统，它采用OOP轻量级开源内容管理系统，它采用OOP轻量级开源内容管理系统，它采用OOP轻量级开源内容管理系统，它采用OOP轻量级开源内容管理系统，它采用OOP轻量级开源内容管理系统，它采用OOP轻量级开源内容管理系统，它采用OOP轻量级开源内容管理系统，它采用OOP用OOP（面向对象）方式自主开发的框架。基于PHP+Mysql架构，并采用MVC框架式开发的一款高效开源的内容管理系统，可运行在Linux、Windows、MacOSX、Solaris等各种平台上。'
        },
        {
            href: 'http://ant.design1',
            title: `YzmCMS v5.6正式版发布 `,
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            description:
                'YzmCMS是一款轻量级开源内容管理系统，它采轻量级开源内它采轻量级开容管理系统，它采用OOP轻量级开源内容管理系统，它采用OOP轻量级开源内容管理系统，它采用OOP轻量级开源内容管理系统，它采用OOP轻量级开源内容管理系统，它采用OOP轻量级开源内容管理系统，它采用OOP轻量级开源内容管理系统，它采用OOP轻量级开源内容管理系统，它采用OOP轻量级开源内容管理系统，它采用OOP轻量级开源内容管理系统，它采用OOP轻量级开源内容管理系统，它采用OOP用OOP（面向对象）方式自主开发的框架。基于PHP+Mysql架构，并采用MVC框架式开发的一款高效开源的内容管理系统，可运行在Linux、Windows、MacOSX、Solaris等各种平台上。'
        }
    ]
    return <List itemLayout="horizontal" size="large" dataSource={listData} renderItem={item => listItem(item)} />
}

export default RecommendView
