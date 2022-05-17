import React, { Component } from "react";
import  Carousel  from "react-bootstrap/Carousel";
import first  from "../assets/first.jpg";
import  second  from "../assets/second.jpg";
import  img  from "../assets/img.jpg"
import  imges  from "../assets/imges.jpg";

export default class CaroselBox extends Component {
  render() {
    return (
      <Carousel className="carousel-style">
        <Carousel.Item className="carousel-item" interval={1000}>
          <img className="d-block w-100" src={first} alt="Bilding" />
          <Carousel.Caption>
            <h2>IT House</h2>
            <p>
              При создании макета Веб-сайта часто необходима "рыба" — текст,
              который потом будет заменён контентом. В качестве такой рыбы
              издавна выступает известный псевдо-латинский текст Lorem Ipsum —
              искаженный фрагмент трактата Марка Туллия Цицерона "De finibus
              bonorum et malorum".
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item" interval={2000}>
          <img className="d-block w-100" src={second} alt="Bilding" />
          <Carousel.Caption>
            <h2>IT House</h2>
            <p>
              При создании макета Веб-сайта часто необходима "рыба" — текст,
              который потом будет заменён контентом. В качестве такой рыбы
              издавна выступает известный псевдо-латинский текст Lorem Ipsum —
              искаженный фрагмент трактата Марка Туллия Цицерона "De finibus
              bonorum et malorum".
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item" interval={3000} >
          <img className="d-block w-100" src={img} alt="Bilding" />
          <Carousel.Caption>
            <h2>IT House</h2>
            <p>
              При создании макета Веб-сайта часто необходима "рыба" — текст,
              который потом будет заменён контентом. В качестве такой рыбы
              издавна выступает известный псевдо-латинский текст Lorem Ipsum —
              искаженный фрагмент трактата Марка Туллия Цицерона "De finibus
              bonorum et malorum".
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item  className="carousel-item" interval={4000}>
          <img className="d-block w-100" src={imges} alt="Bilding" />
          <Carousel.Caption>
            <h2>IT House</h2>
            <p>
              При создании макета Веб-сайта часто необходима "рыба" — текст,
              который потом будет заменён контентом. В качестве такой рыбы
              издавна выступает известный псевдо-латинский текст Lorem Ipsum —
              искаженный фрагмент трактата Марка Туллия Цицерона "De finibus
              bonorum et malorum".
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
