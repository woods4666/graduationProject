import React from 'react';
import {connect} from 'react-redux'
import {queryRandom} from '../api/goods'
import {Link} from 'react-router-dom'
import '../static/css/stroll.less'

class Stroll extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state={
            list:[]
        }
    }
    async componentWillMount(){
        let result=await queryRandom();
        console.log(result);
        let {list}=result;
        this.setState({
            list
        })
    }
    render(){
        let {list}=this.state;
        console.log(list);
        return <section className="strollBox">
            <div className="product clearfix">
                {list.length==0?'':(
                    list.map((item,index)=>{
                        let {MarketPrice,SalePrice,ImageUrl,Name,categoryId,ItemInfoId}=item;
                        return <Link to={`/detail/${categoryId}/${ItemInfoId}`} key={index}>
                            <img src={`http://i.lifevccdn.com${ImageUrl}`} alt=""/>
                            <p className="name">{Name}</p>
                            <p className="price">
                                <span className="salePrice">￥{SalePrice}</span>
                                <span className="marketPrice">￥{MarketPrice}</span>
                                <span className="month">月销:{Math.ceil(Math.random()*Math.random()*1000)}</span>
                            </p>
                        </Link>
                    })
                )}

            </div>
        </section>
    }
}

export default connect()(Stroll)