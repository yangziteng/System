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
    handleChange = (e)=>{
        console.log(e.target)
        // this.setState({[e.target.dataset.value]:e.target.value})
    }
    render() {

        return (
            <div className='bgc'>
                <div className='model'>
                    <div className='model-head'>教务系统登录</div>
                    <div className='model-body'>
                        <div className='username'>
                            <input type="text" data-id="username" placeholder='学号/学工号'  onChange={this.handleChange} className='model-body-input' >
                            </input>
                            <img className='img' src={img} alt="" />
                        </div>
                        <div className='pwd'>
                            <input type="password" data-id="pwd" placeholder='请输入教务系统密码'  onChange={this.handleChange}   className='model-body-input' >
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