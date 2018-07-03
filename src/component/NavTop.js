import React from 'react';
import {connect} from 'react-redux'
import {Icon} from 'antd'
class NavTop extends React.Component{

    constructor(props,context){
        super(props,context);
    }
    render(){
        return <section className={'navTop'}>
                <h2>丽芙家居</h2>
                <Icon type={'search'}/>
        </section>
    }
}
export default connect()(NavTop)