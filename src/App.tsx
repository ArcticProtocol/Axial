import React, { createContext, useContext, useEffect, useState } from "react";
import Dashboard from "./Pages/Dashboard";
import Header from "./Components/Header/Header";
import LandingPage from "./Pages/Landing";
import Footer from "./Components/Footer/Footer";
import { FC } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import OffsetView from "./Pages/Offset";
import SwapView from "./Pages/Swap";
import OrderConfirmationPage from "./Components/Carbon/OrderConfrimation";
import { useAddress, useConnectionStatus } from "@thirdweb-dev/react";
import { ThirdwebProvider, metamaskWallet } from "@thirdweb-dev/react";
import { getUserStatus } from "./Repostitory/Repository";
import SignupDialog from "./Components/Signup/Signup";
import UserAppContext from "./Context/usermtecontext";

const App: React.FC = () => {
  const [userMeta, setuserMeta] = useState({
    userId: "",
    name: "",
    pubcliKey: "",
  });

  // Function to update the object
  const updateUserMeta = (user: any) => {
    setuserMeta(user);
  };

  return (
    <>
      <ThirdwebProvider
        supportedWallets={[metamaskWallet()]}
        activeChain="mumbai"
      >
        <UserAppContext.Provider value={{ userMeta, updateUserMeta }}>
          <RouteHandler />
        </UserAppContext.Provider>
      </ThirdwebProvider>
    </>
  );
};

const RouteHandler: React.FC<{}> = () => {
  const address = useAddress();
  const [hasRegistered, setRegistered] = useState(true);

  const { userMeta, updateUserMeta } = useContext(UserAppContext)!;

  useEffect(() => {
    const checkRegistered = async () => {
      let user = await getUserStatus(address!);
      console.log(user.userExists);
      if (user.userExists) {
        setRegistered(true);
        updateUserMeta({
          userId: user.user.userID,
          name: user.user.name,
          pubcliKey: user.user.publicKey,
        });
      } else {
        setRegistered(false);
      }
    };

    if (address) {
      checkRegistered();
    }
  }, [address]);

  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/swap" element={<SwapView />} />

        <Route
          path="/offset"
          element={<PrivateRoute component={OffsetView} />}
        />
        <Route
          path="/dashboard"
          element={<PrivateRoute component={Dashboard} />}
        />
        <Route
          path="/confirmOrder"
          element={<PrivateRoute component={OrderConfirmationPage} />}
        />
      </Routes>
      <Footer />

      {!hasRegistered && (
        <SignupDialog address={address!} setRegistered={setRegistered} />
      )}
    </Router>
  );
};

interface PropType {
  component: React.FC;
}

const PrivateRoute: FC<PropType> = ({ component: Component }) => {
  const connectionStatus = useConnectionStatus();

  if (connectionStatus === "connected") return <Component />;
  return <OverlayDialog />;
};

const OverlayDialog = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white  p-16 rounded-2xl">
        <p className="text-xl">Please connect your wallet first.</p>
        <Link to="/" className="text-blue-500 underline mt-4 block">
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default App;
