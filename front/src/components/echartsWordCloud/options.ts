const colorList: string[] = [
    '#929fff',
    '#9de0ff',
    '#ffa897',
    '#af87fe',
    '#7dc3fe',
    '#bb60b2',
    '#433e7c',
    '#f47a75',
    '#009db2',
    '#024b51',
    '#0780cf',
    '#765005',
    '#e75840',
    '#26ccd8',
    '#3685fe',
    '#9977ef',
    '#f5616f',
    '#f7b13f',
    '#f9e264',
    '#50c48f'
]
export const getOption = (data: any) => {
    return {
        title: {
            show: true, //显示策略，默认值true,可选为：true（显示） | false（隐藏）
            text: '热门标签', //主标题文本，'\n'指定换行
            x: 'center', // 水平安放位置，默认为左对齐，可选为：
            y: 'top', // 垂直安放位置，默认为全图顶端，可选为 'top' ¦ 'bottom' ¦ 'center'
            backgroundColor: 'rgba(0,0,0,0)',
            borderColor: '#ccc', // 标题边框颜色
            borderWidth: 0, // 标题边框线宽，单位px，默认为0（无边框）
            padding: 10, // 标题内边距，单位px，默认各方向内边距为5
            itemGap: 10, // 主副标题纵向间隔，单位px，默认为10，
            textStyle: {
                fontSize: 18,
                fontWeight: 'bolder',
                color: '#333' // 主标题文字颜色
            },
            subtextStyle: {
                color: '#aaa' // 副标题文字颜色
            }
        },
        backgroundColor: '#fff',
        tooltip: {},
        animationDurationUpdate: function(idx: number) {
            // 越往后的数据延迟越大
            return idx * 10
        },
        animationEasingUpdate: 'bounceIn',
        color: ['#fff', '#fff', '#fff'],
        series: [
            {
                type: 'graph',
                layout: 'force',
                draggable: true, // 是否可拖动
                cursor: 'pointer',
                force: {
                    repulsion: 50,
                    edgeLength: 10,
                    initLayout: 'circular',
                    layoutAnimation: true
                },
                roam: false, // 是否可以拖动
                label: {
                    normal: {
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        shadowBlur: 100,
                        shadowColor: function() {
                            return colorList[Math.floor(Math.random() * colorList.length)]
                        },
                        color: function() {
                            return colorList[Math.floor(Math.random() * colorList.length)]
                        }
                    }
                },
                data: data
            }
        ]
    }
}
