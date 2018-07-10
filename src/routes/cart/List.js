import React from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {Checkbox, Modal} from 'antd'
import action from '../../store/action/index'
import {add} from '../../api/shopcart'

const confirm = Modal.confirm;

class List extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        let {isEdit, cartList, goodsChecked, selectAll, isLogin} = this.props,
            selectedNum = 0,
            spread = 0,
            saleTotal = 0;
        cartList.map(item => {
            if (item.isCheck) {
                selectedNum++;
                if (parseFloat(item.activityPrice) > 0) {
                    spread += parseFloat(item.num) * (parseFloat(item.salePrice) - parseFloat(item.activityPrice));
                }
                saleTotal += parseFloat(item.num) * parseFloat(item.salePrice);
            }
        });

        return <div>
            {/*列表信息*/}
            <ul className={'cartList'}>
                {cartList.map((item, index) => {
                    let {categoryId, id, name, pic, num, salePrice, activityPrice, activityTag, isCheck} = item;
                    return <li key={index} className={'cartItem'}>
                        <ul>
                            <li className={'itemCheckBox'}><Checkbox checked={isCheck}
                                                                     onChange={goodsChecked.bind(this, id)}> </Checkbox>
                            </li>
                            <li className={'itemImg'}>
                                <NavLink to={`/detail/${categoryId}/${id}`}><img src={`http://i.lifevccdn.com${pic}`}
                                                                                 alt=""/></NavLink>
                            </li>
                            <li className={'itemDetail'}>
                                <p>
                                    <span className={'infoLeft'}><NavLink
                                        to={`/detail/${categoryId}/${id}`}>{name}</NavLink></span>
                                    <span
                                        className={'infoRight'}>¥ {activityPrice > 0 ? activityPrice : salePrice}</span>
                                </p>
                                <p>
                                    {/*<span className={'infoLeft'}>大号</span>*/}
                                    <span className={'infoRight originalPrice'}
                                          style={{display: activityPrice > 0 ? 'block' : 'none'}}>¥ {salePrice}</span>
                                </p>
                                <p>
                                    <span className={'infoLeft'}
                                          style={{display: activityTag ? 'block' : 'none'}}>{activityTag}</span>
                                    <span className={'infoRight'}>
                                    <span onClick={this.num_minus.bind(null, categoryId, id, num)}>-</span>
                                    <span>{num}</span>
                                    <span onClick={this.num_add.bind(null, categoryId, id)}>+</span>
                                </span>
                                </p>
                            </li>
                        </ul>
                    </li>;
                })}

            </ul>


            {/*底部全选*/}
            <ul className={'cartBottom'}>
                <li className={'check-all'}>
                    <Checkbox checked={selectAll} onChange={goodsChecked.bind(this, 'all')}>全选</Checkbox>
                </li>
                <li className={selectedNum > 0 ? 'cart-btn' : 'cart-btn disabled'}
                    style={{display: isEdit ? 'none' : 'block'}}>
                    <NavLink className={'btntxt'} to={isLogin ? '/usercenter' : '/usercenter/login'}>
                        去结算 <span>({selectedNum})</span>
                    </NavLink>
                </li>
                <li className={selectedNum > 0 ? 'cart-btn del' : 'cart-btn del disabled'}
                    style={{display: isEdit ? 'block' : 'none'}} onClick={this.showConfirm}>
                    <span>删除</span>
                </li>
                <li className={'cart-count'} style={{display: isEdit ? 'none' : 'block'}}>
                    <p>合计：<em>¥{saleTotal - spread}</em></p>
                    <p>商品 ￥{saleTotal} - 优惠 ￥{spread}</p>
                </li>
            </ul>
        </div>;
    }

    showConfirm = () => {
        let {cartList, goodsRemove} = this.props,
            ary = [];
        cartList.map(item => {
            item.isCheck ? ary.push(item.id) : null;
        });
        console.log(ary);
        if (ary.length <= 0) return '';
        confirm({
            title: '确定删除商品吗?',
            content: '',
            onOk() {
                goodsRemove(ary);
            },
            onCancel() {
            },
        });
    };

    num_add = (categoryId, id) => {
        add({
            goodsId:id,
            categoryId,
            num:1
        });
        this.props.numUpdate(id, 1);
    };

    num_minus = (categoryId, id, num) => {
        if (num <= 1) return;
        add({
            goodsId:id,
            categoryId,
            num:-1
        });
        this.props.numUpdate(id, -1);
    };
}

export default connect(state => state.shopcart, action.shopcart)(List);
