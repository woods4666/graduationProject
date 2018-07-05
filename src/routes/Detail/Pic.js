import React from "react";
class Pic extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="picA">
                <img src={'http://i.lifevccdn.com' + this.props.pic} alt={" "}/>                
            </div>
        )
    }
}
export default Pic