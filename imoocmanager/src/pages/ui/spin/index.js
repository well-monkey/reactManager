import React from 'react'
import { Card, Spin, Icon, Alert } from 'antd'
import './../ui.less'

export default class Loadings extends React.Component{

    render() {
        const icons = <Icon type="loading" style={{ fontSize: 24 }}/>
        return(
            <div>
                <Card title="Spin用法" className="card-wrap">
                    <Spin size="small"/>
                    <Spin  style={{margin:'0 10px'}}/>
                    <Spin size="large"/>
                    <Spin indicator={icons} style={{ marginLeft: 10}}></Spin>
                </Card>
                <Card title="内容遮罩" className="card-wrap">
                    <Spin>
                        <Alert 
                            message="React"
                            description="欢迎来到react实战"
                            type="warning"
                        />
                    </Spin>
                    <Spin>
                        <Alert 
                            message="React"
                            description="欢迎来到react实战"
                            type="info"
                        />
                    </Spin>
                    <Spin tip="加载中……">
                        <Alert 
                            message="React"
                            description="欢迎来到react实战"
                            type="warning"
                        />
                    </Spin>
                    <Spin indicator={icons}>
                        <Alert 
                            message="React"
                            description="欢迎来到react实战"
                            type="info"
                        />
                    </Spin>
                </Card>
            </div>
        )
    }
}