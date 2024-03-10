import "./App.css";
import Cart from "./Components/Cart/Cart";
import Courses from "./Components/Courses/Courses";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="bg-slate-200 p-10">
      <Header></Header>
      <div className="flex">
        <Courses></Courses>
        <Cart></Cart>
      </div>
    </div>
  );
}

export default App;
