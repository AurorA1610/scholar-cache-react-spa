import PropTypes from "prop-types"; // ES6
import { LuDollarSign } from "react-icons/lu";
import { IoBookOutline } from "react-icons/io5";
import { useEffect, useState } from "react";

const Course = ({ course, handleAddToCart, selectedCourses }) => {
  const { _id, img, name, details, credit, price } = course;
  const selectedCoursesIds = selectedCourses.map((course) => course._id);
  const [isCourseSelected, setIsCourseSelected] = useState(false);
  useEffect(() => {
    if (selectedCoursesIds.includes(_id)) {
      setIsCourseSelected(true);
    }
  }, [selectedCoursesIds]);
  return (
    <div className="p-4 bg-white border-2 border-transparent rounded-2xl transition duration-0 hover:border-cyan-300">
      <img src={img} alt="" className="w-full h-72 rounded-xl" />
      <h1 className="text-xl my-5 font-semibold">{name}</h1>
      <p className="text-base text-gray-500 font-normal">{details}</p>
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
      {isCourseSelected ? (
        <>
          <button
            className="w-full bg-cyan-400 text-white text-center text-lg font-semibold px-3 py-1 rounded-xl hover:shadow-lg hover:shadow-cyan-700	 active:bg-cyan-200 cursor-pointer border-none transition duration-300 active:text-black active:transition-none"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Select
          </button>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <p className="py-4 text-center">
                This course is already in your cart.
              </p>
            </div>
          </dialog>
        </>
      ) : (
        <button
          className="w-full bg-cyan-400 text-white text-center text-lg font-semibold px-3 py-1 rounded-xl hover:shadow-lg hover:shadow-cyan-700	 active:bg-cyan-200 cursor-pointer border-none transition duration-300 active:text-black active:transition-none"
          onClick={() => {
            handleAddToCart({ _id, name, credit, price });
          }}
        >
          Select
        </button>
      )}
    </div>
  );
};
Course.propTypes = {
  course: PropTypes.object.isRequired,
  handleAddToCart: PropTypes.func,
  selectedCourses: PropTypes.array,
};
export default Course;
