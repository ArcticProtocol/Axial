import React from "react";
import Dashboard from "./Pages/Dashboard";
import Header from "./Components/Header/Header";
import LandingPage from "./Pages/Landing";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import OffsetView from "./Pages/Offset";
import SwapView from "./Pages/Swap";
import OrderConfirmationPage from "./Components/Carbon/OrderConfrimation";
import { useConnectionStatus } from "@thirdweb-dev/react";
import { ThirdwebProvider, metamaskWallet } from "@thirdweb-dev/react";

const App: React.FC = () => {
  return (
    <>
      <ThirdwebProvider
        supportedWallets={[metamaskWallet()]}
        activeChain="mumbai"
      >
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/offset" element={<OffsetView />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/swap" element={<SwapView />} />
            <Route path="/confirmOrder" element={<OrderConfirmationPage />} />
          </Routes>
          <Footer />
        </Router>
      </ThirdwebProvider>
    </>
  );
};


const ProtectedRoute = ({ element, ...rest }: any) => {
  const connectionStatus = useConnectionStatus();

  return connectionStatus === "disconnected" ? <Route {...rest} element={element} /> : <Navigate to="/" />;
};
export default App;
