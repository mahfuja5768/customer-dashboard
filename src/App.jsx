import Home from "./Home";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

const App = () => {
  const [toggle, setToggle] = useState(true);
  const toggleAction = () => {
    setToggle(!toggle);
  };
  return (
    <div className=" container-fluid bg-secondary min-vh-100">
      <div className="row">
        {toggle && (
          <div className="col-2 bg-white vh-100 position-fixed">
            <Sidebar />
          </div>
        )}
        <div className="col p-0">
          <Home toggleAction={toggleAction} />
        </div>
      </div>
    </div>
  );
};

export default App;
