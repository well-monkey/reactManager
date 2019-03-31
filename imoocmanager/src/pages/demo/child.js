import React from 'react'

export default class Child extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            data: new Date(),
            count: 0
        }
    }

    componentWillMount(){
        console.log('will mount')
    }

    componentDidMount(){
        console.log('did mount')
    }

    componentWillReceiveProps(newProps){
        console.log('will props'+newProps)
    }

    shouldComponentUpdate(){
        console.log('should update')
        return true;
    }

    componentWillUpdate(){
        console.log('well update')
    }

    componentDidUpdate(){
        console.log('did update')
    }


    render() {
        return<div>
            <p>这里是子组件 测试子组件的生命周期</p>
            <p>{this.props.name}</p>
        </div>
    }
}