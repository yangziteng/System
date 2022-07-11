import { useState } from 'react'
import { Component  } from 'react'
import s from "./Login.css"
class Login extends Component{
    constructor(){
        super()
    }
    render(){
        console.log(s)
        return (
            <div id="login">
                <div >我是login</div>
            </div>
        )
    }
}
export default Login