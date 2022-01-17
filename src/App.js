import { Link } from "react-router-dom";
import RequestPage from "./Routes/RequestPage";
import React, { useState } from "react";

export default function App() {

  const [wallet, setWallet] = useState("");


  return (
    <div>
      <h1>Sheepnap Menu</h1>
      <div className="wallet-connection">
          <button>Connect metamask wallet</button>
          <p>{wallet}</p>
      </div>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/home" element={<App/>}>Home</Link> |{" "}
        <Link to="/request" element={<RequestPage/>}>Approval requests</Link> | {" "}
        <Link to="/search">Search</Link> |{" "}
        <Link to="/search">Badges</Link>
      </nav>
    </div>
  );
}