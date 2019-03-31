import React from 'react'
import Child from './Child'
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
        let style = {
            padding: 50
        }
        return <div style={style}>
            <p>React生命周期介绍</p>
            <button onClick={this.handleAdd.bind(this)}>点击一下</button>
            <p>{this.state.count}</p>
            <Child name={this.state.count}></Child>
        </div>
    }
}