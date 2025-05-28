import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import styles from "../styles/Login.module.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../store/userSlice/userSlice";
import "../../styles/theme.css";
import { validateEmail, validatePassword } from "../../utils/validation";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

 

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    setEmailError("");
    setPasswordError("");

    if (!email.trim()) {
      setEmailError("email is required.");
      return;
    }

    if(!(validateEmail(email))) {
      setEmailError("Please enter a valid email address.");
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
          style={{
            borderColor: emailError ? "var(--error-color)" : "var(--border-color)",
            transition: "var(--transition-normal)",
          }}
        />
        {emailError && (
          <div className="text-danger" style={{ marginTop: "var(--spacing-xs)", color: "var(--error-color)" }}>
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
          style={{
            borderColor: passwordError ? "var(--error-color)" : "var(--border-color)",
            transition: "var(--transition-normal)",
          }}
        />
        {passwordError && (
          <div className="text-danger" style={{ marginTop: "var(--spacing-xs)", color: "var(--error-color)" }}>
            {passwordError}
          </div>
        )}
      </Form.Group>
      <Form.Group controlId="keepMeSignedIn" className="mb-3">
        <Form.Check type="checkbox" label="Keep me signed in" />
      </Form.Group>

      <Button 
        variant="dark" 
        type="submit" 
        className="w-100 mb-3"
        style={{
          backgroundColor: "var(--primary-color)",
          border: "none",
          borderRadius: "var(--border-radius-none)",
          color: "var(--text-light)",
          transition: "var(--transition-normal)",
        }}
      >
        Sign In
      </Button>
    </Form>
  );
};

export default LoginForm;
