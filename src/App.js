import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./component/Nav";
import Home from "./component/Home";
import Form from "./component/Form";

function App() {
  const [dark, setDark] = useState(false);

  const toggleMode = () => setDark(!dark);

  return (
    <div
      style={{
        backgroundColor: dark ? "#111" : "white",
        color: dark ? "white" : "black",
        minHeight: "100vh",
        transition: "0.3s",
      }}
    >
      <Router>
        <Nav dark={dark} toggleMode={toggleMode} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form dark={dark} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
