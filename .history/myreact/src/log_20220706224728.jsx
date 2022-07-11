import React from "react";
import { ReactDOM } from "react-dom";
class log extends React.Component{
 
    render(){
        const {name,age} = this.props
        return (
            <div>
                  <h1>欢迎{name} </h1>
                  <h2>年龄{age}</h2>
            </div>
          
       
        )
    }
}
export default log