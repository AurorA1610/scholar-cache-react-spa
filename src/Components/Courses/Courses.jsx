import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";
import PropTypes from "prop-types"; // ES6

const Courses = ({ handleAddToCart, selectedCourses, remainingCredit }) => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-4 lg:w-4/5">
      {courses.map((course) => (
        <Course
          key={course._id}
          course={course}
          handleAddToCart={handleAddToCart}
          selectedCourses={selectedCourses}
          remainingCredit={remainingCredit}
        ></Course>
      ))}
    </div>
  );
};
Courses.propTypes = {
  handleAddToCart: PropTypes.func,
  selectedCourses: PropTypes.array,
  remainingCredit: PropTypes.number,
};
export default Courses;
