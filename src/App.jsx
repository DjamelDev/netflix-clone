import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Video from "./components/Video";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video/:id" element={<Video />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
      {/* navbar */}
    </div>
  );
};

export default App;
