import React from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { Carousel } from 'antd';
class Banner extends React.Component{

    constructor(props,context){
        super(props,context);
    }
    render(){
        return <section className={'bannerBox'}>
            <Carousel autoplay>
                <div>1</div>
                <div>2</div>
            </Carousel>
        </section>
    }
}

export default connect()(Banner)