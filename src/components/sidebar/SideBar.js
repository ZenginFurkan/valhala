import React from "react";
import { Link } from "react-router-dom";
import {
  HouseDoor,
  Collection,
  Person,
  Building,
  Car,
  FileText,
  Shield,
  Bell,
  Truck,
} from "react-bootstrap-icons";
import img from "../assets/Group8.png";

export default function SideBar() {
  return (
    <div
      className="vh-100 d-flex flex-column  align-items-center"
      style={{ backgroundColor: "#373739", color: "#fff", padding: "20px" }}
    >
      <div className="mb-4">
        <img src={img} alt="Logo" style={{ width: "144px", }} />
      </div>
      <div className="d-flex flex-column align-items-start mt-3 ">
        <Link
          to="/"
          className="btn btn-link d-flex align-items-center mb-3"
          style={{ color: "#fff", textDecoration: "none" }}
        >
          <div className="me-2">
            <HouseDoor size={20} />
          </div>
          <div>Anasayfa</div>
        </Link>
        <Link
          to="/stations"
          className="btn btn-link d-flex align-items-center mb-3"
          style={{ color: "#fff", textDecoration: "none" }}
        >
          <div className="me-2">
            <Collection size={20} />
          </div>
          <div>İstasyonlar</div>
        </Link>
        <Link
          to="/users"
          className="btn btn-link d-flex align-items-center mb-3"
          style={{ color: "#fff", textDecoration: "none" }}
        >
          <div className="me-2">
            <Person size={20} />
          </div>
          <div>Kullanıcılar</div>
        </Link>
        <Link
          to="/companies"
          className="btn btn-link d-flex align-items-center mb-3"
          style={{ color: "#fff", textDecoration: "none" }}
        >
          <div className="me-2">
            <Building size={20} />
          </div>
          <div>Firmalar</div>
        </Link>
        <Link
          to="/cars"
          className="btn btn-link d-flex align-items-center mb-3"
          style={{ color: "#fff", textDecoration: "none" }}
        >
          <div className="me-2">
            <Truck size={20} />
          </div>
          <div>Araçlar</div>
        </Link>
        <Link
          to="/transactions"
          className="btn btn-link d-flex align-items-center mb-3"
          style={{ color: "#fff", textDecoration: "none" }}
        >
          <div className="me-2">
            <FileText size={20} />
          </div>
          <div>İşlemler</div>
        </Link>
        <Link
          to="/authority"
          className="btn btn-link d-flex align-items-center mb-3"
          style={{ color: "#fff", textDecoration: "none" }}
        >
          <div className="me-2">
            <Shield size={20} />
          </div>
          <div>Yetkiler</div>
        </Link>
        <Link
          to="/notifications"
          className="btn btn-link d-flex align-items-center mb-3"
          style={{ color: "#fff", textDecoration: "none" }}
        >
          <div className="me-2">
            <Bell size={20} />
          </div>
          <div>Bildirimler</div>
        </Link>
      </div>
    </div>
  );
}
