import React from 'react';
import {connect} from 'react-redux'

class New extends React.Component{
    constructor(props,context){
        super(props,context);
    }
    render(){
        return <section>
            新品
        </section>
    }
}

export default connect()(New)