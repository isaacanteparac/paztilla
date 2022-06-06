import React, { useState } from "react";
import "./App.css";
import "./css/main.css";
import Home from "./components/Home";
import Doctor from "./components/Doctor";
import { IconCapsule, IconDoctor, IconLogo } from "./components/Icons";

function App() {
  const [getHome, setHome] = useState(true);
  const [getDoctor, setDoctor] = useState(false);

  const clickDoctor = () => {
    setDoctor(true);
    setHome(false);
  };

  const clickHome = () => {
    setHome(true);
    setDoctor(false);
  };

  return (
    <>
      <div className="head">
        <div className="contentHead">
          <IconLogo/>
          <label className="textLogo">Paztilla</label>
          <div className="contentBtnDoctor">
            <button onClick={clickDoctor} className="contentBtnHeader"><IconDoctor className="icon" /> Doctores </button>
            <button onClick={clickHome} className="contentBtnHeader"><IconCapsule className="icon" /> Medicinas </button>
          </div>
        </div>
      </div>
      <div className="content">
        {getHome ? <Home /> : null}
        {getDoctor ? <Doctor nameSection="Medicos"/> : null}
      </div>
    </>
  );
}

export default App;
