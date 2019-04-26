import React from 'react'
import { Card,Button } from 'antd'

export default class Buttons extends React.Component{

    render(){
        return(
            <div>
                <Card title="基础按钮" bordered={false} >
                    <Button>Imooc</Button>
                    <Button type="dashed">Imooc</Button>
                    <Button type="danger">Imooc</Button>
                    <Button disabled>Imooc</Button>
                </Card>
            </div>
        )
    }
}