import React from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {Checkbox} from 'antd'

class List extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {

        return <div className={'payList'}>
            {/*列表信息*/}
            <ul className={'cartList'}>
                <li className={'cartItem'}>
                    <ul>
                        <li className={'itemCheckBox'}><Checkbox></Checkbox></li>
                        <li className={'itemImg'}>
                            <NavLink to={'/home'}><img src={require('../../static/images/1.png')} alt=""/></NavLink>
                        </li>
                        <li className={'itemDetail'}>
                            <p>
                                <span className={'infoLeft'}><NavLink to={'/home'}>玻纤黑胶超轻防晒伞</NavLink></span>
                                <span className={'infoRight'}>¥ 79</span>
                            </p>
                            <p>
                                <span className={'infoLeft'}>大号</span>
                                <span className={'infoRight originalPrice'}>¥ 89</span>
                            </p>
                            <p>
                                <span className={'infoLeft'}>送替换装</span>
                                <span className={'infoRight'}>
                                    <span>-</span>
                                    <span>6</span>
                                    <span>+</span>
                                </span>
                            </p>
                        </li>
                    </ul>
                </li>

            </ul>

            {/*送货区域*/}
            {/* <div className={'cartAddress'}>
                <span>送至</span>
            </div>*/}

            {/*底部全选*/}
            <ul className={'cartBottom'}>
                <li className={'check-all'}><Checkbox>全选</Checkbox></li>
                <li className={'cart-btn'} style={{display:'none'}}><span className={'btntxt'}>去结算 <span>(3)</span></span></li>
                <li className={'cart-btn del'} style={{display:'false'}} onClick={this.showConfirm}><span>删除</span></li>
                <li className={'cart-count'}>
                    <p>合计：<em>¥222</em></p>
                    <p>商品 ￥415 - 优惠 ￥19</p>
                </li>
            </ul>
        </div>
            ;
    }
}

export default connect()(List);
