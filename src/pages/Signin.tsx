import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LoginHeader from "../components/Login/LoginHeader";
import LoginForm from "../components/Login/LoginForm";
import SocialLogin from "../components/Login/SocialLogin";
import Illustration from "../components/Login/Illustration";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";


const Login: React.FC = () => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector(
    (state: RootState) => state.user.isAuthenticated
  );

  if (isAuthenticated) {
    navigate("/home");
  }

  return (
    <Container
      fluid
      className="vh-100 d-flex align-items-center justify-content-center"
    >
      <Row className="w-100">
        <Col
          xs={12}
          md={6}
          className="d-flex align-items-center justify-content-center"
        >
          <div style={{ maxWidth: "400px", width: "100%" }}>
            <LoginHeader />
            <LoginForm />
            <SocialLogin />
          </div>
        </Col>
        <Col
          xs={12}
          md={6}
          className="d-none d-md-flex align-items-center justify-content-center"
        >
          <Illustration />
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
