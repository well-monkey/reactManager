import React from 'react'
import { Card, Tabs, Icon, message } from 'antd'
import './../ui.less'

export default class Tab extends React.Component{
    
    constructor(props) {
        super(props);
        this.newTabIndex = 0;
        const panes = [
            { title: 'Tab 1', content: 'Content of Tab Pane 1', key: '1' },
            { title: 'Tab 2', content: 'Content of Tab Pane 2', key: '2' },
        ];
        this.state = {
            activeKey: panes[0].key,
            panes,
        };
      }

    callback = (key) => {
        console.log(key);
        message.info(`当前标签是${key}`);
    }

    handleCallBack = (activeKey) => {
        this.setState({
            activeKey
        })
    }

    add = () => {
        const panes = this.state.panes;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: 'New Tab', content: 'New Tab Pane', key: activeKey });
        this.setState({ panes, activeKey });
    }
    
    remove = (targetKey) => {
        let activeKey = this.state.activeKey;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
          if (pane.key === targetKey) {
            lastIndex = i - 1;
          }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (panes.length && activeKey === targetKey) {
          if (lastIndex >= 0) {
            activeKey = panes[lastIndex].key;
          } else {
            activeKey = panes[0].key;
          }
        }
        this.setState({ panes, activeKey });
    }
    
    onEdit = (targetKey, action) => {
        this[action](targetKey);
    }

    
    render() {
        const TabPane = Tabs.TabPane;
        return(
            <div>
                <Card title="tab页签" className="card-wrap">
                    <Tabs defaultActiveKey="1" onChange={ this.callback }>
                        <TabPane tab="Tab 1" key="1">欢迎学习React课程 1</TabPane>
                        <TabPane tab="Tab 2" key="2" disabled>欢迎学习React课程 2</TabPane>
                        <TabPane tab="Tab 3" key="3">欢迎学习React课程 3</TabPane>
                    </Tabs>
                </Card>
                <Card title="tab带图的页签" className="card-wrap">
                    <Tabs defaultActiveKey="1">
                        <TabPane tab={<span><Icon type="plus" />Tab 1</span>} key="1">欢迎学习React课程 1</TabPane>
                        <TabPane tab={<span><Icon type="edit" />Tab 2</span>} key="2">欢迎学习React课程 2</TabPane>
                        <TabPane tab={<span><Icon type="delete" />Tab 3</span>} key="3">欢迎学习React课程 3</TabPane>
                    </Tabs>
                </Card>
                <Card title="tab带图的页签" className="card-wrap">
                    <Tabs 
                        defaultActiveKey="1"
                        onChange={this.handleCallBack}
                        activeKey={this.state.activeKey}
                        type="editable-card"
                        onEdit={this.onEdit}
                    >
                        {
                            this.state.panes.map((item)=>{
                                return(
                                    <TabPane key={item.key} tab={item.title} />
                                )
                            })
                        }
                    </Tabs>
                </Card>
            </div>
        )
    }
}
