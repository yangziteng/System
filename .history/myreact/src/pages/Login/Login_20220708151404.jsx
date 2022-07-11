import { useState } from 'react'
import { Component } from 'react'
import "./Login.css"
import img2 from "./images/p.png"
import img from "./images/a.png" //引入图片
class Login extends Component {
    constructor() {
        super()
        this.state = {
            pwd:"",
            username:""
        }
    }
    sumbit = (e)=>{
        console.log(e)
    }
    render() {
        console.log(this.refs)
        return (
            <div className='bgc'>
                <div className='model'>
                    <div className='model-head'>教务系统登录</div>
                    <div className='model-body'>
                        <div className='username'>
                            <input type="text" placeholder='学号/学工号' ref={this.input} className='model-body-input' >
                            </input>
                            <img className='img' src={img} alt="" />
                        </div>
                        <div className='pwd'>
                            <input type="password" placeholder='请输入教务系统密码' ref={this.input}   className='model-body-input' >
                            </input>
                            <img className='img' src={img2} alt="" />
                        </div>
                        <div className='model-end' onClick={this.sumbit}>
                            登录
                        </div>
                    </div>
                        <a className='end' href="https://jwxt.gdupt.edu.cn/index.jsp">忘记密码</a>
                </div>
            </div>
        )
    }
}
export default Login