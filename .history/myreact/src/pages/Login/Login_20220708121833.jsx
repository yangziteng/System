import { useState } from 'react'
import { Component } from 'react'
import "./Login.css"
import img from "./images/a.png" //引入图片
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
                            <img className='img'  src={img} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login