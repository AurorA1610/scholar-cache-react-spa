import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";
import PropTypes from "prop-types"; // ES6

const Courses = ({ handleAddToCart }) => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="mt-10 grid grid-cols-3 gap-5 w-3/4">
      {courses.map((course) => (
        <Course
          key={course._id}
          course={course}
          handleAddToCart={handleAddToCart}
        ></Course>
      ))}
    </div>
  );
};
Courses.propTypes = {
  handleAddToCart: PropTypes.func,
};
export default Courses;
