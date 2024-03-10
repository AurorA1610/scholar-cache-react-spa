import PropTypes from "prop-types"; // ES6

const Cart = ({
  selectedCourses,
  totalCredit,
  totalPrice,
  remainingCredit,
}) => {
  return (
    <div className="md:flex justify-center items-center lg:w-1/4  mt-10 lg:ms-5  h-max lg:sticky top-28">
      <div className="md:w-max bg-white p-5 rounded-2xl">
        <h4 className="text-xl font-bold text-cyan-400 py-4 border-b-2">
          Remaining Credit {remainingCredit} hr
        </h4>
        <h3 className="text-2xl font-bold my-6">Selected Courses</h3>
        {selectedCourses.map((selectedCourse, idx) => (
          <h1 key={idx} className="mb-2 text-lg	font-normal text-gray-500">
            <span>{idx + 1} </span>
            {selectedCourse.name}
          </h1>
        ))}
        <h3 className="text-lg	font-medium py-4 border-y-2 mt-6 mb-4">
          Total Credit : {totalCredit} hr
        </h3>
        <h3 className="text-lg	font-semibold">Total Price : {totalPrice} USD</h3>
      </div>
    </div>
  );
};
Cart.propTypes = {
  selectedCourses: PropTypes.array,
  totalCredit: PropTypes.number,
  totalPrice: PropTypes.number,
  remainingCredit: PropTypes.number,
};
export default Cart;
