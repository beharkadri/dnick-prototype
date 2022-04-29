import React from "react";
import { useLocation } from "react-router-dom";
import CourseSingle from "../../components/CourseSingle/CourseSingle";
const Course = ({ courses }) => {
  const history = useLocation();
  const id = history.pathname[history.pathname.length - 1];
  return <CourseSingle course={courses[id]} />;
};

export default Course;
