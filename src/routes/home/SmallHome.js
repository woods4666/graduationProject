import React from 'react';
import {connect} from 'react-redux'
import Banner from './Banner'
import Container from "./Container";
class SmallHome extends React.Component{

    constructor(props,context){
        super(props,context);
    }
    render(){
        return <section>
            <Banner/>
            <Container/>
        </section>
    }
}

export default connect()(SmallHome)

