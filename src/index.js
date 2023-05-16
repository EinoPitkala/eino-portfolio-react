import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import Home from "./pages/Home";
import NavBar from "./components/global/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/global/Footer";
import Info from "./pages/Info";
import Clients from "./pages/Clients";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <NavBar />
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/info" exact element={<Info />} />
      <Route path="/clients" exact element={<Clients />}/>
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
    <Footer />
  </Router>
);
