import React from 'react';
import {Link} from 'react-router-dom'
import {Carousel} from 'antd';
import {getBannerData} from '../../api/goods'
class Banner extends React.Component {
    constructor(){
        super();
        this.state={
            list:[]
        }
    }
    async componentDidMount(){
        let result=await getBannerData();
        let {code,list}=result;
        if (parseFloat(code)===0){
            this.setState({
                list
            })
        }
    }

    render() {

        return <section className={'bannerBox'}>
            <Carousel autoplay>
                {this.state.list.map((item,index)=>{
                    let {ImageUrl,categoryId,ItemInfoId}=item;
                    return <div key={index}><Link to={`/detail/${categoryId}/${ItemInfoId}`}><img src={'http://i.lifevccdn.com'+ImageUrl} alt=""/></Link></div>
                })}
            </Carousel>
        </section>
    }
}
export default Banner