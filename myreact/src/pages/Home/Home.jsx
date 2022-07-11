import { useState } from 'react'
import { Component } from 'react'


class Home extends Component {
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