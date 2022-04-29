import React, { useState } from "react";

import styles from "./CourseSingle.module.scss";

import video from "../../assets/dummyVid.mp4";

const CourseSingle = ({ course }) => {
  const [enrolled, setEnrolled] = useState(false);
  return (
    <>
      <div className={styles.course}>
        <div className={styles.left}>
          <img src={course.image} alt="Course Poster" />
        </div>
        <div className={styles.right}>
          <h2>{course.title}</h2>
          <p>{course.description}</p>
          {!enrolled && (
            <button onClick={() => setEnrolled(true)}>Enroll Now</button>
          )}
        </div>
      </div>
      <div className={styles.videos}>
        <h2>Course videos</h2>
        <div className={styles.videosContainer}>
          {!enrolled ? (
            <h3>Enroll to watch videos and take tests</h3>
          ) : (
            <>
              <video controls>
                <source src={video} type="video/mp4" />
              </video>
              <video controls>
                <source src={video} type="video/mp4" />
              </video>
              <video controls>
                <source src={video} type="video/mp4" />
              </video>
              <video controls>
                <source src={video} type="video/mp4" />
              </video>
            </>
          )}
        </div>
        {enrolled && (
          <div className={styles.test}>
            <h3>Dummy question?</h3>
            <div className={styles.questionOptions}>
              <div>
                <label htmlFor="option1">Option 1</label>
                <input type="checkbox" name="option1" />
              </div>
              <div>
                <label htmlFor="option2">Option 2</label>
                <input type="checkbox" name="option2" />
              </div>
              <div>
                <label htmlFor="option3">Option 3</label>
                <input type="checkbox" name="option3" />
              </div>
              <div>
                <label htmlFor="option4">Option 4</label>
                <input type="checkbox" name="option4" />
              </div>
              <button>Submit</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CourseSingle;
