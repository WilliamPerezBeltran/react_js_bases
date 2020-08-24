import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      title: 'Hola mundo'

    }
    this.changeTitle = this.changeTitle.bind(this)
  }

  changeTitle () {
    this.setState({
      title: 'Nuevo titulo'

    })
  }

  // changeTitle = ()=>{
  //   this.setState({
  //     title: 'Nuevo titulo'

  //   })
  // }

  render () {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <button onClick={this.changeTitle}>Cambie el titulo</button>
      </div>
    )
  }
}

export default App
