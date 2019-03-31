import React from 'react'
import Child from './Child'
import { Button } from 'antd';
import './life.less'
import 'antd/dist/antd.css';
export default class Life extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            data: new Date(),
            count: 0
        }
    }

    handleAdd() {
        console.log(this.state.count);
        this.setState({
            count:this.state.count+1
        })
    }

    render() {
        return <div className="content">
            <p>React生命周期介绍</p>
            <Button type="primary" onClick={this.handleAdd.bind(this)}>antd点击一下</Button>
            <p>{this.state.count}</p>
            <Child name={this.state.count}></Child>
        </div>
    }
}