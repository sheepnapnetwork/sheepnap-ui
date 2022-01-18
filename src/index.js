import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import RequestPage from "./Routes/RequestPage";
import BadgesPage from "./Routes/BadgesPage";
import MyBookens from "./Routes/MyBookens";
import Header from "./Components/Header";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
  <Header/> 
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="request" element={<RequestPage />} />
    <Route path="badges" element={<BadgesPage />} />
    <Route path="mybookens" element={<MyBookens />} />
  </Routes>
</BrowserRouter>,
  rootElement
);