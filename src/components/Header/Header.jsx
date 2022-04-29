import React from "react";

import styles from "./Header.module.scss";
const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <div className={styles.left}>
          <a href="/">
            <h1>Web Development eLearning</h1>
          </a>
        </div>
        <div className={styles.right}>
          <ul>
            <a href="/Courses">
              <li>Courses</li>
            </a>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
