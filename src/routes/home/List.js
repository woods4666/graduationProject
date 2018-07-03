import React from 'react';
import {connect} from 'react-redux'

class List extends React.Component{

    constructor(props,context){
        super(props,context);
    }
    render(){
        return <section>
            分类展示
        </section>
    }
}

export default connect()(List)