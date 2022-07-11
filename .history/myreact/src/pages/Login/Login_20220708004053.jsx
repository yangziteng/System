import { useState } from 'react'
import { Component  } from 'react'
import style from "./Login.less"
class Login extends Component{
    constructor(){
        super()
    }
    render(){
        return (
            <div id="login">
                <div className={style.model2}>我是login</div>
            </div>
        )
    }
}
export default Login