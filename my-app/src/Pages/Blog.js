import React, { Component } from "react";
import { Col, Container, Row, Card} from "react-bootstrap";
import blog from '../assets/about-photo/tech.jpg'

export default class Blog extends Component {
  render() {
    return (
        <Container>
          <Row>
            <Col md="9">
              <Card className="m-5">
                <img className='mr-3'
                src={blog} alt="Blog" />
                <Card.Body >
                  <h3 className="blog-title">Blog Post</h3>
                    <p>Lorem Ipsum is simply dummy text of the prgitinting
                      and typesetting industry. Lorem Ipsum has been 
                      the industry's standard dummy text ever since the
                      1500s, when an unknown printer took a galley of 
                      type and scrambled it to make a type specimen book.
                      It has survived not only five centuries, but also
                      the leap into electronic typesetting, remaining 
                      essentially unchanged. It was popularised in the 
                      1960s with the release of Letraset sheets containing
                      Lorem Ipsum passages, and more recently
                      with desktop publishing software like Aldus PageMaker
                      including versions of Lorem Ipsum.
                      </p>
                </Card.Body>
              </Card>
              <Card className="m-5">
                <img className='mr-3'
                src={blog} alt="Blog" />
                <Card.Body>
                  <h3 className="blog-title">Blog Post</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing
                      and typesetting industry. Lorem Ipsum has been 
                      the industry's standard dummy text ever since the
                      1500s, when an unknown printer took a galley of 
                      type and scrambled it to make a type specimen book.
                      It has survived not only five centuries, but also
                      the leap into electronic typesetting, remaining 
                      essentially unchanged. It was popularised in the 
                      1960s with the release of Letraset sheets containing
                      Lorem Ipsum passages, and more recently
                      with desktop publishing software like Aldus PageMaker
                      including versions of Lorem Ipsum.
                      </p>
                </Card.Body>
              </Card>
              <Card className="m-5">
                <img  className='mr-3'
                src={blog} alt="Blog" />
                <Card.Body>
                  <h3 className="blog-title">Blog Post</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing
                      and typesetting industry. Lorem Ipsum has been 
                      the industry's standard dummy text ever since the
                      1500s, when an unknown printer took a galley of 
                      type and scrambled it to make a type specimen book.
                      It has survived not only five centuries, but also
                      the leap into electronic typesetting, remaining 
                      essentially unchanged. It was popularised in the 
                      1960s with the release of Letraset sheets containing
                      Lorem Ipsum passages, and more recently
                      with desktop publishing software like Aldus PageMaker
                      including versions of Lorem Ipsum.
                      </p>
                </Card.Body>
              </Card>
              <Card className="m-5">
                <img className='mr-3'
                src={blog} alt="Blog" />
                <Card.Body>
                  <h3 className="blog-title">Blog Post</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing
                      and typesetting industry. Lorem Ipsum has been 
                      the industry's standard dummy text ever since the
                      1500s, when an unknown printer took a galley of 
                      type and scrambled it to make a type specimen book.
                      It has survived not only five centuries, but also
                      the leap into electronic typesetting, remaining 
                      essentially unchanged. It was popularised in the 
                      1960s with the release of Letraset sheets containing
                      Lorem Ipsum passages, and more recently
                      with desktop publishing software like Aldus PageMaker
                      including versions of Lorem Ipsum.
                      </p>
                </Card.Body>
              </Card>
              <Card className="m-5">
                <img className='mr-3'
                src={blog} alt="Blog" />
                <Card.Body>
                  <h3 className="blog-title">Blog Post</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing
                      and typesetting industry. Lorem Ipsum has been 
                      the industry's standard dummy text ever since the
                      1500s, when an unknown printer took a galley of 
                      type and scrambled it to make a type specimen book.
                      It has survived not only five centuries, but also
                      the leap into electronic typesetting, remaining 
                      essentially unchanged. It was popularised in the 
                      1960s with the release of Letraset sheets containing
                      Lorem Ipsum passages, and more recently
                      with desktop publishing software like Aldus PageMaker
                      including versions of Lorem Ipsum.
                      </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
    );
  }
}
