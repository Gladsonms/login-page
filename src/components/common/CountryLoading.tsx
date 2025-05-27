import Placeholder from "react-bootstrap/Placeholder";
import { Col, Row, Card } from "react-bootstrap";

function CountryLoading({ numRows }: { numRows: number }) {
  const numColumns = 2;
  return (
    <Row className="g-4 mb-4">
      {Array.from({ length: numRows }).map((_, rowIndex) => (
        <Row key={rowIndex} className="g-4 w-100">
          {Array.from({ length: numColumns }).map((_, colIndex) => (
            <Col key={colIndex} xs={12} sm={6} md={6} lg={6}>
              <CardLoading />
            </Col>
          ))}
        </Row>
      ))}
    </Row>
  );
}

function CardLoading() {
  return (
    <Card
      className="h-100"
      style={{
        border: "2px solid black",
        borderRadius: "0",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Card.Body className="d-flex p-4">
        <Row className="w-100">
          <Col xs={4} className="p-0 d-flex justify-content-center">
            <Placeholder
              animation="wave"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "0.25rem",
                backgroundColor: "#ddd",
              }}
            >
              <Placeholder xs={12} style={{ height: "100%" }} />
            </Placeholder>
          </Col>
          <Col xs={8} className="d-flex flex-column justify-content-center p-3">
            <Placeholder
              as="h5"
              animation="glow"
              style={{ width: "80%", height: "1.5rem", marginBottom: "0.5rem" }}
            >
              <Placeholder xs={12} />
            </Placeholder>
            <Placeholder
              as="p"
              animation="wave"
              style={{ width: "60%", height: "1rem" }}
            >
              <Placeholder xs={12} />
            </Placeholder>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default CountryLoading;
