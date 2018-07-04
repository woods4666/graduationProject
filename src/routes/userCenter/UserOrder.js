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
        console.log(this.props.location);

        return <div className="userOrder">
            <Tabs defaultActiveKey={
                this.props.location.pathname==='usercenter/userorder'?'1':'2'
            } onChange={callback}>
                <TabPane tab="待支付" key="1"><div className="unpay">

                </div></TabPane>
                <TabPane tab="待发货" key="2"><div className="payed">

                </div></TabPane>
            </Tabs>
        </div>
    }
}

export default connect()(UserOrder)