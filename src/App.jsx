import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Content from "./component/Main/Content";

function App() {
  // select all img elements
  const images = document.querySelectorAll("img");

  // loop over the images and add the loading="lazy" attribute
  images.forEach((image) => {
    image.setAttribute("loading", "lazy");
  });

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Content />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
