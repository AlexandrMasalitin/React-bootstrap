import { Tab } from "react-bootstrap";
import React, { Component } from "react";
import { Container, Nav, Row, Col } from "react-bootstrap";
import code1 from "../assets/about-photo/code1.jpg";
import code2 from "../assets/about-photo/code2.jpg";
import tech from "../assets/about-photo/tech.jpg";

export default class About extends Component {
  render() {
    return (
    
      <Container className="about-style">
        <Tab.Container >
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKey="first">Programer</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Best </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Place</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className="about-style-content">
                <Tab.Pane eventKey="first">
                  <img src={code1} className="img-about" alt="img-about"/>
                  <p>
                    Lorem Ipsum - это текст-"рыба", часто используемый в печати
                    и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для
                    текстов на латинице с начала XVI века. В то время некий
                    безымянный печатник создал большую коллекцию размеров и форм
                    шрифтов, используя Lorem Ipsum для распечатки образцов.
                    Lorem Ipsum не только успешно пережил без аметных изменений
                    пять веков, но и перешагнул в электронный дизайн. Его
                    популяризации в новое время послужили публикация листов
                    Letraset с образцами Lorem Ipsum в 60-х годах и, в более
                    недавнее время, программы электронной вёрстки типа Aldus
                    PageMaker, в шаблонах которых используется Lorem Ipsum
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <img src={code2} alt="img-about" className="img-about" />
                  <p>
                    Lorem Ipsum - это текст-"рыба", часто используемый в печати
                    и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для
                    текстов на латинице с начала XVI века. В то время некий
                    безымянный печатник создал большую коллекцию размеров и форм
                    шрифтов, используя Lorem Ipsum для распечатки образцов.
                    Lorem Ipsum не только успешно пережил без аметных изменений
                    пять веков, но и перешагнул в электронный дизайн. Его
                    популяризации в новое время послужили публикация листов
                    Letraset с образцами Lorem Ipsum в 60-х годах и, в более
                    недавнее время, программы электронной вёрстки типа Aldus
                    PageMaker, в шаблонах которых используется Lorem Ipsum
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <img src={tech} alt="img-about"  className="img-about"/>
                  <h1>Best Tech</h1>
                  <p>
                    Lorem Ipsum - это текст-"рыба", часто используемый в печати
                    и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для
                    текстов на латинице с начала XVI века. В то время некий
                    безымянный печатник создал большую коллекцию размеров и форм
                    шрифтов, используя Lorem Ipsum для распечатки образцов.
                    Lorem Ipsum не только успешно пережил без аметных изменений
                    пять веков, но и перешагнул в электронный дизайн. Его
                    популяризации в новое время послужили публикация листов
                    Letraset с образцами Lorem Ipsum в 60-х годах и, в более
                    недавнее время, программы электронной вёрстки типа Aldus
                    PageMaker, в шаблонах которых используется Lorem Ipsum
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
      
    );
  }
}
