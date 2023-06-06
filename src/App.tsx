import React from "react";
import Dashboard from "./Pages/Dashboard";
import Header from "./Components/Header/Header";
import LandingPage from "./Pages/Landing";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OffsetView from "./Pages/Offset";
import SwapView from "./Pages/Swap";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/offset" element={<OffsetView />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/swap" element={<SwapView />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
