import React, { Component } from "react";
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Row,
  Col,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      username: '',
      firstName: '',
      lastName: '',
      address: '',
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
    const { email, password, username, firstName, lastName, address } = this.state;

    const response = await fetch('http://localhost:8080/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password,
        username,
        firstName,
        lastName,
        address,
      }),
    });

    

    const data = await response.json();
    console.log(data);
  }

  render() {
    return (
      <div>
        <Container>
          <Form>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="firstName">FirstName</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder="with a placeholder"
                    type="text"
                    value={this.state.firstName}
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="lastName">LastName</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder="with placeholder"
                    type="text"
                    value={this.state.lastName}
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="with a placeholder"
                    type="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input
                    id="examplePassword"
                    name="password"
                    placeholder="password placeholder"
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for="username">UserName</Label>
              <Input
                id="username"
                name="username"
                placeholder="with placeholder"
                type="text"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleAddress">Address</Label>
              <Input
                id="exampleAddress"
                name="address"
                placeholder="1234 Main St"
                type="text"
                value={this.state.address}
                onChange={this.handleChange}
              />
            </FormGroup>
            <div>
              <Button onClick={this.buttonClicked} style={{margin: "5px"}}>Sign Up</Button>
              <Button >Login</Button>
            </div>
          </Form>
        </Container>
      </div>
    );
  }
}
