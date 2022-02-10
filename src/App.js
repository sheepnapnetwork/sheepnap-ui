
import React, {useState} from "react";
import { Routes, Route } from "react-router-dom";
import './scss/app.scss'

import ApprovalRequestPage from "./Routes/ApprovalRequestPage";
import ApprovalRequestDetailPage from "./Routes/ApprovalRequestDetailPage.jsx";
import BadgesPage from "./Routes/BadgesPage";
import SearchPage from "./Routes/SearchPage";
import MyBookens from "./Routes/MyBookensPage";
import Layout from "./Components/Layout";
import PropertyDetailPage from "./Routes/PropertyDetailPage";
import EmitBookenPage from "./Routes/EmitBookenPage";
import PropertyCreatePage from "./Routes/PropertyCreatePage";

import MyPropertiesPage from "./Routes/MyPropertiesPage";

export default function App() {

  const [wallet, setWallet] = useState("...");
  const [balance, setBalance] = useState(0);

  return (
    <div>
    <Layout wallet={wallet} setWallet={setWallet} balance={balance} setBalance={setBalance}/>
      <Routes>
        <Route path="/" element={<SearchPage />}/>
        <Route path="approvalrequests" element={<ApprovalRequestPage wallet={wallet}/>} />
        <Route path="approvalrequestsdetail" element={<ApprovalRequestDetailPage wallet={wallet}/>} />
        <Route path="badges" element={<BadgesPage />} />
        <Route path="mybookens" element={<MyBookens />} />
        <Route path="propertydetail" element={<PropertyDetailPage />} />
        <Route path="emitbooken" element={<EmitBookenPage />} />
        <Route path="createproperty" element={<PropertyCreatePage account={wallet}/>} />
        <Route path="myproperties" element={<MyPropertiesPage account={wallet}/>} />
      </Routes>
    </div>
  );
}