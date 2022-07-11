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



    render() {

        return (
            <div className='bgc'>
                hello home！
            </div>
        )
    }
}
export default Home