import React from 'react';
import {connect} from 'react-redux'

class Head extends React.Component{

    constructor(props,context){
        super(props,context);
    }
    render(){
        return <section>
            头部
        </section>
    }
}

export default connect()(Head)