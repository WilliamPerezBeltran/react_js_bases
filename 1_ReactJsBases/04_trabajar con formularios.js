import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      name: ''
    }
  }

  updateName = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  sayHi = ()=>{
    alert("hola"+this.state.name)
  }

  render () {
    return (
      <div>
        <h1>hola mundo</h1>
        <input type='text' value={this.state.name} onChange={this.updateName} />
        <button onClick={this.sayHi}>say hi</button>
      </div>
    )
  }
}

export default App
