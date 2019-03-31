import React from 'react'
import 'antd/dist/antd.css';
import { Row, Col } from 'antd'
import Header from './conponents/Header'
import Footer from './conponents/Footer'
import NavLeft from './conponents/NavLeft'
import './style/common.less'

export default class Admin extends React.Component{

    render() {
        return(
            <div>
                <Row  className="container">
                    <Col span={4} className="nav-left">
                        <NavLeft />
                    </Col>
                    <Col span={20} className="main">
                        <Header />
                        <Row className="content">
                            内容区域
                        </Row>
                        <Footer />
                    </Col>
                </Row>
            </div>
        )
    }
}