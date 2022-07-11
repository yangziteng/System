import React, { Component } from 'react'
import { HashRouter , Route } from 'react-router-dom'
//rcc初始化
export default class router extends Component {
    render() {
        return (
            <HashRouter>
                <Route path="/login" component={Login}>登录</Route>
                <Route path="/home" component={Home}>首页</Route>
            </HashRouter>
        )
    }
}
