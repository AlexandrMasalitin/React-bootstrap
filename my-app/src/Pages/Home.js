import React, { Component } from "react";
import CaroselBox from "../Components/CaroselBox";
import {Button, Card, Container, CardGroup, Row, Col} from "react-bootstrap"
import team from "../assets/blog-photo/team.jpg"
import relax from "../assets/blog-photo/relax-team.jpg"
import happy from "../assets/blog-photo/happy-team.jpg"
import comp from "../assets/blog-photo/comp.jpg"


export default class Home extends Component {
  render() {
    return (
    <>
    <CaroselBox />
    <Container>
      <h2 className="text-center m-4" >Our Team</h2>

      <CardGroup>
  <Card>
    <Card.Img variant="top" src={team} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
      <Button variant="primary" className="button">About Team</Button>
    </Card.Footer>
  </Card>
  <Card>
  <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Img variant="bottom" src={relax} />
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
      <Button variant="primary" className="button">About Team</Button>
    </Card.Footer>
  </Card>
  <Card>
  <Card.Img variant="top" src={happy} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
      <Button variant="primary" className="button">About Team</Button>
    </Card.Footer>
  </Card>
</CardGroup>
<Row xs={1} md={2} className="g-4">
  {Array.from({ length: 4 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src={comp} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
    </Container>
    </>
    )
  }
}
