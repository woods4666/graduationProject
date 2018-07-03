import React from 'react';
import {connect} from 'react-redux'

class Cart extends React.Component{
    constructor(props,context){
        super(props,context);
    }
    render(){
        return <section>
            购物车
        </section>
    }
}

export default connect()(Cart)