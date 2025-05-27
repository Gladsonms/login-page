import React from "react";
import { Card, Col, Row } from "react-bootstrap";

interface CountryCardProps {
  country: string;
  region: string;
  flag: string;
}

const CountryCard: React.FC<CountryCardProps> = ({ country, region, flag }) => {
  return (
    <Col xs={12} sm={6} md={6}>
      <Card
        style={{ borderRadius: "0", border: "2px solid black" }}
        className="h-100 shadow"
      >
        <Card.Body className="d-flex p-4">
          <Row className="w-75">
            <Col
              xs={4}
              className="p-0 d-flex justify-content-center align-items-center"
            >
              <Card.Img
                variant="top"
                src={flag}
                className="img-fluid"
                style={{
                  objectFit: "cover",
                }}
              />
            </Col>
            <Col
              xs={8}
              className="d-flex flex-column justify-content-center p-3"
            >
              <Card.Title>{country}</Card.Title>
              <Card.Text>{region}</Card.Text>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CountryCard;
