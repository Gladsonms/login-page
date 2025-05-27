import React from "react";
import styles from "../styles/HomePage.module.css";
import { Button, Row, Col, Container } from "react-bootstrap";

const Footer: React.FC = () => {
  return (
    <Container style={{ marginTop: "70px", marginBottom: "50px" }}>
      <Row className="justify-content-center mt-3">
        <Col xs="auto">
          <Button
            href="https://facebook.com"
            target="blank"
            variant="outline-dark"
            className={`${styles.socialButton} rounded-pill`}
          >
            <i className="fab fa-facebook" style={{ color: "black" }} />
          </Button>
        </Col>
        <Col xs="auto">
          <Button
            href="https://twitter.com"
            target="blank"
            variant="outline-dark"
            className={`${styles.socialButton} rounded-pill`}
          >
            <i className="fab fa-twitter" style={{ color: "black" }} />
          </Button>
        </Col>
        <Col xs="auto">
          <Button
            href="https://linkedin.com"
            target="blank"
            variant="outline-dark"
            className={`${styles.socialButton} rounded-pill`}
          >
            <i className="fab fa-linkedin-in" style={{ color: "black" }} />
          </Button>
        </Col>

        <Col xs="auto">
          <Button
            href="https://youtube.com"
            target="blank"
            variant="outline-dark"
            className={`${styles.socialButton} rounded-pill`}
          >
            <i className="fab fa-youtube" style={{ color: "black" }} />
          </Button>
        </Col>
      </Row>
      <Row style={{ marginTop: "20px" }}>
        <p className="text-center">Example@email.com</p>
        <p className="text-center">
          Copyright © 2020 Name. All rights reserved.
        </p>
      </Row>
    </Container>
  );
};

export default Footer;
