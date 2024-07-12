import React from "react";
import SideBar from "../sidebar/SideBar";
import NavBar from "../navbar/NavBar";
import { useLocation } from "react-router-dom";
import "../../index.css";

export default function Layout({ children }) {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  const pageTitle =
    {
      "/": "Anasayfa",
      "/home": "Anasayfa",
      "/stations": "İstasyonlar",
      '/users': 'Kullanıcılar'  ,
      "/companies": "Firmalar",
      "/cars": "Araçlar",
      '/transactions': 'İşlemler',
      "/authority": 'Yetkiler',
    }[location.pathname] || "Page Title";

  return (
    <div>
      {!isLoginPage && (
        <div className="row g-0">
          <div className="col-2">
            <SideBar />
          </div>
          <div className="col-10" style={{ backgroundColor: "#F4F4F4" }} >
            <NavBar pageTitle={pageTitle} />
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
