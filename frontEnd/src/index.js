import React from "react";
import ReactDOM from "react-dom/client";
import "./output.css";
import App from "./AppMain";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./components/CustomerManagement/Users";
import TheForm from "./components/CustomerManagement/TheForm";
import TheUpdateForm from "./components/CustomerManagement/TheUpdateForm";
 

import MainMenu from "./MainMenu";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/TheForm" element={<TheForm />} />
      <Route path="/Users" element={<Users />} />
      <Route path="/TheUpdateForm/:id" element={<TheUpdateForm />} />
      <Route path="/MainMenu" element={<MainMenu/>}/>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
