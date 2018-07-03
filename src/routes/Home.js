import React from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import Tab from './home/Tab';
import '../static/css/home.less';
import List from "./home/List";
import Page from "./home/SmallHome";
class Home extends React.Component{
    constructor(props,context){
        super(props,context);
    }
    render(){
        return <section className={'homeBox'}>
            <Tab/>
            <Route path={'/home'} exact component={Page}/>
            <Route path={'/home/list'} exact component={List}/>
        </section>
    }
}

export default connect()(Home)