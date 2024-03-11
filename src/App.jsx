import Home from "./Home";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

const App = () => {
  const [toggle, setToggle] = useState(true);
  const toggleAction = () => {
    setToggle(!toggle);
  };
  return (
    <div
      className=" container-fluid bg-[#d1d5cc] min-vh-100"
      style={{ backgroundColor: "#d1d5cc", minHeight: "100vh" }}
    >
      <div className="row">
        {toggle && (
          <div className="col-4 col-md-2 bg-white vh-100 position-fixed">
            <Sidebar />
          </div>
        )}
        {toggle && <div className="col-4 col-md-2"></div>}
        <div className="col p-0">
          <Home toggleAction={toggleAction} toggle={toggle} />
        </div>
      </div>
    </div>
  );
};

export default App;
