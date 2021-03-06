
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
import InfoPage from "./Routes/InfoPage";

import MyPropertiesPage from "./Routes/MyPropertiesPage";
import HomePage from "./Routes/HomePage";
import ApprovalRequestCreatePage from "./Routes/ApprovalRequestCreatePage";
import MyPropertyDashboardPage from "./Routes/MyPropertyDashboardPage";
import AvailabilityPage from "./Routes/AvailabilityPage";

export default function App() {

  const [wallet, setWallet] = useState("");
  const [balance, setBalance] = useState(0);

  return (
    <div>
    <Layout wallet={wallet} setWallet={setWallet} balance={balance} setBalance={setBalance}/>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/search" element={<SearchPage />}/>
        
        <Route path="approvalrequests">
          <Route path="dashboard" element={<ApprovalRequestPage />}/>
          <Route path="create" element={<ApprovalRequestCreatePage wallet={wallet} />}/>
          <Route path="detail" element={<ApprovalRequestDetailPage wallet={wallet}/>} />
        </Route>

        <Route path="info" element={<InfoPage />} />
        <Route path="badges" element={<BadgesPage />} />
        <Route path="mybookens" element={<MyBookens />} />
                
        <Route path="property">
          <Route path="availability/:propertyaddress" element={<AvailabilityPage wallet={wallet} />} />
          <Route path="detail/:propertyaddress" element={<PropertyDetailPage />} />
          <Route path="dashboard/:propertyaddress" element={<MyPropertyDashboardPage wallet={wallet} />} />
          <Route path="bookens" element={<EmitBookenPage />} />
          <Route path="create" element={<PropertyCreatePage wallet={wallet}/>} />
          <Route path="myproperties" element={<MyPropertiesPage wallet={wallet}/>} />
        </Route>

      </Routes>
    </div>
  );
}