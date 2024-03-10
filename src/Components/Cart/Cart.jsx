import PropTypes from "prop-types"; // ES6

const Cart = ({ selectedCourses }) => {
  const { totalCredit, totalPrice } = selectedCourses.reduce(
    (acc, course) => {
      acc.totalCredit += course.credit;
      acc.totalPrice += course.price;
      return acc;
    },
    { totalCredit: 0, totalPrice: 0 }
  );
  return (
    <div className="w-1/4 bg-white p-5 mt-10 ms-5 rounded-2xl h-max">
      <h3 className="text-2xl font-bold mb-6">Selected Courses</h3>
      {selectedCourses.map((selectedCourse, idx) => (
        <h1 key={idx} className="mb-2 text-lg	font-normal text-gray-500">
          <span>{idx + 1} </span>
          {selectedCourse.name}
        </h1>
      ))}
      <h3 className="text-lg	font-medium py-4 border-y-2 mt-6 mb-4">
        Total Credit Hours : {totalCredit}
      </h3>
      <h3 className="text-lg	font-semibold">Total Price : {totalPrice} USD</h3>
    </div>
  );
};
Cart.propTypes = {
  selectedCourses: PropTypes.array,
};
export default Cart;
