import { useState } from 'react'
import { Component  } from 'react'
import logo from './logo.svg'
import './App.css'
import s from './App.css' 
import Login from "./pages/Login/Login"
import Home from "./pages/Home/Home"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//函数式组件
class App extends Component{
  constructor(){
    super()
    this.state = {
      name:"react",
      islike: false 
    }}

    handleclick = ()=>{
      //setstate是一个异步过程 
      // this.setState((prevState, props) => { return { isLiked: !prevState.isLiked } }) 
      this.setState({
        islike:!this.state.islike
      })
    }
    

  render(){
    let result = ["a","b","c"]
    console.log(this)
    return (
      <HashRouter>
        <div>我是app</div>
        <Router path = "/Login" Component={Login}></Router>
        <Router path = "/home" Component={Home}></Router>
      </HashRouter>
      // <div className={s.App} onClick={console.log(333333)}>
      //   <span  className={s.App}>哈哈哈</span> 
      //   <div className="test2">
      //     <div style={{color:"red",fontSize:"30px"}}  >我是app</div>
      //   </div>
      //   <div>{this.state.islike?this.state.name:""}</div>
      //   {/* 获取dom节点 */}
      //   <button onClick={this.handleclick}>testsets</button>
      //   <div>{result.map((e)=>{return e})}</div>
      // </div>
    )
  }


}
// function App() {
//   const [count, setCount] = useState(0)
//   let result = ["a","b","c"]
//   //插入js
//   return (
//     <div className="App" onClick={console.log(333333)}> 
//       <div>{result.map((e)=>{return e})}</div>
//     </div>
//   )
// }

export default App
