import React from "react";
import logo from "./logo.svg";
import Dashboard from "./Pages/Dashboard";
import Header from "./Components/Header/Header";
import LandingPage from "./Pages/Landing";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
