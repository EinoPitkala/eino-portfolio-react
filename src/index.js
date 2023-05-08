import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import Home from "./pages/Home";
import NavBar from "./components/global/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/global/Footer";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <NavBar />
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
    <Footer />
  </Router>
);
