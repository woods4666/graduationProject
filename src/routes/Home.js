import React from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import Tab from './home/Tab';
import '../static/css/home.less';
import List from "./home/List";
import SmallHome from "./home/SmallHome";
import New from "./home/New";
import Container from "./home/Container";
class Home extends React.Component{
    constructor(props,context){
        super(props,context);
    }
    render(){
        return <section className={'homeBox'}>
            <Tab/>
            <Route path={'/home'} exact component={SmallHome}/>
            <Route path={'/home/list'} component={List}/>
            <Route path={'/home/new'} component={New}/>
            <Container/>
        </section>
    }
}

export default connect()(Home)