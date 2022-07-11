import React from "react";
import { ReactDOM } from "react-dom";
class log extends React.Component{
 
    render(){
        console.log(this.props)
        return (
            <h1>欢迎{this.props.props}</h1>
        )
    }
}
export default log