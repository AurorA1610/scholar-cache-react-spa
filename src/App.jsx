import { useState } from "react";
import "./App.css";
import Cart from "./Components/Cart/Cart";
import Courses from "./Components/Courses/Courses";
import Header from "./Components/Header/Header";
import "animate.css";

function App() {
  const [selectedCourses, setSelectedCourses] = useState([]);

  const handleAddToCart = (course) => {
    const newSelectedCourse = [...selectedCourses, course];
    setSelectedCourses(newSelectedCourse);
  };
  const handleRemoveFromCart = (id) => {
    const remainingSelectedCourses = selectedCourses.filter(
      (course) => course._id !== id
    );
    setSelectedCourses(remainingSelectedCourses);
  };
  const { totalCredit, totalPrice } = selectedCourses.reduce(
    (acc, course) => {
      acc.totalCredit += course.credit;
      acc.totalPrice += course.price;
      return acc;
    },
    { totalCredit: 0, totalPrice: 0 }
  );
  const remainingCredit = 20 - totalCredit;
  return (
    <div className="animating-app bg-gray-200 p-10 animate__animated animate__fadeIn">
      <Header></Header>
      <div className="lg:flex lg:flex-row-reverse">
        <Cart
          selectedCourses={selectedCourses}
          totalCredit={totalCredit}
          totalPrice={totalPrice}
          remainingCredit={remainingCredit}
          handleRemoveFromCart={handleRemoveFromCart}
        ></Cart>
        <Courses
          handleAddToCart={handleAddToCart}
          selectedCourses={selectedCourses}
          remainingCredit={remainingCredit}
        ></Courses>
      </div>
    </div>
  );
}

export default App;
