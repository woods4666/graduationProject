import React from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import action from "../store/action";
import '../static/css/list.less'
class List extends React.Component{
    constructor(props,context){
        super(props,context);
    }

 componentDidMount(){

}
    render(){

        return <section className={'listInfo'}>
            <ul className={'content'}>
                {this.props.list.map((item,index)=>{
                    let {ImageUrl,Name,SalePrice,categoryId,id}=item;

                    return <li key={index}>
                        <Link to={`/detail/${categoryId}/${id}`}>
                            <img src={'http://i.lifevccdn.com'+ImageUrl} alt=""/>
                        </Link>
                        <p>{Name}</p>
                            <span className={'left'}>{SalePrice}</span>
                    </li>
                })}
            </ul>

        </section>
    }
}

export default connect(state=>state.list,action.list)(List)