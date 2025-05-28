import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import styles from "../styles/Login.module.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../store/userSlice/userSlice";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validatePassword = (password: string) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return regex.test(password);
  };

  const handleLogin =  (e: React.FormEvent) => {
    e.preventDefault();

    setEmailError("");
    setPasswordError("");

    if (!email.trim()) {
      setEmailError("Username or email is required.");
      return;
    }

    if (!validatePassword(password)) {
      setPasswordError(
        "Password must be at least 8 characters long and include a capital letter, a number, and a symbol."
      );
      return;
    }

    try {
      const user = { email };
      dispatch(login(user));
      navigate("/home");
    } catch (error) {
      setEmailError("Login failed. Please try again.");
    }
  };

  return (
    <Form onSubmit={handleLogin}>
      <Form.Group controlId="usernameOrEmail" className="mb-3">
        <Form.Control
          type="text"
          id="email"
          value={email}
          placeholder="Username or email"
          className={`${styles.squareInput} ${emailError ? "is-invalid" : ""}`}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && (
          <div className="text-danger" style={{ marginTop: "5px" }}>
            {emailError}
          </div>
        )}
      </Form.Group>
      <Form.Group controlId="password" className="mb-3">
        <Form.Control
          type="password"
          placeholder="Enter password"
          className={`${styles.squareInput} ${
            passwordError ? "is-invalid" : ""
          }`}
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && (
          <div className="text-danger" style={{ marginTop: "5px" }}>
            {passwordError}
          </div>
        )}
      </Form.Group>
      <Form.Group controlId="keepMeSignedIn" className="mb-3">
        <Form.Check type="checkbox" label="Keep me signed in" />
      </Form.Group>

      <Button variant="dark" type="submit" className="w-100 mb-3">
        Sign In
      </Button>
    </Form>
  );
};

export default LoginForm;
