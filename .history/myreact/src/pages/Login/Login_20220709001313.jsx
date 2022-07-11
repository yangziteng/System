import { useState } from 'react'
import { Component } from 'react'
import "./Login.css"
import img2 from "./images/p.png"
import img from "./images/a.png" //引入图片
import axios from "axios"
import md5 from "js-md5"
class Login extends Component {
    constructor() {
        super()
        this.state = {
            pwd:"",
            username:""
        }
    }
     sumbit = async (e)=>{
        console.log(e)
        //加密后
        await this.setState({pwd: md5(this.state.pwd)})
        console.log(this.state)
        axios({
            url:"http://localhost:8080/Login",
            method:"POST",
            data:this.state,
        }).then((res)=>{
            console.log(res)
        })
        
    }
    handleChange = (e)=>{
        // console.log(e.target.dataset.id)
        this.setState({[e.target.dataset.id]:e.target.value})
      
    }
    render() {
        //非受控组件
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