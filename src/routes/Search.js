import React from 'react'
import {connect} from 'react-redux'
import {search} from '../api/goods'
import action from '../store/action'
import '../static/css/search.less'
import {NavLink,Link} from 'react-router-dom'
class Search extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentWillMount() {
        console.log(this.props.match);
        console.log(this.props.location);
        this.ref = this.props.match.params.value;
        let {searchProduct} = this.props;
        searchProduct(this.ref);

    }

    render() {
        let value = this.ref;
        let data = this.props.searchData;
        console.log(data);
        return <div className="searchBox">
            {/*<nav className="searchNav">
             <NavLink to={`/search/${value}/1`}>推荐</NavLink>
             <NavLink to={`/search/${value}/2`}>新品</NavLink>
             <NavLink to={`/search/${value}/3`}>销量</NavLink>
             <NavLink to={`/search/${value}/4`}>价格</NavLink>
             </nav>*/}
            <h3>{value}</h3>
            <ul className="infoBox">
                {data.map((item, index) => {
                    let {pic, name, isEmpty, activityPrice, commentNum, categoryId, id} = item;
                    return (
                        <li key={index}>
                            <Link to={`/detail/${categoryId}/${id}`}>
                                <img src={`http://i.lifevccdn.com${pic}`} alt=""/>
                                <p className="name">{name}</p>
                                <p className="price">
                                    <span className="empty">{isEmpty ? '断码清仓' : ''}</span>
                                    <span className="activityPrice">￥{activityPrice}</span>

                                    <span className="comment">评论:{commentNum}</span>
                                </p>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    }
}

export default connect(state => state.search, action.search)(Search)