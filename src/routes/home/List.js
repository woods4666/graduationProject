import React from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {allCategoryData,queryCategory} from '../../api/goods'
import action from "../../store/action";
import '../../static/css/tabList.less'
class List extends React.Component{

    constructor(props,context){
        super(props,context);
        this.state={
            data:[]
        }
    }
    async componentDidMount(){
        let result= await allCategoryData();
        let {code,list}=result;
        if(parseFloat(code)===0){
            this.setState({
                data:list
            })
        }
        let {modify}= this.props;
        modify({id:2860})
    }
    render(){

        let {modify}=this.props;
        let houseWork= this.state.data[0];
        if (!houseWork) return '';
        return <section className={'listBox'}>
            <div className={'headIcon'}>
                <ul className={'clearfix'}>
                    {houseWork.Children.map((item,index)=>{
                        let {Icon,Name,ItemIndexId}=item;
                        console.log(ItemIndexId);
                        return <li key={index}>
                            <Link to={'/list'} onClick={()=>{
                                modify({id:ItemIndexId
                                })
                            }
                            }>
                                <img src={'http://i.lifevccdn.com'+Icon} alt=""/>
                                <p>{Name}</p>
                            </Link>
                        </li>
                    })}
                </ul>
            </div>
            <div className={'introduce'}>
                <img src={require('../../static/images/work.png')} alt=""/>
            </div>
            <div className={'recommend'}>
                <h2>Rico.S的精心推荐</h2>
                <ul className={'content'}>
                    {/*{newBox.map((item,index)=>{
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
                    })}*/}
                </ul>
            </div>
        </section>
    }
}

export default connect(state=>state.list,action.list)(List)