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
    <div className="bg-slate-200 p-10">
      <Header></Header>
      <div className="flex">
        <Courses
          handleAddToCart={handleAddToCart}
          selectedCourses={selectedCourses}
          remainingCredit={remainingCredit}
        ></Courses>
        <Cart
          selectedCourses={selectedCourses}
          totalCredit={totalCredit}
          totalPrice={totalPrice}
          remainingCredit={remainingCredit}
        ></Cart>
      </div>
    </div>
  );
}

export default App;
