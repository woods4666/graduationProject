import React from 'react';
import {connect} from 'react-redux'

class Container extends React.Component{

    constructor(props,context){
        super(props,context);
    }
    render(){
        return <section className={'containerBox'}>
            {/*本周热卖*/}
            <div className={'hotSell'}>
                <h3>—本周热门—</h3>
                <ul>
                    <li>
                        <img src="" alt=""/>
                        <p>畅销品</p>
                    </li>
                </ul>
            </div>
            {/*会员频道*/}
            <div className={'member'}>
                <img src="" alt=""/>
            </div>
            {/*热卖新品*/}
            <div className={'newProducts'}>
               <div className={'title'}>
                   <h3>热卖新品</h3>
                  <p>每天有新品，天天来逛逛</p>
               </div>
                <div className={'commodity'}>
                    <ul>
                        <li>
                            <img src="" alt=""/>
                            <p></p>
                            <span></span>
                        </li>
                    </ul>
                </div>
            </div>
            {/*人气推荐*/}
            <div className={'recommend'}>
                <h3>人气推荐</h3>
                <p></p>
                <ul>
                    <li>
                        <img src="" alt=""/>
                        <p></p>
                        <span></span>
                    </li>
                </ul>
            </div>
        </section>
    }
}

export default connect()(Container)