import React from "react";
import img from "../../components/assets/Group8.png";
import "../../index.css";
import GreenButton from "../buttons/GreenButton";
import img2 from "../../components/assets/Group7.png";
import { Link } from "react-router-dom";

export default function LogIn() {
  return (
    <div
      className="vh-100 d-flex flex-column"
      style={{ backgroundColor: "#373739" }}
    >
      <div className="container-fluid h-100 d-flex flex-column justify-content-center align-items-center">
        <div className="row w-100">
          <div className="col d-flex justify-content-center">
            <img
              src={img}
              className="img-fluid"
              alt="Sample"
              style={{
                position: "absolute",
                top: "50%",
                left: "25%",
                transform: "translate(-50%, -50%)",
              }}
            />
          </div>
        </div>
        <div className="row flex-grow-1 w-100 d-flex justify-content-end align-items-center">
          <div
            className="col-md-8 col-lg-6 col-xl-4"
            style={{ marginRight: "5%" }}
          >
            <form
              className="border bg-white p-5 d-flex flex-column align-items-center"
              style={{ borderRadius: "8px", width: "500px", height: "850px" }}
            >
              {/* Hoşgeldiniz */}
              <div className="text-center mt-5 mb-4">
                <h2>Hoşgeldiniz</h2>
                <p>Lütfen bilgilerinizi girin</p>
              </div>

              {/* Email input */}
              <div className="form-outline mb-4" style={{ width: "100%" }}>
                <label
                  className="form-label text-muted"
                  htmlFor="form3Example3"
                >
                  Email adresi
                </label>
                <input
                  type="email"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  style={{ width: "100%" }}
                />
              </div>

              {/* Password input */}
              <div className="form-outline mb-3" style={{ width: "100%" }}>
                <label
                  className="form-label text-muted"
                  htmlFor="form3Example4"
                >
                  Şifre
                </label>
                <input
                  type="password"
                  id="form3Example4"
                  className="form-control form-control-lg"
                  style={{ width: "400px" }}
                />
              </div>

              <div
                className="d-flex justify-content-between align-items-center mb-4"
                style={{ width: "100%" }}
              >
                {/* Checkbox */}
                <div className="form-check mb-0">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    id="form2Example3"
                  />
                  <label
                    className="form-check-label text-muted"
                    htmlFor="form2Example3"
                  >
                    Beni hatırla
                  </label>
                </div>
                <a href="#!" style={{ color: "#fd7e14" }}>
                  Şifremi unuttum?
                </a>
              </div>

              <div
                className="d-flex justify-content-center text-center text-lg-start mt-4 pt-2"
                style={{ width: "100%" }}
              >
                <Link to={"/home"}>
                  <GreenButton label="Giriş Yap" />
                </Link>
              </div>
            </form>
          </div>
        </div>
        <div className="row w-100">
          <div className="col d-flex justify-content-center">
            <img
              src={img2}
              alt="Sample"
              className="img-fluid"
              style={{
                position: "absolute",
                bottom: "0",
                left: "25%",
                transform: "translateX(-50%)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
