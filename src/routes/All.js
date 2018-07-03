import React from 'react';
import {connect} from 'react-redux'

class All extends React.Component{
    constructor(props,context){
        super(props,context);
    }
    render(){
        return <section>
            全部商品
        </section>
    }
}

export default connect()(All)