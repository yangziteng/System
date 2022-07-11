import { useState } from 'react'
import { Component  } from 'react'
import s from "./Login.less"
class Login extends Component{
    constructor(){
        super()
    }
    render(){
        console.log(s)
        return (
            <div id="login">
                <div className={s.model2}>我是login</div>
            </div>
        )
    }
}
export default Login