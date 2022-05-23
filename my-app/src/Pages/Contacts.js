import React, { Component } from "react";
import {Form, Button , Container} from "react-bootstrap"
import contact from '../assets/contact-photo/contact.jpg'

export default class Contacts extends Component {
  render() {
    return (

      <Container style={{width: '600px', marginTop : '55px'
      
      }}>
        <img src={contact} alt='Contact img' style={{width: 600, height: 230}} />
      <h1 style={{textAlign: 'center'}}> Contact us</h1>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label >
              Email Address
            </Form.Label>
            <Form.Control type="email" placeholder="Enter Email" />
            <Form.Text>
              We'll you never share your email with anyone else
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
          <Form.Label>
            Exampel textarea
            </Form.Label>
            <Form.Control type="textarea" rows="3" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckBox">
            <Form.Check type="checkbox" label="Check me out "/>
          </Form.Group>
          <Button variant="success" type="submit">Submit</Button>
        </Form>
      </Container>
    );
  }
}
