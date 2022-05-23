import React, { Component } from "react";
import {Form, Button , Container} from "react-bootstrap"
import contact from '../assets/contact-photo/contact.jpg'
import  Placement  from "../Components/Placement";

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
      <div className="position-items">
      <Button color="primary" className="position-relative"
        >Mails
        <span
          className=" translate-middle badge rounded-pill bg-secondary px-1"
        >
          +99
          <span className="visually-hidden">unread messages</span>
        </span>
      </Button>
      <Button color="dark" className="position-relative">
        Marker
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          className=" translate-middle bi bi-caret-down-fill"
          fill="#343a40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
          />
        </svg>
      </Button>
      <Button color="primary" className="position-relative">
        Alerts
        <span
          className=" translate-middle badge border border-light rounded-circle bg-danger p-2"
        >
          <span className="visually-hidden">unread messages</span>
        </span>
      </Button>
    </div>

        <Placement />
      </Container>

    );
  }
}
