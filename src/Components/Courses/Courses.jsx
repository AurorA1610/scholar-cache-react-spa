import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        console.log(data);
      });
  }, []);
  return (
    <div className="mt-10 grid grid-cols-3 gap-5 w-3/4">
      {courses.map((course) => (
        <Course key={course._id} course={course}></Course>
      ))}
    </div>
  );
};

export default Courses;
