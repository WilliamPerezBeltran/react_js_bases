import React, { Component } from 'react'
import './App.css'
import axios from 'axios';


class App extends Component {
    constructor() {
        super()
        this.state = {
            names: []
        }
    }


    componentDidMount() {
        axios
            .get(`http://localhost:3002/names`)
            .then((response) => {
                // this.setState({name: "RESPONSE TEXT"});
                console.log(response.data)
                this.setState({
                    names: response.data
                })

            })
            .catch((e) => {
                console.error(e);
            });
        //this.setState({});
    }

    render() {
        return (
            <div>
        <h1>hola mundo</h1>
         <ul>
           {this.state.names.map(name =>
              <li key={name}>{name}</li>
           )}
           
         </ul>
      </div>
        )
    }
}

export default App