import React from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {allCategoryData} from '../api/goods'
import '../static/css/all.less'
import {Input} from 'antd'
const Search = Input.Search;

class All extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            data:null
        }
    }
    async componentWillMount(){
        let result=await allCategoryData();
        this.setState({
            data:result.list
        });
    }
    render() {
        let {data}=this.state;
        return <section className="allBox">
            <div className="searchBox">
                <Search
                    placeholder="搜索商品"
                    onSearch={value => {
                        value=value.trim();
                        this.props.history.push(`/search/${value}/1`);
                    }}
                    style={{width: '90%',marginLeft:'.3rem'}}
                />
            </div>
            {data===null?null:(
                <ul className="infoBox">
                    {data.map((item,index)=>{
                        let {Name,Children}=item;
                        return <li key={index}>
                            <h3>{Name}</h3>
                            <div className="detail clearfix">
                                {Children.map((item,childIndex)=>{
                                    let {Icon,Name,ItemIndexId}=item;
                                    return <Link key={childIndex} to={`/home/list/${index}/${ItemIndexId}`}>
                                        <img
                                            src={`http://i.lifevccdn.com${Icon}`} alt=""/>
                                      <p>{Name}</p>
                                    </Link>
                                })}
                            </div>
                        </li>
                    })}
                </ul>
                )}

        </section>
    }
}

export default connect()(All)