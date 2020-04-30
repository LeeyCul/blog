import React from 'react'

import './styles.scss'

function List() {
    return (
        <>
            <h2>2020</h2>
            <ul>
                <li>
                    <span className="time">03/22</span>
                    <a href="/post/intersectionobserver">IntersectionObserver简单介绍及使用</a>
                    <span style={{ color: '#a8ced8', marginLeft: '30px' }}>1283次浏览</span>
                </li>
                <li>
                    <span className="time">03/22</span>
                    <a href="/post/intersectionobserver">IntersectionObserver简单介绍及使用</a>
                    <span style={{ color: '#a8ced8', marginLeft: '30px' }}>1283次浏览</span>
                </li>
                <li>
                    <span className="time">03/22</span>
                    <a href="/post/intersectionobserver">IntersectionObserver简单介绍及使用</a>
                    <span style={{ color: '#a8ced8', marginLeft: '30px' }}>1283次浏览</span>
                </li>
                <li>
                    <span className="time">03/22</span>
                    <a href="/post/intersectionobserver">IntersectionObserver简单介绍及使用</a>
                    <span style={{ color: '#a8ced8', marginLeft: '30px' }}>1283次浏览</span>
                </li>
            </ul>
        </>
    )
}

function Catalog() {
    return (
        <div className="catalog_box">
            <h1 className="title">文章存档</h1>
            <List />
            <List />
            <List />
            <List />
            <List />
            <List />
            <List />
            <List />
            <List />
        </div>
    )
}

export default Catalog
