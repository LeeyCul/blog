import * as React from 'react'
import { Divider, Tooltip } from 'antd'

import './styles.scss'

function Synopsis() {
    const iconList: Array<Layouts.IState> = [
        { icon: 'icon-github', url: 'https://github.com/LeeyCul' },
        { icon: 'icon-logo-wechat', url: '', text: '微信号： kyxiaopei' },
        { icon: 'icon-email', url: 'https://mail.163.com/' }
    ]

    return (
        <div className="synopsis-conainer">
            <h3>博客简介</h3>
            <div>
                <img src={require('../../assets/img/logo1.png')} width="100%" />
            </div>
            <p>一个关注Web前端开发技术、关注用户体验、坚持更多项目分享的个人网站，愿景：成为一个优秀的前端工程师</p>
            <div>
                <Divider>社交账号</Divider>
            </div>
            <div className="account">
                {iconList.map(item => {
                    if (item.url.length) {
                        return (
                            <a href={item.url} key={item.url}>
                                <i className={item.icon} />
                            </a>
                        )
                    }
                    return (
                        <Tooltip placement="top" title={item.text} key={item.url}>
                            <a
                                href=""
                                onClick={(e: React.MouseEvent) => {
                                    e.preventDefault()
                                }}
                            >
                                <i className={item.icon} />
                            </a>
                        </Tooltip>
                    )
                })}
            </div>
        </div>
    )
}

export default Synopsis
