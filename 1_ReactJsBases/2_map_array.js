add element to array in react js 
import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      tasks: ['tarea1', 'tarea2']

    }
    // this.addTask = this.addTask.bind(this)
  }

  addTask = ()=>{
    this.setState({
      tasks: this.state.tasks.concat("nuevo elemento")
    })

  }

  render () {
    return (
      <div>
        <h1>hola mundo</h1>
        <ul>
          {this.state.tasks.map(task =>
            <li >{task}</li>
          )}
        </ul>
        <button onClick={this.addTask}>agregar nuevo elemento</button>
      </div>
    )
  }
}

export default App
