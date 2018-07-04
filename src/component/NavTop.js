import React from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Icon} from 'antd'
class NavTop extends React.Component{

    constructor(props,context){
        super(props,context);
    }
    render(){
        return <section className={'navTop'}>
                <h2></h2>
            <Link to={'/all'}><Icon type={'search'}/></Link>
        </section>
    }
}
export default connect()(NavTop)