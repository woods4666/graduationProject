import React from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
class Head extends React.Component{

    constructor(props,context){
        super(props,context);
    }
    render(){
        return <header>
            <div>
               <Link to={'/all'}/>
            </div>
        </header>
    }
}

export default connect()(Head)