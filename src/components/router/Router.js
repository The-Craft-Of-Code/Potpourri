import React from 'react';
import App from "../../App";
import {AboutMe} from "../../pages/AboutMe";
import {BrowserRouter, Route, Routes} from "react-router-dom";

export function RouterComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
    </BrowserRouter>
    )
}