import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Captain from '../pages/Captain';
import Sailor from '../pages/Sailor';
import All from '../pages/All';
import Home from "../pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="../pages/Captain" element={<Captain />} />
        <Route path="../pages/Sailor" element={<Sailor />} />
        <Route path="../pages/All" element={<All />} />
        <Route path="../pages/Home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
