import React from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {Checkbox} from 'antd'
/*import {query} from '../../api/shopcart'*/
import action from "../../store/action";

class List extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
   componentDidMount() {
        let {queryData} =this.props;
        queryData();
    }


    render() {
        let {cartData,insrease,reduce}=this.props;
        if(cartData.length===0) return '';
        console.log(cartData);
        //console.log(this.state.data);
        return <div className={'payList'}>
            {/*列表信息*/}
            <ul className={'cartList'}>
                {cartData.map((item, index) => {
                    let {id,categoryId,name,num,salePrice,pic} = item;
                    return <li className={'cartItem'} key={index}>
                        <ul>
                            <li className={'itemCheckBox'}><Checkbox></Checkbox></li>
                            <li className={'itemImg'}>
                                <NavLink to={`/detail/${categoryId}/${id}`}><img
                                    src={'http://i.lifevccdn.com' + pic} alt=""/></NavLink>
                            </li>
                            <li className={'itemDetail'}>
                                <p>
                                    <span className={'infoLeft'}><NavLink
                                        to={`/detail/${categoryId}/${id}`}>{name}</NavLink></span>
                                    <span className={'infoRight'}>¥ {salePrice}</span>
                                </p>
                                <p>
                                    <span className={'infoLeft'}>{num}</span>
                                    <span className={'infoRight originalPrice'}>¥ {salePrice}</span>
                                </p>
                                <p>
                                    <span className={'infoLeft'}>送替换装</span>
                                    <span className={'infoRight'}>
                                     <span onClick={()=>{
                                         reduce({
                                             params:{
                                                 id,
                                                 num,
                                             }
                                         })
                                     }}>-</span>
                                     <span>{num}</span>
                                     <span onClick={()=>{
                                         insrease({
                                             params:{
                                                 id,
                                                 num,
                                             }
                                         })
                                     }}>+</span>
                                </span>
                                </p>
                            </li>
                        </ul>
                    </li>
                })}
            </ul>

            {/*底部全选*/}
            <ul className={'cartBottom'}>
                <li className={'check-all'}><Checkbox>全选</Checkbox></li>
                <li className={'cart-btn'} style={{display: 'none'}}><span
                    className={'btntxt'}>去结算 <span>(3)</span></span></li>
                <li className={'cart-btn del'} style={{display: 'false'}} onClick={this.showConfirm}><span>删除</span>
                </li>
                <li className={'cart-count'}>
                    <p>合计：<em>¥222</em></p>
                    <p>商品 ￥415 - 优惠 ￥19</p>
                </li>
            </ul>
        </div>

    }


}

export default connect(state=>state.shopcart,action.shopcart)(List);
