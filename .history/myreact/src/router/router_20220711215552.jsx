import React, { Component } from 'react'
import { HashRouter , Route ,Redirect} from 'react-router-dom'
import Login from "../pages/Login/Login"
import Home from "../pages/Home/Home"
//rcc初始化
export default class router extends Component {
    render() {
        return (
            <HashRouter>
                <Route path="/login" component={Login}></Route>
                <Route path="/home" component={Home}>首页</Route>
                <Redirect from='/' to="/login"></Redirect>
            </HashRouter>
        )
    }
}
