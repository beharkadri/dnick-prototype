import React from "react";

import styles from "./CourseCard.module.scss";

const CourseCard = ({ id, image, title, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <img src={image} alt="Course" />
      </div>
      <div className={styles.bottom}>
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={`/Course/${id}`}>
          <button>See More</button>
        </a>
      </div>
    </div>
  );
};

export default CourseCard;
