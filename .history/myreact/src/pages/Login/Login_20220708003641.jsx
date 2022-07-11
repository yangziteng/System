import { useState } from 'react'
import { Component  } from 'react'
import style from "./Login.css"
class Login extends Component{
    constructor(){
        super()
    }
    render(){
        return (
            <div id="login">
                <div className='{style.model}'>我是login</div>
            </div>
        )
    }
}
export default Login