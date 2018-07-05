import React from "react";
import { Icon } from "antd";
class loading extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return(
            <div className="loadingBox">
                <Icon type="loading" style={{
                    fontSize:'2rem'
                }}/>
                请求数据中
            </div>
        )
    }
}
export default loading