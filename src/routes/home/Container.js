import React from 'react';
import {connect} from 'react-redux'
import {queryRandom} from '../../api/goods'
let imgData=[
    {id:1,path:require('../../static/images/1.png')},
    {id:2,path:require('../../static/images/2.png')},
    {id:3,path:require('../../static/images/3.png')},
    {id:4,path:require('../../static/images/4.png')}
];
console.log(imgData);

class Container extends React.Component{

    constructor(props,context){
        super(props,context);
        this.state= {
            list: []
        }
    }
    async componentDidMount(){
        let result=await queryRandom();
        let {code,list}=result;
        if (parseFloat(code)===0){
            this.setState({
                list
            })
        }
    }
    render(){
        let hotSell=this.state.list.slice(0,4);
        let newProducts=this.state.list.slice(4,10);
        let recommend=this.state.list.slice(10,19);
        let season=this.state.list.slice(19,25);
        console.log(hotSell);
        return <section className={'containerBox'}>
            {/*本周热卖*/}
            <div className={'hotSell'}>
                <h3>—本周热门—</h3>
                <ul className={'clearfix'}>
                    {hotSell.map((item,index)=>{
                        let {ItemInfoId,Name,ImageUrl}=item;
                        return <li key={index}>
                            <img src={'http://i.lifevccdn.com'+ImageUrl} alt=""/>
                            <p>{Name}</p>
                        </li>
                    })}
                </ul>
            </div>
            {/*会员频道*/}
            <div className={'member'}>
                <img src={require('../../static/images/member.jpg')} alt=""/>
            </div>
            {/*热卖新品*/}
            <div className={'newProducts'}>
               <div className={'title'}>
                   <h3>热卖新品</h3>
                  <p>每天有新品，天天来逛逛</p>
               </div>
                <div className={'commodity'}>
                    <ul className={'clearfix'}>
                        {newProducts.map((item,index)=>{
                            let {ItemInfoId,Name,ImageUrl,SalePrice} =item;
                            return <li key={index}>
                                <img src={'http://i.lifevccdn.com'+ImageUrl} alt=""/>
                                <p>{Name}</p>
                                <span>￥{SalePrice}</span>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
            {/*人气推荐*/}
            <div className={'recommend'}>
                <div className="title">
                    <h3>人气推荐</h3>
                    <p>精选人气商品，最值得买</p>
                </div>
                <div className="commodity">
                    <ul className={'clearfix'}>
                        {recommend.map((item,index)=>{
                            let {ItemInfoId,Name,ImageUrl,SalePrice} =item;
                            return <li key={index}>
                                <img src={'http://i.lifevccdn.com'+ImageUrl} alt=""/>
                                <p>{Name}</p>
                                <span>￥{SalePrice}</span>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
            {/*精选活动*/}
            <div className={'Activities'}>
                <div className="title">
                    <h3>精选活动</h3>
                    <p>大家最喜欢的优惠活动</p>
                </div>
                <ul className={'clearfix'}>
                    {imgData.map((item,index)=>{
                        let {path}=item;
                        return <li key={index}>
                            <img src={path} alt=""/>
                        </li>
                    })}
                </ul>
            </div>

        </section>
    }
}

export default connect()(Container)