import Container from "react-bootstrap/Container";

function WelcomeSection() {
  return (
    <Container fluid className="text-center my-5">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            height: "3px",
            backgroundColor: "#333",
            flex: 1,
            marginRight: "8px",
            alignSelf: "flex-start",
            marginTop: "15px",
          }}
        ></div>

        <span
          style={{
            fontWeight: "bold",
            fontSize: "2.5rem",
            color: "#333",
            textTransform: "uppercase",
          }}
        >
          Welcome
        </span>

        <div
          style={{
            height: "3px",
            backgroundColor: "#333",
            flex: 1,
            marginLeft: "8px",
            alignSelf: "flex-end",
            marginBottom: "15px",
          }}
        ></div>
      </div>
    </Container>
  );
}

export default WelcomeSection;
