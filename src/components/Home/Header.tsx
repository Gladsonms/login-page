import React from "react";
import styles from "../styles/HomePage.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1>Countries</h1>
      <nav>
        <ul className={styles.navLinks}>
          <li>All</li>
          <li>Asia</li>
          <li>Europe</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
