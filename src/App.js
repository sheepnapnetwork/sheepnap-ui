import React, {useState} from "react";
import RequestPage from "./Routes/RequestPage";
import BadgesPage from "./Routes/BadgesPage";
import SearchPage from "./Routes/SearchPage";
import MyBookens from "./Routes/MyBookens";
import Layout from "./Components/Layout";
import AccommodationDetailPage from "./Routes/AccommodationDetail";

import {
  Routes,
  Route
} from "react-router-dom";

export default function App() {

  const [wallet, setWallet] = useState("...");

  return (
    <div>
    <Layout wallet={wallet} setWallet={setWallet}  />
      <Routes>
        <Route path="/" element={<SearchPage />}/>
        <Route path="request" element={<RequestPage wallet={wallet}/>} />
        <Route path="badges" element={<BadgesPage />} />
        <Route path="mybookens" element={<MyBookens />} />
        <Route path="accommodationdetail" element={<AccommodationDetailPage />} />
      </Routes>
    </div>
  );
}