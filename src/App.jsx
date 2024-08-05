import React from "react";
import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "../src/components/header/index.jsx";
import Footer from "../src/components/footer/index.jsx";
import Home from "./pages/home";

const App = () => {
  return (
    <>
      <HashRouter>
        <Header />
        <Routes>
          <Route exact={true} path="/" element={<Home />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
};
export default App;
