import React from 'react'
import Zmage from 'react-zmage'

import './styles.scss'

function ProView() {
    const url = [
        {
            src: require('../../../../assets/img/2.jpg'),
            alt: 'First image description'
        },
        {
            src: 'http://zmage.caldis.me/imgSet/childsDream/2.jpg',
            alt: 'Second image description'
        }
    ]
    return (
        <div className="proView_conainer">
            <div className="img_box">
                <Zmage
                    src={require('../../../../assets/img/2.jpg')}
                    alt="展示序列图片"
                    set={url}
                    animate={{
                        flip: 'fade'
                    }}
                />
            </div>
            <div className="synopsis">
                <div className="title">贵阳营商项目</div>
                <div className="text">
                    <div>项目背景：</div>
                    <p>
                        一个程序员的日常公众号文章大部分与知乎专栏学习编程同步。文章中很多链接在微信内部无法打开请直接点击阅读原文。每周两更，关注有惊喜。
                        大部分程序员在自学的道路上不知道走了多少坑，这个视频那个网站搞得自己晕头转向。对我个人来说我平常在学习的过程中喜欢看一些教程式的博客。这些博客的特点
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProView
