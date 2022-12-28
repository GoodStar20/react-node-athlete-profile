import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lists from "./pages/Lists";
import Basic from "./pages/Basic";
import About from "./pages/About";
import Summary from "./pages/Summary";

import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Lists />} />
        <Route path="/new">
          <Route index element={<Basic />} />
          <Route path="basic" element={<Basic />} />
          <Route path="about" element={<About />} />
          <Route path="preview" element={<Summary />} />
        </Route>
        <Route path="/summary" element={<Summary />} />
        <Route path="/profile/:id">
          <Route index element={<Basic />} />
          <Route path="basic" element={<Basic />} />
          <Route path="about" element={<About />} />
          <Route path="preview" element={<Summary />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
