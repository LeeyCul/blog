import * as React from 'react'
import { Carousel } from 'antd'

import './styles.scss'

function Carousels() {
    const imgList: Array<string> = ['1.jpg', '2.jpg', '3.jpg', '4.jpg']
    return (
        <Carousel autoplay effect="fade" easing="swing">
            {imgList.map(item => {
                return (
                    <div key={item}>
                        <img src={require(`../../../../assets/img/${item}`)} width="100%" />
                    </div>
                )
            })}
        </Carousel>
    )
}

export default Carousels
