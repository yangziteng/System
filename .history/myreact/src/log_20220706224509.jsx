import React from "react";
import { ReactDOM } from "react-dom";
class log extends React.Component{
 
    render(){
        return (
            <h1>欢迎{this.props.name}</h1>
            <span>hello world</span>
        )
    }
}
export default log