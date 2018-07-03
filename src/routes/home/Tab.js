import React from 'react';
import {connect} from 'react-redux'
import {withRouter,NavLink,Redirect,Route,Switch} from 'react-router-dom'
import {Tabs, Radio} from 'antd'
import List from "./List";

class Tab extends React.Component{
    constructor(props,context){
        super(props,context);

    }
    render(){
        return <div className={'tabBox'}>
              <ul>
                  <li><NavLink to={'/home'}>首页</NavLink></li>
                  <li><NavLink to={'/home/list/1'}>新品</NavLink></li>
                  <li><NavLink to={'/home/list/2'}>家务</NavLink></li>
                  <li><NavLink to={'/home/list/3'}>下厨</NavLink></li>
                  <li><NavLink to={'/home/list/4'}>生活</NavLink></li>
                  <li><NavLink to={'/home/list/5'}>家居服</NavLink></li>
                  <li><NavLink to={'/home/list/6'}>床品</NavLink></li>
                  <li><NavLink to={'/home/list/7'}>沐浴洗漱</NavLink></li>
                  <li><NavLink to={'/home/list/8'}>了解更多</NavLink></li>
              </ul>
            </div>
    }
}

export default withRouter(connect()(Tab))