import { useState } from 'react'
import { Component } from 'react'
import "./Login.css"
class Login extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className='bgc'>
                <div className='model'>
                    <div className='model-head'>教务系统登录</div>
                    <div className='model-body'>
                        <input type="text" className='model-body-input' >
                        </input>
                        <div>
                            <img src="./images/a.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login