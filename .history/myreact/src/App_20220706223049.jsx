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
      <div className="App" onClick={console.log(333333)}> 
        <div className="test2">
          <div style={{color:"red",fontSize:"30px"}}  >哈哈哈哈</div>
        </div>
        <div>{this.state.islike?this.state.name:""}</div>
        {/* 获取dom节点 */}
        <button onClick={this.handleclick}>testsets</button>
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
