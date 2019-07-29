import React from 'react'
import {
    Card,
    Row,
    Col
} from 'antd'
import './../ui.less'

export default class Tab extends React.Component {

    render() {
        const imgs = [
            ['1.png', '2.png', '3.png', '4.png', '5.png'],
            ['6.png', '7.png', '8.png', '9.png', '10.png'],
            ['11.png', '12.png', '13.png', '14.png', '15.png'],
            ['16.png', '17.png', '18.png', '19.png', '20.png']
        ];
        const imgList = imgs.map((list) => list.map((item) =>
            <
            Card title = "tab页签"
            className = "card-wrap" >

            <
            /Card>
        ))
        return ( <
            div >
            <
            Card title = "tab页签"
            className = "card-wrap" >

            <
            /Card> <
            /div>
        );
    }
}