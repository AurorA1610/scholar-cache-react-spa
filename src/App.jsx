import { useState } from "react";
import "./App.css";
import Cart from "./Components/Cart/Cart";
import Courses from "./Components/Courses/Courses";
import Header from "./Components/Header/Header";

function App() {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const handleAddToCart = (course) => {
    const newSelectedCourse = [...selectedCourses, course];
    setSelectedCourses(newSelectedCourse);
  };
  return (
    <div className="bg-slate-200 p-10">
      <Header></Header>
      <div className="flex">
        <Courses handleAddToCart={handleAddToCart}></Courses>
        <Cart selectedCourses={selectedCourses}></Cart>
      </div>
    </div>
  );
}

export default App;
