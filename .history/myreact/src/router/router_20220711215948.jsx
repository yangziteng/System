import React, { Component } from 'react'
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom'
import Login from "../pages/Login/Login"
import Home from "../pages/Home/Home"
//rcc初始化
export default class router extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/home" component={Home}>首页</Route>
                    {/* 默认打开哪一个 路由重定向 */}
                    <Redirect from='/' to="/home"></Redirect>
                </Switch>
            </HashRouter>
        )
    }
}
