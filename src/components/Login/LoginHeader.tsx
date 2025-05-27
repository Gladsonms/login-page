import React from "react";
import styles from "../styles/Login.module.css";

const LoginHeader: React.FC = () => {
  return (
    <>
      <h2 className={`mb-4 ${styles.heading}`}>Sign In</h2>
      <p>
        New user? <a href="/login">Create an account</a>
      </p>
    </>
  );
};

export default LoginHeader;
