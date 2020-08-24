// formulario con input checkbox

import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      name: '',
      terms :false
    }
  }

  updateName = (event) => {
    this.setState({
      name: event.target.value
    })
  }


  updateTerms = (event)=>{
    this.setState({
      terms:event.target.checked
    })
  }

  sayHi = ()=>{
    if (this.state.terms){
    alert("hola"+this.state.name)
    }else{
    alert("Debes aceptar los terminos ")

    }
  }

  render () {
    return (
      <div>
        <h1>hola mundo</h1>
        <input type='text' value={this.state.name} onChange={this.updateName} />
        <div>
          <label>
            <input type="checkbox" checked={this.state.terms} onChange={this.updateTerms}/> Acepto terminos y condiciones
          </label>
        </div>
        <button onClick={this.sayHi}>say hi</button>
      </div>
    )
  }
}

export default App
