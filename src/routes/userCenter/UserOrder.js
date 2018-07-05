import React from 'react'
import {connect} from 'react-redux'
import {Tabs} from 'antd';
import '../../static/css/userOrder.less'
import {query} from '../../api/shopcart'
const TabPane = Tabs.TabPane;

function callback(key) {
    console.log(key);
}
class UserOrder extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            pay:[],
            unpay:[]
        }
    }

    /*async componentWillMount(){
     this.result=await query();
        let {code,list}=this.result;
        if (code==0||list.length>0){

     }
    }*/
    render() {
        console.log(this.props.location);

        return <div className="userOrder">
            <Tabs defaultActiveKey={
                this.props.location.pathname === '/usercenter/userorder' ? '1' : '2'
            } onChange={callback}>
                <TabPane tab="待支付" key="1">
                    <div className="unpay">
                        <div className="whenEmty">
                            <img src="http://i1.lifevccdn.com/images/h5/i_list_empty@3x.png" alt=""/>
                            <p>你还没有相关的订单</p>
                        </div>
                    </div>
                </TabPane>
                <TabPane tab="待发货" key="2">
                    <div className="payed">
                        <div className="whenEmty">
                            <img src="http://i1.lifevccdn.com/images/h5/i_list_empty@3x.png" alt=""/>
                            <p>你还没有相关的订单</p>
                        </div>
                    </div>
                </TabPane>
            </Tabs>
        </div>
    }
}

export default connect()(UserOrder)