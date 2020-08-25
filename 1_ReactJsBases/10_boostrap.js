import React, { Component } from 'react'
import './App.css'
import axios from 'axios';
import { Alert, Card, Accordion, Button } from 'react-bootstrap';


class App extends Component {
    constructor() {
        super()
        this.state = {
            names: [],
            alerts: [
                'primary',
                'secondary',
                'success',
                'danger',
                'warning',
                'info',
                'light',
                'dark',
            ]
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
            
            <Alert variant="success">
              <Alert.Heading>Hey, nice to see you</Alert.Heading>
              <p>
                Aww yeah, you successfully read this important alert message. This example
                text is going to run a bit longer so that you can see how spacing within an
                alert works with this kind of content.
              </p>
              <hr />
              <p className="mb-0">
                Whenever you need to, be sure to use margin utilities to keep things nice
                and tidy.
              </p>
            </Alert>

            <Accordion defaultActiveKey="0">
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    Click me!
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>Hello! I'm the body</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    Click me!
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>


            </div>
        )
    }
}

export default App