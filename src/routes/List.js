import React from 'react';
import {connect} from 'react-redux'
import action from "../store/action";

class List extends React.Component{
    constructor(props,context){
        super(props,context);
    }

    render(){
        console.log(this.props.data);
        return <section className={'listInfo'}>
            <ul>
                <li>
                    <img src="" alt=""/>
                    <p></p>
                    <div>
                        <span className={'left'}></span>
                        <span className={'right'}></span>
                    </div>
                </li>
            </ul>

        </section>
    }
}

export default connect(state=>state.list)(List)