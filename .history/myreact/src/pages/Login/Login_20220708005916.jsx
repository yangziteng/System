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
            <div >
                <span className={s.model}>ddd</span>
                <div className={s}>我是login</div>
            </div>
        )
    }
}
export default Login