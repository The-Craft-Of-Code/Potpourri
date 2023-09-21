import React from 'react';
import App from "../../App";
import {AboutUs} from "../../pages/AboutUs";
import {HashRouter, Route, Routes} from "react-router-dom";

export function RouterComponent() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </HashRouter>
    )
}