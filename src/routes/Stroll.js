import React from 'react';
import {connect} from 'react-redux'

class Stroll extends React.Component{
    constructor(props,context){
        super(props,context);
    }
    render(){
        return <section>
            闲逛
        </section>
    }
}

export default connect()(Stroll)