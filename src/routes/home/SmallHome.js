import React from 'react';
import {connect} from 'react-redux'
import Banner from './Banner'
class Page extends React.Component{

    constructor(props,context){
        super(props,context);
    }
    render(){
        return <section>
            <Banner/>
        </section>
    }
}

export default connect()(Page)