import PropTypes from "prop-types"; // ES6
const CartItems = ({ selectedCourse, idx }) => {
  return (
    <div>
      <span>{idx + 1}</span>
      <h1>{selectedCourse.name}</h1>
    </div>
  );
};
CartItems.propTypes = {
  selectedCourse: PropTypes.object,
  idx: PropTypes.number,
};
export default CartItems;
