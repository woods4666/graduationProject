import React from 'react'
import {connect} from 'react-redux'
import { Tabs } from 'antd';
import '../../static/css/userOrder.less'

const TabPane = Tabs.TabPane;

function callback(key) {
    console.log(key);
}
class UserOrder extends React.Component {
    constructor(props,context){
        super(props,context);
    }
    render(){
        return <div className="userOrder">
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
            </Tabs>,
        </div>
    }
}

export default connect()(UserOrder)