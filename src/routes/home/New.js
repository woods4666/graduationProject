import React from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import '../../static/css/new.less'
import {queryRandom} from '../../api/goods'
class New extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state = {
            list: []
        }
    }
    async componentDidMount() {
        let result = await queryRandom();
        let {code, list} = result;
        if (parseFloat(code) === 0) {
            this.setState({
                list
            })
        }
    }
    render(){
        let newBox = this.state.list.slice(0);
        return <section className={'newBox'}>
            <h2>最近一周新品</h2>
            <ul className={'content'}>
                {newBox.map((item,index)=>{
                    let {ItemInfoId, Name, ImageUrl, SalePrice, categoryId} = item;
                    return <li key={index}><Link to={`/detail/${categoryId}/${ItemInfoId}`}>
                        <img src={'http://i.lifevccdn.com' + ImageUrl} alt=""/>
                    </Link>
                        <p className={'Name'}>{Name}</p>
                        <p className={'Info clearfix'}>
                            <span className={'left'}>新品48小时优惠</span>
                            <span className={'nowPrice'}>￥{SalePrice}</span>
                            <span className={'right'}>新</span>
                        </p>
                    </li>
                })}
            </ul>
        </section>
    }
}
export default connect()(New)