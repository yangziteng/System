import { useState } from 'react'
import { Component  } from 'react'
import logo from './logo.svg'
import './App.css'
//函数式组件
class App extends Component{
  constructor(){
    super()
    this.state = {
      name:"react",
      islike: false 
    }
  }

  render(){
    let result = ["a","b","c"]
    return (
      <div className="App" onClick={console.log(333333)}> 
        <div className="test2">
          <div style={{color:"red",fontSize:"30px"}}  >哈哈哈哈</div>
        </div>
        <div>{this.state.islike?this.state.name:""}</div>
        {/* 获取dom节点 */}
        <button onClick={()=>{console.log(this.refs.username)}}>testsets</button>
        <div>{result.map((e)=>{return e})}</div>
      </div>
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
