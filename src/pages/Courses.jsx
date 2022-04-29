import React from "react";
import Container from "../components/Container/Container";
import CourseCard from "../components/CourseCard/CourseCard";

const Courses = ({ courses }) => {
  return (
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
  );
};

export default Courses;
