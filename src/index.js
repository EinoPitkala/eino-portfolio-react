import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home";
import NavBar from "./components/global/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" exact element={<Home />} />
    </Routes>
  </Router>
);
