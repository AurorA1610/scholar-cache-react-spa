import PropTypes from "prop-types"; // ES6
import { ImCross } from "react-icons/im";

const Cart = ({
  selectedCourses,
  totalCredit,
  totalPrice,
  remainingCredit,
  handleRemoveFromCart,
}) => {
  return (
    <div className="md:flex justify-center items-center lg:w-1/5  mt-10 lg:ms-5  h-max lg:sticky top-6">
      <div className="md:w-max bg-white p-5 rounded-2xl">
        <h4 className="text-xl font-bold text-cyan-400 py-4 border-b-2">
          Remaining Credit {remainingCredit} hr
        </h4>
        <h3 className="text-2xl font-bold my-6">Selected Courses</h3>
        {selectedCourses.map((selectedCourse, idx) => (
          <div key={idx} className="flex items-center mb-2">
            <div className="border-2 bg-cyan-400 px-2 me-2 mb-2 text-lg	font-normal flex items-center justify-center">
              {idx + 1}{" "}
            </div>
            <h1 className="text-lg	font-normal text-gray-500">
              {selectedCourse.name}
            </h1>
            <button
              className="text-red-400 ms-3"
              onClick={() => {
                handleRemoveFromCart(selectedCourse._id);
              }}
            >
              <ImCross />
            </button>
          </div>
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
  handleRemoveFromCart: PropTypes.func,
};
export default Cart;
