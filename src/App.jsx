import React from "react";
import { Routes, Route } from "react-router-dom"
import Loginpage from "./Login page/login form/Loginpage";
import Fullpage from "./Login page/Fullpage";


const App = () => {


  return (
    <div>
      <Routes>
          <Route path="/" element={<Loginpage />} />
          <Route path="/allpage" element={<Fullpage />} />
      </Routes>
    </div>
  );
};

export default App;
