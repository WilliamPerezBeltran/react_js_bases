
import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      tasks: ['tarea1', 'tarea2']

    }
  }

  addTask = ()=>{
    this.setState({
      tasks: this.state.tasks.concat("nuevo elemento")
    })

  }

  updateTask = ()=>{
    const index = this.state.tasks.findIndex(task =>
      task == "tarea2"
    )

    // this.setState({
    //   tasks: this.state.tasks.map((task,i)=>
    //     i === index ? "Actualizado": task
    //   )
    // })

    const tasks = this.state.tasks


    this.setState({
      tasks : [
        ...tasks.slice(0,index),
        "Actualizado",
        ...tasks.slice(index+1)
      ]
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
        <button onClick={this.updateTask}>Modificar arreglo</button>
      </div>
    )
  }
}

export default App
