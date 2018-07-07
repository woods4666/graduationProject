import React from 'react'
import {connect} from 'react-redux'
import {Icon, Modal} from 'antd'
import action from '../store/action'
import {checkout} from '../api/person'

import '../static/css/setting.less'
class Setting extends React.Component {
    constructor(props,context){
        super(props,context);
        this.state= { visible: false }
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false
        });
    }

    handleCancel = (e) => {
        console.log('cancel');
        console.log(e);
        this.setState({
            visible: false
        });
    }

    render(){
        let {loginState}=this.props;
        return <div className="settingBox">
            <Modal
                title="确定要清除缓存吗?"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                className="settingModal"
            >
            </Modal>
            <div className="infoBox">
               <div className="white clearfix" onClick={this.showModal}>
                   <span className="black">清理缓存</span>
                   <div className="toRight">
                       <Icon type="right" />
                   </div>
               </div>
               <div className="white clearfix" onClick={ev=>{
                   this.props.setLeft(0);

               }}>
                   <span className="black">关于LifeVC</span>
                   <div className="toRight">
                       <span className="pray">平台：browser 版本：5.1.2-261</span>
                       <Icon type="right"/>
                   </div>
               </div>
                {loginState==0?'':(
                    <button type="button" className="logOut" onClick={async ev=>{
                        let result=await checkout();
                        if (result.code==0){
                            let {changeLoginState} = this.props;
                            changeLoginState(0);
                            this.props.history.go(-1);
                        }
                    }}>退出当前账号</button>
                )}
            </div>
         <div className="aboutBox" style={{left:this.props.left}}>
           <Icon type="left" className="left" onClick={ev=>{
               this.props.setLeft('50%');
           }}/>
             <div className="container">
                 <section className="sect-sub">
                     <div className="client clearfix">
                         <div className="client1">
                             <img src="http://i1.lifevccdn.com/Images/m/AboutLifeVC/client.png" alt=""/>
                         </div>
                         <div className="client1 client2">
                             <img src="http://i1.lifevccdn.com/Images/m/AboutLifeVC/weixin825.png" alt=""/>
                         </div>
                     </div>
                     <div className="title clearfix">
                         <div className="client-title1">
                             <p>扫描二维码，</p>
                             <p>下载LifeVC客户端</p>
                         </div>
                         <div className="client-title1 client-title2">
                             <p>扫描二维码，</p>
                             <p>关注LifeVC官方微信</p>
                         </div>
                     </div>
                 </section>
                 <section className="sect-sub sect-sub2">
                     <h3>公司简介</h3>
                     <p>LifeVC，一个源自欧洲生活灵感的家居品牌，始终坚持品质和舒适实用的设计精神。从家居日用到家纺，从家饰到家具，LifeVC10000多种欧洲灵感家居产品，涵盖家的每一个角落。希望我们舒适实用的产品，陪你一起走过人生的每一个美好时刻。人生很短，家最重要。LifeVC，陪你生活一辈子！</p>
                 </section>
             </div>
         </div>
        </div>
    }
}

export default connect(state=>({...state.setting,...state.usercenter}),{...action.setting,...action.userCenter})(Setting)

