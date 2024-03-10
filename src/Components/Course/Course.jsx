import PropTypes from "prop-types"; // ES6
import { LuDollarSign } from "react-icons/lu";
import { IoBookOutline } from "react-icons/io5";

const Course = ({ course }) => {
  const { img, name, details, credit, price } = course;
  return (
    <div className="p-4 bg-white border-2 border-transparent rounded-lg transition duration-0 hover:border-cyan-300">
      <img src={img} alt="" className="w-full h-72 rounded-lg" />
      <h1 className="text-xl my-5 font-semibold">{name}</h1>
      <p className="text-base text-slate-700 font-normal">{details}</p>
      <div className="flex justify-between my-5">
        <div className="flex items-center text-lg font-medium">
          <LuDollarSign />
          <span className="ms-6">Price : {price}</span>
        </div>
        <div className="flex items-center text-lg font-medium">
          <IoBookOutline />
          <span className="ms-6">Credit : {credit}hr</span>
        </div>
      </div>
      <button className="w-full bg-cyan-400 text-white text-center text-lg font-semibold px-3 py-1 rounded-lg hover:shadow-lg hover:shadow-cyan-700	 active:bg-cyan-200 cursor-pointer border-none transition duration-300 active:text-black active:transition-none">
        Select
      </button>
    </div>
  );
};
Course.propTypes = {
  course: PropTypes.object,
};
export default Course;
