import React from "react";
import ReactDOM from "react-dom/client";
import "./output.css";
import App from "./AppMain";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./components/UserManagement/Users";
import TheForm from "./components/UserManagement/TheForm";
import TheUpdateForm from "./components/UserManagement/TheUpdateForm";
import MainMenu from "./MainMenu";
import UserTypeSelect from "./components/UserManagement/UserTypeSelect";
import Login from "./components/Login";



import DriverTable from "./components/DeliveryManagement/DriverTable";
import UserDelivery from "./components/DeliveryManagement/customers";
import UsersTable from "./components/DeliveryManagement/usersTable";
import DriverDelivery from "./components/DeliveryManagement/Driver";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/TheForm" element={<TheForm />} />
      <Route path="/Users" element={<Users />} />
      <Route path="/TheUpdateForm/:id" element={<TheUpdateForm />} />
      <Route path="/MainMenu" element={<MainMenu />} />
      <Route path="/loginuser" element={<Login />} />
      <Route path="/usertypeselect" element={<UserTypeSelect />} />

      <Route
        path="/driverdelivery"
        element={<DriverDelivery></DriverDelivery>}
      />
      <Route path="/drivertable" element={<DriverTable></DriverTable>} />
      <Route path="/userdelivery" element={<UserDelivery></UserDelivery>} />
      <Route path="/userstable" element={<UsersTable></UsersTable>} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
