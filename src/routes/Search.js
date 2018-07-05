import React from 'react'
import {connect} from 'react-redux'
import {search} from '../api/goods'
import action from '../store/action'
import '../static/css/search.less'
import {NavLink} from 'react-router-dom'
class Search extends React.Component {
    constructor(props,context){
        super(props,context);
    }
    componentDidMount(){
        console.log(this.props.match);
        console.log(this.props.location);
        let ref=this.props.match.value;
        let {searchProduct}=this.props;
        searchProduct(ref);
        // let result=search();
        // console.log(result);
    }

    render(){
        let {pathname,search}=this.props.location,
            base=(pathname+search).slice(0,-1);
        console.log(base);
        let {value}=this.props.match.params;
        // console.log(value);
        return <div className="searchBox">
            <nav className="searchNav">
                <NavLink to={`/search/${value}/1`}>推荐</NavLink>
                <NavLink to={`/search/${value}/2`}>新品</NavLink>
                <NavLink to={`/search/${value}/3`}>销量</NavLink>
                <NavLink to={`/search/${value}/4`}>价格</NavLink>
            </nav>
            <h3>拖鞋</h3>
        </div>
    }
}

export default connect(state=>state.search,action.search)(Search)