import React from "react";
import styles from "../styles/Login.module.css";

const Illustration: React.FC = () => {
  return (
    <div className="text-center">
      <img
        src="assets/login_asset.png"
        alt="Walking illustration"
        className={styles.loginImage}
      />
    </div>
  );
};

export default Illustration;
