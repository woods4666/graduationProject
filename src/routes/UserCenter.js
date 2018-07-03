import React from 'react'
import {connect} from 'react-redux'
import {Icon} from 'antd'
class UserCenter extends React.Component {
    constructor(props,context){
        super(props,context);
    }
    render(){
        return <section>
           <div className="order">
               <a href="#">

               </a>
           </div>
        </section>
    }
}

export default connect()(UserCenter)