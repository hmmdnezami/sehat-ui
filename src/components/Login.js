import React, { Component } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };

    
    this.handleChange = this.handleChange.bind(this);
    this.buttonClicked = this.buttonClicked.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  async buttonClicked() {
    console.log("button clicked.... ");
    const { password, username } = this.state;
  
    try {
      const response = await fetch('http://localhost:8080/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          password,
          username,
        }),
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log(data);
      <Home/>
    } catch (error) {
      console.error('Error occurred during fetch:', error);
    }
  }
  

  render() {
    return (
      <div>
        <h1>Login</h1>
        <p></p>
        <Form>
          <FormGroup>
            <Label for="exampleEmail" hidden>
              Email
            </Label>
            <Input
              id="exampleEmail"
              name="username"
              placeholder="Email"
              type="username"
              onChange={this.handleChange}
            />
          </FormGroup>{" "}
          <FormGroup>
            <Label for="examplePassword" hidden>
              Password
            </Label>
            <Input
              id="examplePassword"
              name="password"
              placeholder="Password"
              type="password"
              onChange={this.handleChange}
            />
          </FormGroup>{" "}
          <Button onClick={this.buttonClicked}>Submit</Button>
          
        </Form>
      </div>
    );
  }
}
