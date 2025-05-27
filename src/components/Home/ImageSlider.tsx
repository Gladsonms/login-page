import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import { BANNER_IMAGES } from "../../constants";

const ImageSliderSection = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => setIndex(selectedIndex);

  const handleNavigation = (direction: number) => {
    setIndex((prevIndex) =>
      Math.min(Math.max(prevIndex + direction, 0), BANNER_IMAGES.length - 1)
    );
  };

  return (
    <Container fluid className="my-5">
      <Row>
        <Col xs={12} md={9} className="position-relative mb-3">
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            indicators={false}
            interval={3000}
            controls={false}
            style={{ height: "350px" }}
          >
            {BANNER_IMAGES.map((src, idx) => (
              <Carousel.Item key={idx}>
                <img src={src} alt={`Slide ${idx}`} />
              </Carousel.Item>
            ))}
          </Carousel>

          <div className="d-flex justify-content-center align-items-center position-absolute bottom-0 start-50 translate-middle-x mb-3">
            <button
              className="bg-transparent border-0 fs-4 me-2"
              onClick={() => handleNavigation(-1)}
            >
              &#8592;
            </button>

            <div className="d-flex gap-2">
              {BANNER_IMAGES.map((_, dotIndex) => (
                <div
                  key={dotIndex}
                  className={`rounded-circle ${
                    dotIndex === index ? "bg-dark" : "bg-light"
                  }`}
                  style={{ width: "12px", height: "12px", cursor: "pointer" }}
                  onClick={() => setIndex(dotIndex)}
                />
              ))}
            </div>

            <button
              className="bg-transparent border-0 fs-4 ms-2"
              onClick={() => handleNavigation(1)}
            >
              &#8594;
            </button>
          </div>
        </Col>

        <Col
          xs={12}
          md={3}
          className=" justify-content-center align-items-center"
        >
          <img
            src="/assets/dummy_image.jpeg"
            alt="Sidebar"
            className="object-fit-cover w-100"
            style={{ height: "350px" }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ImageSliderSection;
