import styles from "./App.module.scss";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Courses from "./pages/Courses";
import Footer from "./components/Footer/Footer";
import Course from "./pages/Course/Course";

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

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Courses" element={<Courses courses={courses} />} />
        <Route path="/Course/:id" element={<Course courses={courses} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
