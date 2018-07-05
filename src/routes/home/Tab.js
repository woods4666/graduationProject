import React from 'react';
import {connect} from 'react-redux'
import {withRouter,NavLink} from 'react-router-dom'

class Tab extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return <div className={'tabBox'}>
            <ul>
            <li><NavLink exact to={'/home'}>首页</NavLink></li>
            <li><NavLink to={'/home/new'}>新品</NavLink></li>
            <li><NavLink to={'/home/list/0'}>家务</NavLink></li>
            <li><NavLink to={'/home/list/1'}>下厨</NavLink></li>
            <li><NavLink to={'/home/list/2'}>生活</NavLink></li>
            <li><NavLink to={'/home/list/3'}>家居服</NavLink></li>
            <li><NavLink to={'/home/list/4'}>床品</NavLink></li>
            <li><NavLink to={'/home/list/5'}>沐浴洗漱</NavLink></li>
            <li><NavLink to={'/home/list/8'}>了解更多</NavLink></li>
            </ul>
        </div>
    }

}
export default withRouter(connect()(Tab))