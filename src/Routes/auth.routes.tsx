import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { Login } from "../Pages/Login/index";

import { app_base_url } from "../Utils/Urls";
export const AuthRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path={`${APP_BASE_URL}/:token`} element={<LoginToken />}></Route> */}
        <Route path={`${app_base_url}/`} element={<Login />}></Route>
        <Route path="/*" element={<Login />} />
      </Routes>
    </Router>
  );
};
