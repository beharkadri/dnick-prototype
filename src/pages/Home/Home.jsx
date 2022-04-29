import React from "react";
import Container from "../../components/Container/Container";
import CourseCard from "../../components/CourseCard/CourseCard";

import styles from "./Home.module.scss";

const courses = [
  {
    image: "https://dummyimage.com/300x200",
    title: "HTML Basics",
    description:
      "Learn the basics of html with this free course from top teacher...",
  },
  {
    image: "https://dummyimage.com/300x200",
    title: "CSS Basics",
    description:
      "Learn the basics of css with this free course from top teacher...",
  },
  {
    image: "https://dummyimage.com/300x200",
    title: "JS Basics",
    description:
      "Learn the basics of js with this free course from top teacher...",
  },
];

const listItems = ["HTML", "CSS", "JavaScript", "React", "Databases", ".NET"];

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.top}>
        <h2>A broad selection of courses</h2>
        <h4>
          Choose from 10 online video courses with new additions published every
          month
        </h4>
        <div className={styles.list}>
          {listItems.map((item) => (
            <span>{item}</span>
          ))}
        </div>
        <br />
        <h2>Featured Courses</h2>
      </div>
      <Container>
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            id={index}
            image={course.image}
            title={course.title}
            description={course.description}
          />
        ))}
      </Container>
    </div>
  );
};

export default Home;
