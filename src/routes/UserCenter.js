import React from 'react';
import {connect} from 'react-redux'

class UserCenter extends React.Component{
    constructor(props,context){
        super(props,context);
    }
    render(){
        return <section>
            账户中心
        </section>
    }
}

export default connect()(UserCenter)