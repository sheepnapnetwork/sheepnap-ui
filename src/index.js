import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import RequestPage from "./Routes/RequestPage";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="request" element={<RequestPage />} />
  </Routes>
</BrowserRouter>,
  rootElement
);