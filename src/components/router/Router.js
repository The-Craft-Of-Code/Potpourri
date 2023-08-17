import React from 'react';
import App from "../../App";
import {AboutMe} from "../../pages/AboutMe";
import {HashRouter, Route, Routes} from "react-router-dom";

export function RouterComponent() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
    </HashRouter>
    )
}