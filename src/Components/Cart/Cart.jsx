import PropTypes from "prop-types"; // ES6
import CartItems from "../CartItems/CartItems";

const Cart = ({ selectedCourses }) => {
  return (
    <div className="w-1/4 bg-white p-4 mt-10 ms-5 rounded-2xl h-max">
      <h3 className="text-2xl font-bold">Selected Courses</h3>
      {selectedCourses.map((selectedCourse, idx) => (
        <CartItems
          key={idx}
          selectedCourse={selectedCourse}
          idx={idx}
        ></CartItems>
      ))}
    </div>
  );
};
Cart.propTypes = {
  selectedCourses: PropTypes.array,
};
export default Cart;
